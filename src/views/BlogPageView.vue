<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import { blogPosts } from '@/data/blogPosts';

const route = useRoute();
const md = new MarkdownIt({ html: true });
const postFiles = import.meta.glob('../posts/*.md', { as: 'raw' });

const currentSlug = computed(() => route.params.name);
const post = computed(() => blogPosts.find((p) => p.route === currentSlug.value) || null);
const rawMarkdown = ref('');
const renderedHtml = computed(() => (rawMarkdown.value ? md.render(rawMarkdown.value) : ''));

watchEffect(async () => {
  rawMarkdown.value = '';

  if (!post.value) return;

  const filePath = `../posts/${post.value.route}.md`;
  const loader = postFiles[filePath];

  if (!loader) return;

  rawMarkdown.value = await loader();
});
</script>

<template>
  <v-container class="mt-16">
    <v-btn @click="$router.push('/blogs')" color="black" variant="text" class="mb-4" prepend-icon="mdi-arrow-left">
      back to blogs
    </v-btn>
    <div v-if="post">
      <h1 class="text-h3 font-bold">{{ post.title }}</h1>
      <p class="text-sm text-gray-500 mb-8 mt-4">Published on {{ post.date }}</p>
      <div class="prose max-w-none" v-html="renderedHtml"></div>
    </div>

    <div v-else>
      <h1 class="text-h4 font-bold">Blog post not found</h1>
      <p class="mt-2">The post you were looking for doesn’t exist. Try selecting another post from the blogs page.</p>
    </div>
  </v-container>
</template>

<style scoped>

.prose h1,
.prose h2,
.prose h3 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.prose p {
  margin: 0.8rem 0;
  line-height: 1.7;
}

.prose ul,
.prose ol {
  margin: 0.8rem 0 0.8rem 1.25rem;
}

.prose code {
  background: rgba(255, 255, 255, 0.06);
  padding: 0.2rem 0.4rem;
  border-radius: 0.3rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
}</style>