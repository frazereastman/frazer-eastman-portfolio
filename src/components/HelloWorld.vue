<template>
  <div class="h-full">
    <v-container class="h-full">
      <v-row class="h-full flex items-center">
        <v-col 
          cols="12" 
          sm="6" 
          lg="4"
        >
          <homeBodyText />
          <homeCTAButton />
          <socialIcons />
        </v-col>
        <v-spacer />
        <v-col
          cols="5"
          lg="5"
        >
          <homeAboutMe />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import socialIcons from './HomeSocials.vue'
import homeBodyText from './HomeBodyText.vue'
import homeCTAButton from './HomeCTAButton.vue'
import homeAboutMe from './HomeAboutMe.vue'

</script>

<style scoped>

.home-bg {
  background-color: #000000;
  opacity: 1;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #121212 26px ), repeating-linear-gradient( #1a1a1a55, #1a1a1a );
}


</style>
