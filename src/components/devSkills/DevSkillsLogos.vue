<template>
    <div class="skills-logos-wrapper d-flex justify-evenly flex-wrap gap-4">
        <dev-skills-tile v-for="(tile, index) in tiles" 
            :key="index" 
            :tileTitle="tile.title" 
            :Image="tile.image"
        ></dev-skills-tile>
    </div>
</template>

<script setup>

const tiles = [
    { title: 'React.js', image: 'react' },
    { title: 'Vue.js', image: 'vue' },
    { title: 'Tailwind CSS', image: 'tailwind' },
    { title: 'Node.js', image: 'node' },
    { title: 'TypeScript', image: 'typescript' },
    { title: 'GitHub', image: 'github' },
    { title: 'Jira', image: 'jira' },
    { title: 'MySQL', image: 'mysql' },
    { title: 'Sass', image: 'sass' },
    { title: 'Vuetify', image: 'vuetify' },
    { title: 'MUI', image: 'mui' },
    { title: 'Figma', image: 'figma' }
]

</script>

<style scoped>

</style>