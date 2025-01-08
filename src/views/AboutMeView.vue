<script setup>
import AboutTimeline from '../components/about/AboutTimeline.vue'
import AboutHeader from '../components/about/AboutHeader.vue'
import AboutImage from '../components/about/AboutImage.vue'
</script>

<template>

    <v-container>
        <div class="flex flex-col md:flex-row p-8 bg-[#FDDBBB] lg:justify-center">
            <div class="max-h-[200px] max-w-[200px] w-200px md:w-auto md:max-h-[400px]">
                <about-image />
            </div>
            <about-header />
        </div>
    </v-container>

    <v-container>
        <about-timeline />
    </v-container>
</template>

<style scoped></style>
