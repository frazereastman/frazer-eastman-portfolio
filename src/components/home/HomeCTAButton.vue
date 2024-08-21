<script setup>

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
            >
                See Proof
            </v-btn>
        </template>
    </v-hover>
</template>

<style>
</style>