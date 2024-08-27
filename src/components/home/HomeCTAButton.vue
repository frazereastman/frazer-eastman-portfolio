<script setup>
import router from '@/router';

const goToMyWorkView = () => {
    router.push('/my-work')
}

</script>

<template>
    <v-hover>
        <template v-slot:default="{ isHovering, props }">
            <v-btn
                v-bind="props"
                variant="outlined"
                class="my-4"
                :color="isHovering ? 'white' : ''"
                :append-icon="isHovering ? 'mdi-arrow-right-thick' : ''"
                @click="goToMyWorkView()"
            >
                See Proof
            </v-btn>
        </template>
    </v-hover>
</template>

<style>
</style>