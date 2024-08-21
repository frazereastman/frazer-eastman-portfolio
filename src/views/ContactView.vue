<script setup>
import ContactForm from "@/components/contact/ContactForm.vue"


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
            <h1 class="text-4xl body-text pb-4 text-center">
                CONTACT ME
            </h1>
            <contact-form />

            <p class="text-2xl text-center py-4 body-text">
                OR
            </p>

            <div class="gap-2 flex flex-col">
                <v-btn 
                    size="x-large" 
                    class="w-full bg-[#0077B5] body-text" 
                    append-icon="mdi-linkedin"
                >
                    Message me on linkedIn
                </v-btn>
                <v-btn 
                    size="x-large" 
                    class="w-full bg-orange-500 body-text" 
                    append-icon="mdi-email-outline"
                >
                    Email me directly
                </v-btn>
            </div>
        </v-col>
    </div>
  
</template>

<style scoped>

</style>