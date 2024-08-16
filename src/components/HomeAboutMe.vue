<script setup>
import { ref } from 'vue';
import { EducationDetails, WorkDetails } from '@/constants/constants';

const isOnAboutMe = ref(true)

const toggleIsOnAboutMe = (value) => {
    isOnAboutMe.value = value
}

</script>

<template>
    <div class="outline h-[360px] flex flex-col relative">
        <div class="flex justify-center gap-2">
            <v-btn 
                variant="text" 
                class="button-text mb-4 mt-2"
                :class="isOnAboutMe ? 'is-about-active' : ''"
                @click="toggleIsOnAboutMe(true)"
            >
                ABOUT ME
            </v-btn>
            <v-btn 
                variant="text" 
                class="button-text mb-4 mt-2"
                :class="!isOnAboutMe ? 'is-about-active' : ''"
                @click="toggleIsOnAboutMe(false)"
            >
                EDUCATION / WORK
            </v-btn>
        </div>
        <div class="flex overflow-y-scroll border-t-2">
            <p v-if="isOnAboutMe" class="body-text p-4">
                Originally from a small town just outside London, I now live and
                work in Sheffield. A technology addict since before I can remember, 
                I am a highly creative individual who loves to create content in
                many forms. I Originally discovered programming when looking for a
                way to create a website to show off my art, and during this process
                found the art of creating with code.
                <br />
                An avid boardgamer I am an individual that loves chatting to people
                from all walks of life
            </p>

            <div v-else>
                <p class="py-2 px-4 body-text border-y-2 border-white">
                    Previous Roles //
                </p>
                <v-expansion-panels 
                    variant="accordion"
                >
                    <v-expansion-panel
                        v-for="i in WorkDetails.length"
                        :key="i"
                        :text="WorkDetails[i - 1].text"
                        :title="WorkDetails[i - 1].title"
                        class="bg-[#121212] body-text"
                    />
                </v-expansion-panels>

                <p class="py-2 px-4 body-text border-y-2 border-white">
                    Education //
                </p>
                <v-expansion-panels variant="accordion">
                    <v-expansion-panel
                        v-for="i in EducationDetails.length"
                        :key="i"
                        :text="EducationDetails[i - 1].text"
                        :title="EducationDetails[i - 1].title"
                        class="bg-[#121212] body-text"
                    />
                </v-expansion-panels>
            </div>
        </div>

        <div class="w-[150px] h-[30px] outline absolute right-0 top-[-32px] rounder-l-lg flex items-center justify-center">
            <p class="body-text">
                Profile.frzr
            </p>
        </div>

    </div>
</template>

<style scoped>



.vue-highlight {
    color: #42b883;
    font-weight: bold;
}

.is-about-active::before {
  transform: translateX(-50%);
  position: absolute;
  background: white;
  top: 32px;
  height: 1px;
  content: '';
  width: 20px;
  left: 50%;
}

</style>