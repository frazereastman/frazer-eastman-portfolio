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
        <v-spacer />
        <v-col
          class="hidden vuetify-md:block"
          cols="5"
          lg="5"
        >
          <homeAboutMe />
        </v-col>
      </v-row>
    </v-container>

    <!-- TODO: remove notice once development progresses far enough -->
    <p class="fixed bottom-0 text-center w-full">
      Please note I am still developing the site.
    </p>
  </div>
</template>

<script setup>
import socialIcons from '../components/home/HomeSocials.vue'
import homeBodyText from '../components/home/HomeBodyText.vue'
import homeCTAButton from '../components/home/HomeCTAButton.vue'
import homeAboutMe from '../components/home/HomeAboutMe.vue'

</script>

<style scoped>

.home-bg {
  background-color: #000000;
  opacity: 1;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #121212 26px ), repeating-linear-gradient( #1a1a1a55, #1a1a1a );
}


</style>
