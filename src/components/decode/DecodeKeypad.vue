<script setup>
import { onMounted, ref } from 'vue';
import DecodeKeypadDisplay from './DecodeKeypadDisplay.vue';
import DecodeKeypadNumPad from './DecodeKeypadNumPad.vue';
import DecodeBottomBar from './DecodeBottomBar.vue';
import { useDecodeStore } from '@/stores/decode';

const decodeStore = useDecodeStore()
const currentCode = ref('')

onMounted(() => {
  decodeStore.generateCode()
})

</script>

<template>
  <div class="w-full flex flex-col">
    <decode-keypad-display />
    <decode-keypad-num-pad />
    <decode-bottom-bar />
  </div>
</template>


<style>

</style>