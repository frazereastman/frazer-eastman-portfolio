<template>
  <div>
    <v-container>
      <v-row>
        <v-col 
          cols="12" 
          md="6" 
          lg="4"
        >
          <homeBodyText />
          <socialIcons />
          <homeCTAButton />
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
