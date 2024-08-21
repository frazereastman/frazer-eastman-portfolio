<script setup>

</script>

<template>
  <v-form>
        <v-text-field
            variant="outlined"
            label="Name"
            prepend-icon="mdi-account"
        />
        <v-text-field 
            variant="outlined"
            label="Contact Email"
            prepend-icon="mdi-email-outline"
        />
        <v-text-field 
            variant="outlined"
            label="Contact Phone"
            prepend-icon="mdi-phone"
        />
        <v-textarea 
            label="Message"
            variant="outlined"
        />
        <v-btn 
            class="w-full body-text" 
            size="x-large"
            type="submit"
        > 
            SEND MESSAGE
        </v-btn>
    </v-form>
            
</template>

<style>

</style>