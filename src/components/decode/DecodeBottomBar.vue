<script setup>
import { useDecodeStore } from '@/stores/decode';

const decodeStore = useDecodeStore()

</script>

<template>
    <div class="mt-2 px-8 w-full">
        <div class="flex justify-between">
            <p class="mt-2 text-xl body-text">
                Attempts: {{ decodeStore.numAttemps }}
            </p>
            <v-btn
                @click="decodeStore.toggleShowResetCode"
                icon="mdi-refresh"
                density="compact"
            />
        </div>
        
        <v-switch
            v-model="decodeStore.allowDuplicates"
            color="white"
            label="Allow Duplicates"
            class="body-text"
            inset
        />
    </div>
</template>

<style>

</style>