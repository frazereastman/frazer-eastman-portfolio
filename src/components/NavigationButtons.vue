<template>

<div class="flex flex-col md:flex-row">
    <v-btn 
        variant="text"
        aria-label="My Work"
        class="button-text "
        @click="goToMyWorkRoute()"
    >
        My Work
    </v-btn>
    <v-btn 
        variant="text"
        aria-label="My Work"
        class="button-text"
        @click="goToAboutRoute()"
    >
        About Me
    </v-btn>
    <v-hover v-slot:default="{ isHovering, props }">
        <v-btn 
            v-bind="props"
            variant="outlined"
            :append-icon="isHovering ? 'mdi-email-open-outline' : 'mdi-email-outline'"
            aria-label="Contact Me"
            class="button-text mx-4 md:mx-0"
            rounded="0"
            @click="goToContactRoute()"
        >
            Contact Me
        </v-btn>
    </v-hover>
</div>

</template>

<script>
import router from '@/router';
import { computed, onMounted } from 'vue';

const goToContactRoute = () => {
    router.push('/contact')
}

const goToHomeRoute = () => {
    router.push('/')
}

const goToMyWorkRoute = () => {
    router.push('/my-work')
}

const goToAboutRoute = () => {
    router.push('/about-me')
}
</script>