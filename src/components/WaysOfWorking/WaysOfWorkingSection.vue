<template>
    <section class="mt-8">
        <h1 class="font-bold text-5xl mb-3">
            Ways of working.
        </h1>
        <v-row class="mt-4">
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
    "Agile Development": 80,
    "Accessible Development": 90,
    "UI Design": 60,
    "UX": 50,
}

</script>

<style scoped>
</style>