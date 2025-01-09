<script setup>
import AboutTimeline from '../components/about/AboutTimeline.vue'
import AboutHeader from '../components/about/AboutHeader.vue'
import AboutImage from '../components/about/AboutImage.vue'
</script>

<template>

    <v-container class="flex flex-col items-center md:flex-row p-8 bg-[#FDDBBB] md:mt-4">
        <div class="flex justify-center items-center mb-4 md:mb-0">
            <about-image />
        </div>
        <div class="w-full md:w-[60px] py-4 md:mx-6 h-full">
            <div class="zig-zag-line md:zig-zag-line"></div>
        </div>
        <about-header />
    </v-container>

    <v-container class="bg-[#A2D2DF] mt-4 md:my-4">
        <about-timeline />
    </v-container>
</template>

<style scoped></style>
