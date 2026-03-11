<script setup>
import { projects } from '@/data/projects';

const projectsList = projects;
</script>

<template>
    <v-container class="mt-16">
        <v-btn @click="$router.push('/')" color="black" variant="text" class="mb-4" prepend-icon="mdi-arrow-left">
            back to home
        </v-btn>
        <h1 class="text-h2">Projects</h1>
        <p class="my-4">
            These are the projects I’ve built (or am building) to explore new ideas.
            Click through any project to see details and source.
        </p>
        <div class="hover:scale-[1.02] transition-transform duration-200">
            <v-card v-for="project in projectsList" :key="project.title" class="mb-4" variant="tonal">
                <v-card-title>
                    {{ project.title }}
                </v-card-title>
                <v-card-subtitle>
                    Published on {{ project.date }}
                </v-card-subtitle>
                <v-card-text>
                    {{ project.summary }}
                </v-card-text>
                <v-card-actions>
                    <v-btn :to="`/projects/${project.route}`" text color="black">View Project</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </v-container>
</template>

<style scoped></style>
