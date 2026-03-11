<template> 
    <section class="mt-8">
        <h1 class="font-bold text-5xl mb-4">
            Projects.
        </h1>
        <v-row>
            <v-col 
                cols="12" 
                sm="6" 
                lg="4"
                v-for="project in projects" 
                :key="project.route"
            >
                <project-card :project="project" />
            </v-col>
        </v-row>
    </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
import { projects } from '@/data/projects';

</script>

<style scoped>
</style>