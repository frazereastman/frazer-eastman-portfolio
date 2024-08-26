<script setup>
import { fabIconDetails } from '@/constants/constants';

const navigateToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/frazer-eastman/';
}
</script>

<template>
    <div class="gap-2 flex flex-col">
        <v-btn 
            size="x-large" 
            class="w-full bg-white body-text font-bold" 
            append-icon="mdi-linkedin"
            :href="fabIconDetails.linkedIn.url"
        >
            Message me on linkedIn
        </v-btn>
        <v-btn 
            size="x-large" 
            class="w-full bg-white body-text font-bold" 
            append-icon="mdi-email-outline"
            href="mailto:frazer@frazereastman.co.uk"
        >
            Email me directly
        </v-btn>
    </div>
</template>

<style scoped>

</style>