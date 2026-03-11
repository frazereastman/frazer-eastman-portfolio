<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import { projects } from '@/data/projects';

const route = useRoute();
const md = new MarkdownIt({ html: true });
const projectFiles = import.meta.glob('../projects/*.md', { as: 'raw' });

const currentSlug = computed(() => route.params.name);
const project = computed(() => projects.find((p) => p.route === currentSlug.value) || null);
const rawMarkdown = ref('');
const renderedHtml = computed(() => (rawMarkdown.value ? md.render(rawMarkdown.value) : ''));

watchEffect(async () => {
  rawMarkdown.value = '';

  if (!project.value) return;

  const filePath = `../projects/${project.value.route}.md`;
  const loader = projectFiles[filePath];

  if (!loader) return;

  rawMarkdown.value = await loader();
});
</script>

<template>
  <v-container class="mt-16">
    <v-btn @click="$router.push('/projects')" color="black" variant="text" class="mb-4" prepend-icon="mdi-arrow-left">
      back to projects
    </v-btn>
    <div v-if="project">
      <h1 class="text-h3 font-bold">{{ project.title }}</h1>
      <p class="text-sm text-gray-500 mb-8">Published on {{ project.date }}</p>
      <div class="prose max-w-none" v-html="renderedHtml"></div>
    </div>

    <div v-else>
      <h1 class="text-h4 font-bold">Project not found</h1>
      <p class="mt-2">The project you were looking for doesn’t exist. Try selecting another project from the projects list.</p>
    </div>
  </v-container>
</template>

<style scoped></style>
