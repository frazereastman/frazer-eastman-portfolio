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
    return currentRoute === '/blogs';
})

const drawer = ref(false)

const goToContactRoute = () => {
    router.push('/contact')
}

const goToHomeRoute = () => {
    router.push('/')
}

const goToMyWorkRoute = () => {
    router.push('/my-work')
}

const goToBlogRoute = () => {
    router.push('/blogs')
} 

const goToAboutRoute = () => {
    router.push('/about-me')
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
            :class="transparent ? 'bg-transparent' : 'home-bg'"
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
                style="height: 120px;"
            >
                <navigation-buttons />
            </v-navigation-drawer>
        </div>
    </v-app-bar>
</template>

<style>

</style>