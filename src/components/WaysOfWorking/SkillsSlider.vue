<script setup>

const props = defineProps({
    sliderValue: {
        type: Number,
        required: true
    },
    sliderLabel: {
        type: String,
        required: false
    }
})

</script>

<template>
    <div class="d-flex flex-column">
        <div>
            <p v-if="sliderLabel" class="text-body-small">
                {{ sliderLabel }}
            </p>
            <v-slider
                readonly
                color="white"
                :model-value="sliderValue"
            ></v-slider>
        </div>
    </div>
</template>

<style scoped></style>