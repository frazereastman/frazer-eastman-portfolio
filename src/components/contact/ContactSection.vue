<template>
    <section>
        <h1 class="font-bold text-5xl mb-3">
            Contact.
        </h1>
        <v-form>
            <v-text-field
                label="Email"
                variant="solo-inverted"
                class="mb-4 w-[400px]"
            ></v-text-field>
            <v-textarea
                label="Message"
                variant="solo-inverted"
                class="mb-4 w-[600px]"
            ></v-textarea>
            <v-btn 
                variant="tonal" 
                color="white"
                size="x-large"
            >
                Send Message
            </v-btn>
        </v-form>
    </section>
</template>

<script setup>

</script>

<style scoped>
</style>