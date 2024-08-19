<script>

</script>

<template>
    <div class="flex justify-between p-4 w-full bg-transparent items-center">

        <img src="../assets/website-logo-no-bg.svg" class="w-[50px] h-[50px]"/>

        <div>
            <v-btn 
                variant="text"
                aria-label="My Work"
                class="button-text"
            >
                My Work
            </v-btn>
            <v-hover v-slot:default="{ isHovering, props }">
                <v-btn 
                    v-bind="props"
                    variant="outlined"
                    :append-icon="isHovering ? 'mdi-email-open-outline' : 'mdi-email-outline'"
                    aria-label="Contact Me"
                    class="button-text"
                    rounded="0"
                >
                    Contact Me
                </v-btn>
            </v-hover>
        </div>
    </div>
</template>

<style>

</style>