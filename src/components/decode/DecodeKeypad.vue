<script setup>
import { onMounted, ref } from 'vue';
import DecodeKeypadDisplay from './DecodeKeypadDisplay.vue';
import DecodeKeypadNumPad from './DecodeKeypadNumPad.vue';
import { useDecodeStore } from '@/stores/decode';

const decodeStore = useDecodeStore()
const currentCode = ref('')

const updateCode = (digit) => {
  currentCode.value = currentCode.value.concat(digit)
}

const removeLastDigit = ()=> {
  currentCode.value = currentCode.value.substring(0, currentCode.value.length - 1);
}

onMounted(() => {
  decodeStore.generateCode()
})

</script>

<template>
  <div class="w-full flex flex-col">
    <decode-keypad-display />
    <decode-keypad-num-pad />
  </div>
</template>


<style>

</style>