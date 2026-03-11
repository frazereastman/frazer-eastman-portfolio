<template>
  <div 
    class="h-screen w-full overflow-hidden" 
    style="background: radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0));"
  >
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
          md="8" 
          offset-md="2"
          lg="10"
          offset-lg="1"
        >
          <about-section />
          <v-divider class="my-6" gradient></v-divider>
          <dev-skills />
          <v-divider class="my-6"></v-divider>
          <blog-section />
          <v-divider class="my-6"></v-divider>
          <contact-section />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import socialIcons from '../components/home/HomeSocials.vue'
import homeBodyText from '../components/home/HomeBodyText.vue'
import homeCTAButton from '../components/home/HomeCTAButton.vue'
import devSkills from '../components/devSkills/DevSkills.vue'
import aboutSection from '../components/about/AboutSection.vue'
import { space } from 'postcss/lib/list'
</script>

<style scoped>

</style>
