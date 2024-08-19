<template>
  <v-app class="home-bg">
    <v-app-bar :elevation="0" class="bg-transparent">
      <navigation-bar />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script>

<style scoped>

/* TODO: Make conditional based on home route */
.home-bg {
  background-color: #000000;
  opacity: 1;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #121212 26px ), repeating-linear-gradient( #1a1a1a55, #1a1a1a );
}

</style>
