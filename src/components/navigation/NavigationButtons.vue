<template>

<div class="flex flex-col md:flex-row">
    <v-btn 
        variant="text"
        aria-label="My Work"
        :class="isLightMode ? 'button-text-dark' : 'button-text'"
        @click="goToAboutRoute()"
    >
        About
    </v-btn>
    <v-btn 
        variant="text"
        aria-label="My Work"
        :class="isLightMode ? 'button-text-dark' : 'button-text'"
        @click="goToProjectsRoute()"
    >
        Projects
    </v-btn>
    <v-btn 
        variant="text"
        aria-label="My Work"
        :class="isLightMode ? 'button-text-dark' : 'button-text'"
        @click="goToBlogRoute()"
    >
        Blog
    </v-btn>
    <v-hover v-slot:default="{ isHovering, props }">
        <v-btn 
            v-bind="props"
            variant="outlined"
            :append-icon="isHovering ? 'mdi-email-open-outline' : 'mdi-email-outline'"
            aria-label="Contact Me"
            class="button-text mx-4 md:mx-0 bg-white text-black rounded"
            rounded="0"
            @click="goToContactRoute()"
        >
            Contact
        </v-btn>
    </v-hover>
</div>

</template>

<script setup>
import router from '@/router';
import { computed, nextTick } from 'vue';

const isLightMode = computed(() => {
    const currentRoute = router.currentRoute.value.path;
    return currentRoute.includes('/blogs') || currentRoute.includes('/projects');
})

const scrollToAboutSection = () => {
    const section = document.getElementById('about-section');
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const scrollToContactSection = () => {
    const section = document.getElementById('contact-section');
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const goToContactRoute = () => {
    const currentRoute = router.currentRoute.value.path;

    if (currentRoute === '/') {
        scrollToContactSection();
        return;
    }

    router.push('/').then(() => {
        nextTick(() => scrollToContactSection());
    });
}

const goToHomeRoute = () => {
    router.push('/')
}

const goToMyWorkRoute = () => {
    router.push('/my-work')
}

const goToProjectsRoute = () => {
    router.push('/projects')
}

const goToAboutRoute = () => {
    const currentRoute = router.currentRoute.value.path;

    if (currentRoute === '/') {
        scrollToAboutSection();
        return;
    }

    router.push('/').then(() => {
        // Wait for the home view to mount before scrolling
        nextTick(() => scrollToAboutSection());
    });
}

const goToBlogRoute = () => {
    router.push('/blogs')
}
</script>