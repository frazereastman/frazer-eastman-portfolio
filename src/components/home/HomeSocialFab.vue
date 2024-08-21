<script setup>
import { computed, defineProps, ref } from 'vue';
import { fabIconDetails } from '@/constants/constants';

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
})

const getFabURL = computed(() => { return fabIconDetails[props.icon].url })
const getFabIcon = computed(() => { return fabIconDetails[props.icon].icon })
const getFabHoverText = computed(() => { return fabIconDetails[props.icon].hoverText })

</script>

<template>
    <div class="flex gap-2 w-[50px] h-[50px] relative">
        <v-hover v-slot:default="{ isHovering, props }">
            <v-fab 
                v-bind="props"
                :icon="getFabIcon"
                variant="text"
                class="relative"
                :href="getFabURL"
                target="_blank"
            />
            <div 
                v-if="isHovering"
                class="absolute top-[50px] left-[15px] flex w-[250px]"
            >
                <v-icon icon="mdi-arrow-up-left" />
                <p class="pt-1 body-text">
                    {{ getFabHoverText }}
                </p>
            </div>
        </v-hover>
    </div>
</template>

<style scoped>

.body-text {
    font-family: 'consolas';
}

</style>