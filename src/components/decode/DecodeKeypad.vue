<script setup>
import { onMounted, ref } from 'vue';
import DecodeKeypadDisplay from './DecodeKeypadDisplay.vue';
import DecodeKeypadNumPad from './DecodeKeypadNumPad.vue';
import DecodeBottomBar from './DecodeBottomBar.vue';
import { useDecodeStore } from '@/stores/decode';

const props = defineProps({
  mobileView: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['switchView'])

const decodeStore = useDecodeStore()
const currentCode = ref('')

onMounted(() => {
  decodeStore.generateCode()
})

</script>

<template>
  <div class="w-full flex flex-col justify-center items-center">
    <decode-keypad-display />
    <decode-keypad-num-pad />
    <decode-bottom-bar />
    <v-btn v-if="props.mobileView" text="back" @click="emit('switchView')" />
  </div>
</template>


<style>

</style>