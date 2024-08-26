<script setup></script>

<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text='HOW TO PLAY "DECODE"'
        variant="flat"
        class="my-4 mr-2"
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="DECODE RULES">
        <v-card-text>
          Try and decode the 4 digit combination using the keypad. Once you have
          entered a code hit the submit button. Once submitted you will be shown
          if you have any characters that are correct but not in the right place
          highlighted in yellow or any characters that are correct and in the
          right place highlighted in green. A large component of this game is
          memory as each time you enter a new code you will need to reset the
          keypad before you can try again. Optionally you can set the code to
          have no duplicate characters to make it a bit easier.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" @click="isActive.value = false" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style></style>
