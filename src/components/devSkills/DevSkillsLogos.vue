<template>
    <div class="skills-logos-wrapper d-flex flex-wrap gap-4">
        <img :src="reactlogo" alt="React logo" />
        <img :src="vuelogo" alt="Vue.js logo" />
        <img :src="tailwindlogo" alt="Tailwind CSS logo" />
        <img :src="nodelogo" alt="Node.js logo" />
        <img :src="typescriptLogo" alt="TypeScript logo" />
    </div>
</template>

<script setup>
import typescriptLogo from '../../assets/typescript-logo.svg';
import nodelogo from '../../assets/node-logo.svg';
import vuelogo from '../../assets/vue-logo.svg';
import tailwindlogo from '../../assets/tailwind-logo.svg';
import reactlogo from '../../assets/react-logo.svg';
</script>

<style scoped>

</style>