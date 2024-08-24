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
            <p class="body-text">
                Feel free to checkout my github page, to see the code for this,
                or any other projects I may work on outside of work...
                <br/><br/>
                but since you're already here why don't I give you some 
                practical examples you can play around with yourself.
            </p>
            
          </v-col>
          <v-spacer />
          <v-col
            class="hidden vuetify-md:block"
            cols="5"
            lg="4"
          >
            
            <decode-keypad />
            
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>

  </style>
  