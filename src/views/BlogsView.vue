<script setup>
import { blogPosts } from '@/data/blogPosts';

const blogsObject = blogPosts;

</script>

<template>
    <v-container class="mt-16">
        <v-btn @click="$router.push('/')" color="black" variant="text" class="mb-4" prepend-icon="mdi-arrow-left">
            back to home
        </v-btn>
        <h1 class="text-h2">Blogs</h1>
        <p class="my-4">
            This blog is where I share insights from my work as a software 
            developer. I write about frontend engineering, modern JavaScript 
            frameworks, performance, accessibility, and lessons learned while 
            building real-world applications. My goal is to document useful 
            ideas, explore better ways of building software, and contribute back 
            to the developer community.
        </p>
        <div>
            <v-card v-for="blog in blogsObject" :key="blog.title" class="mb-4" variant="tonal">
                <v-card-title>
                    {{ blog.title }}
                </v-card-title>
                <v-card-subtitle>
                    Published on {{ blog.date }}
                </v-card-subtitle>
                <v-card-text>
                    {{ blog.content }}
                </v-card-text>
                <v-card-actions>
                    <v-btn :to="`/blogs/${blog.route}`" text color="black">Read More</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </v-container>
</template>

<style scoped></style>