<script setup>
import { useDecodeStore } from "@/stores/decode";

const decodeStore = useDecodeStore();

const getDigit = (index) => {
  if (!decodeStore.currentCode) return "-";
  return decodeStore.currentCode[index] ?? "-";
};

const setColourGreen = (digit) => {
  if (!decodeStore.codeSubmittedFlag) return;
  return decodeStore.getNumberCorrect(digit);
};

const setColourYellow = (digit) => {
  if (decodeStore.getNumberCorrect(digit) || !decodeStore.codeSubmittedFlag)
    return;
  return decodeStore.getNumberExists(digit);
};
</script>

<template>
  <div class="flex gap-2 justify-center">
    <div
      v-if="decodeStore.showResetCode"
      class="flex gap-4 items-center p-4 outline"
    >
      <p class="text-xl body-text">Reset Code?</p>
      <v-btn @click="decodeStore.generateCode()"> YES </v-btn>
      <v-btn @click="decodeStore.toggleShowResetCode()"> NO </v-btn>
    </div>

    <div
      v-show="!decodeStore.showResetCode"
      v-for="n in 4"
      :key="n"
      class="h-[75px] w-[75px] border-primary border-2 rounded-lg flex items-center justify-center"
      :class="[
        setColourGreen(n - 1) ? 'bg-green' : '',
        setColourYellow(n - 1) ? 'bg-yellow' : '',
      ]"
    >
      <span class="text-4xl font-bold">
        {{ getDigit(n - 1) }}
      </span>
    </div>
  </div>
</template>

<style></style>
