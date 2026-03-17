<script setup>

import router from '@/router';
import { computed, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const props = defineProps({
    transparent: {
        type: Boolean,
        required: true
    }
})

const isLightMode = computed(() => {
    const currentRoute = router.currentRoute.value.path;
    return currentRoute.includes('/blogs') || currentRoute.includes('/projects');
})

const isForceDarkMode = computed(() => {
    const currentRoute = router.currentRoute.value.path;
    return currentRoute.includes('/resume');
})

const drawer = ref(false)

const goToHomeRoute = () => {
    const currentRoute = router.currentRoute.value.path

    if (currentRoute === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
    }

    router.push('/')
}

watch(width, (newWidth) => {
  if (newWidth > 768) {
    drawer.value = false
  }
})

</script>

<template>
    <v-app-bar
        :elevation="0"
        class="bg-transparent"
    >
        <div 
            class="flex justify-between p-4 my-4 w-full items-center"
            :class="[transparent ? 'bg-transparent' : 'home-bg', isForceDarkMode ? 'bg-black' : '']"
        >
            <img 
                src="../../assets/website-logo-no-bg.svg" 
                class="w-[50px] h-[50px] cursor-pointer"
                :class="isLightMode ? 'invert' : ''"
                @click="goToHomeRoute()"
            />
            <template class="hidden md:flex">
                <navigation-buttons />
            </template>
           

            <v-app-bar-nav-icon 
                class="md:hidden"
                variant="text" 
                @click.stop="drawer = !drawer"
            />
            <v-navigation-drawer
                v-model="drawer"
                temporary
                location="right"
                rounded
                style="height: 160px;"
            >
                <navigation-buttons />
            </v-navigation-drawer>
        </div>
    </v-app-bar>
</template>

<style>

</style>