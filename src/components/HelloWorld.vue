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
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import socialIcons from './HomeSocials.vue'
import homeBodyText from './HomeBodyText.vue'
import homeCTAButton from './HomeCTAButton.vue'

</script>
