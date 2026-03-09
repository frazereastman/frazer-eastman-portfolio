<template>
    <section>
        <h1 class="font-bold text-5xl mb-3">
            What I Do.
        </h1>
        <dev-skills-logos />
        <p class="py-4 text-center">
            I build things for the web in an AGILE way. I care deeply about accessible design, and 
            writing code following best practices. Clean architecture. 
            Thoughtful patterns. The kind of codebase I'd be happy to inherit.
        </p>
        <div class="d-flex gap-4 justify-center flex-wrap">
            <v-btn 
                variant="outlined" 
                color="white"
                size="x-large"
            >
                Projects
            </v-btn>
            <v-btn 
                variant="outlined"
                class="bg-white text-black rounded"
                size="x-large"
            >
                Resume
            </v-btn>
            <v-btn 
                variant="outlined" 
                color="white"
                size="x-large"
            >
                Blogs
            </v-btn>
        </div>
    </section>
</template>

<script setup>
import devSkillsLogos from './DevSkillsLogos.vue'

</script>

<style scoped>

</style>
