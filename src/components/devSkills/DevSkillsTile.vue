<template>
    <div>
        <img :src="images[props.Image]" :alt="props.tileTitle + ' logo'" class="h-[75px]" />
        <p class="text-center">{{ props.tileTitle }}</p>
    </div>
</template>

<script setup>
import typescriptLogo from '../../assets/skills-logos/typescript-logo.svg';
import nodelogo from '../../assets/skills-logos/node-logo.svg';
import vuelogo from '../../assets/skills-logos/vue-logo.svg';
import tailwindlogo from '../../assets/skills-logos/tailwind-logo.svg';
import reactlogo from '../../assets/skills-logos/react-logo.svg';
import githublogo from '../../assets/skills-logos/github-logo.svg';
import jiralogo from '../../assets/skills-logos/jira-logo.svg';
import mysqlogo from '../../assets/skills-logos/my-sql-logo.svg';
import sasslogo from '../../assets/skills-logos/sass-logo.svg';
import vuetifylogo from '../../assets/skills-logos/vuetify-logo.svg';
import muilogo from '../../assets/skills-logos/mui-logo.svg';
import figmalogo from '../../assets/skills-logos/figma-logo.svg';

const props = defineProps({
    tileTitle: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    }
})

const images = {
    typescript: typescriptLogo,
    node: nodelogo,
    vue: vuelogo,
    tailwind: tailwindlogo,
    react: reactlogo,
    github: githublogo,
    jira: jiralogo,
    mysql: mysqlogo,
    sass: sasslogo,
    vuetify: vuetifylogo,
    mui: muilogo,
    figma: figmalogo
}
</script>

<style scoped>

</style>