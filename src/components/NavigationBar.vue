<script setup>

import router from '@/router';
import { computed, onMounted } from 'vue';

const props = defineProps({
    transparent: {
        type: Boolean,
        required: true
    }
})

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

<template>
    <div 
        class="flex justify-between p-4 my-4 w-full items-center"
        :class="transparent ? 'bg-transparent' : 'home-bg'"
    >
        <img 
            src="../assets/website-logo-no-bg.svg" 
            class="w-[50px] h-[50px] cursor-pointer"
            @click="goToHomeRoute()"
        />

        <div>
            <v-btn 
                variant="text"
                aria-label="My Work"
                class="button-text"
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
                    class="button-text"
                    rounded="0"
                    @click="goToContactRoute()"
                >
                    Contact Me
                </v-btn>
            </v-hover>
        </div>
    </div>
</template>

<style>

</style>