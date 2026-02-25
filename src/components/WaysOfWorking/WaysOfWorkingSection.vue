<template>
    <section class="mt-8">
        <h1 class="font-bold text-5xl mb-3">
            Ways of working.
        </h1>
        <v-row>
            <v-col 
                cols="12" 
                sm="6" 
                v-for="(value, key) in sliderValues" 
                :key="key"
            >
                <skills-slider
                    :sliderValue="value"
                    :sliderLabel="key"
                />
            </v-col>
        </v-row>
        
    </section>
</template>

<script setup>

const sliderValues = {
    vue: 80,
    react: 70,
    node: 60,
    typescript: 50,
}

</script>

<style scoped>
</style>