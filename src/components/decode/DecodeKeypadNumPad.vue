<script setup>
import { defineEmits } from 'vue'
import DecodeKeypadBtn from './DecodeKeypadBtn.vue'
import { useDecodeStore } from '@/stores/decode';

const decodeStore = useDecodeStore()

const enterDigit = (digit) => {
    decodeStore.updateCode(digit.toString())
}

const removeDigit = () => {
    decodeStore.removeDigit()
}

const submitCode = () => {
    if (decodeStore.codeSubmittedFlag) {
        decodeStore.clearCurrentCode()
        return
    }
    decodeStore.submitAttempt()
}

</script>

<template>
    <div class="flex justify-center flex-wrap mt-4 w-[300px]">
        <decode-keypad-btn 
            v-for="n in 9"  
            :key="n" 
            @click="enterDigit(n.toString())"
        >
            {{ n }}
        </decode-keypad-btn>

        <!-- Bottom row of buttons -->
        <decode-keypad-btn is-back-btn @click="removeDigit" />
        <decode-keypad-btn @click="enterDigit('0')">
            0
        </decode-keypad-btn>
        <decode-keypad-btn is-submit-btn @click="submitCode" />
    </div>
</template>

<style>

</style>