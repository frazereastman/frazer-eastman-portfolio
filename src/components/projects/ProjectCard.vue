<template>
    <div class="project-card-wrapper d-flex flex-column gap-2 border-solid border-4 border-white rounded-lg p-4">
        <h2 class="font-bold text-2xl">
            {{ project.title }}
        </h2>
        <p class="text-body-small">
            {{ project.summary }}
        </p>
        <v-btn 
            variant="outlined" 
            color="white"
            :to="`/projects/${project.route}`"
        >
            View Project
        </v-btn>
    </div>

</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
</style>