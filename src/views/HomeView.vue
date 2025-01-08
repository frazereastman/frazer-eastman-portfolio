<template>
  <div class="h-full">
    <v-container class="h-full">
      <v-row class="h-full flex items-center">
        <v-col 
          offset-sm="1"
          offset-md="0"
          cols="12"
          sm="10" 
          md="6" 
          lg="4"
        >
          <homeBodyText />
          <homeCTAButton />
          <socialIcons />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import socialIcons from '../components/home/HomeSocials.vue'
import homeBodyText from '../components/home/HomeBodyText.vue'
import homeCTAButton from '../components/home/HomeCTAButton.vue'

</script>

<style scoped>
</style>
