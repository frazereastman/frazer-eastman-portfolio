<script setup>
import { useDecodeStore } from '@/stores/decode';
import { computed } from 'vue';

const decodeStore = useDecodeStore()


const props = defineProps({
    isSubmitBtn: {
        type: Boolean,
        default: false,
    },
    isBackBtn: {
        type: Boolean,
        default: false,
    },
})

const disableBackBtnOnSubmit = computed(() => {
    return props.isBackBtn && decodeStore.codeSubmittedFlag
})


</script>

<template>
    <v-btn 
        size="80px"
        variant="outlined"
        class="w-[80px] m-2 border-primary border-2 rounded-circle flex items-center justify-center"
        :disabled="disableBackBtnOnSubmit"
    >
        <span class="text-4xl font-bold body-text">
            <v-icon v-if="props.isBackBtn" icon="mdi-arrow-left-bottom" />
            <v-icon 
                v-else-if="props.isSubmitBtn" 
                :icon="decodeStore.codeSubmittedFlag ? 'mdi-refresh' : 'mdi-arrow-right'" 
            />
            <slot v-else />
        </span>
        
    </v-btn>
  
</template>

<style>

</style>