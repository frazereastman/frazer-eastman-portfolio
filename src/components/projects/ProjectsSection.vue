<template> 
    <section class="mt-8">
        <h1 class="font-bold text-5xl mb-4">
            Projects.
        </h1>
        <v-row>
            <v-col 
                cols="12" 
                sm="6" 
                v-for="(project, index) in 4" 
                :key="index"
            >
                <project-card />
            </v-col>
        </v-row>
        <v-btn 
            variant="outlined" 
            color="white"
            class="mt-4"
            size="x-large"
        >
            View All Projects
        </v-btn>
    </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';

</script>

<style scoped>
</style>