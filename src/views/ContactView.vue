<script setup>
import ContactForm from "@/components/contact/ContactForm.vue"
import ContactBottomButtons from "@/components/contact/ContactBottomButtons.vue"

</script>

<template>
    <div class="flex h-full pt-4">
        <v-col 
            cols="12" 
            sm="8" 
            md="6"
            lg="4" 
            offset-sm="2"  
            offset-md="3" 
            offset-lg="4"
        >
            <contact-form />
            <p class="text-2xl text-center py-4 body-text">
                OR
            </p>
            <ContactBottomButtons />
        </v-col>
    </div>
  
</template>

<style scoped>

</style>