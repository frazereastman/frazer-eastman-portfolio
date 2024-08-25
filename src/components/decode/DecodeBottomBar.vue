<script setup>
import { useDecodeStore } from '@/stores/decode';

const decodeStore = useDecodeStore()

</script>

<template>
    <div class="mt-2 px-8">
        <v-switch 
            v-model="decodeStore.allowDuplicates"
            label="Allow Duplicates"
            inset
        />
    </div>
</template>

<style>

</style>