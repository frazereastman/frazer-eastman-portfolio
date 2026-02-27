<template>
  <div class="h-screen">
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

  <div class="w-full">
    <v-container class="mt-8">
      <v-row>
        <v-col 
          cols="12"
          md="6" 
        >
          <about-section />
        </v-col>
        <v-col 
          cols="12"
          md="6" 
        >
          <dev-skills />
        </v-col>
      </v-row>
      <blog-section />
      <contact-section />
    </v-container>
  </div>
</template>

<script setup>
import socialIcons from '../components/home/HomeSocials.vue'
import homeBodyText from '../components/home/HomeBodyText.vue'
import homeCTAButton from '../components/home/HomeCTAButton.vue'
import devSkills from '../components/devSkills/DevSkills.vue'
import aboutSection from '../components/about/AboutSection.vue'
</script>

<style scoped>

</style>
