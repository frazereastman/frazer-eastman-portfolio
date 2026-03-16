<template>
    <section class="mt-8">
        <h1 class="font-bold text-5xl mb-3">
            Latest.
        </h1>
        <div class="d-flex gap-4 flex-wrap mb-8">
            <div class="bg-[#222831] p-4 rounded max-w-[500px]">
                <div class="bg-[#393E46] rounded px-2 py-1 mb-4 w-max text-sm">
                    Recent blog
                </div>
                
                <h1 class="text-3xl pb-2">
                    Accessibility audit on large scale education platform.
                </h1>
                <p>
                    I led a project where I was in charge of auditing the 
                    accessibility of a large scale education platform, identifying 
                    key areas for improvement and implementing solutions to enhance 
                    the user experience for all users, and then actioning the 
                    changes across the platform.
                </p>
                <div>
                    <v-btn 
                        variant="tonal"
                        color="white"
                        class="mt-4 mr-4"
                        size="x-large"
                        to="/blogs"
                    >
                        read blog
                    </v-btn>
                    <v-btn 
                        variant="outlined" 
                        color="white"
                        class="mt-4"
                        size="x-large"
                        :to="`/blogs/${featuredBlogRoute}`"
                    >
                        see all blogs
                    </v-btn>
                </div>
            </div>

            <div class="bg-[#222831] p-4 rounded max-w-[500px]">
                <div class="bg-[#393E46] rounded px-2 py-1 mb-4 w-max text-sm">
                    Recent project
                </div>
                
                <h1 class="text-3xl pb-2">
                    Accessibility audit on large scale education platform.
                </h1>
                <p>
                    I led a project where I was in charge of auditing the 
                    accessibility of a large scale education platform, identifying 
                    key areas for improvement and implementing solutions to enhance 
                    the user experience for all users, and then actioning the 
                    changes across the platform.
                </p>
                <div>
                    <v-btn 
                        variant="tonal"
                        color="white"
                        class="mt-4 mr-4"
                        size="x-large"
                        :to="`/projects/${featuredProjectRoute}`"
                    >
                        read more
                    </v-btn>
                    <v-btn 
                        variant="outlined" 
                        color="white"
                        class="mt-4"
                        size="x-large"
                        to="/projects"
                    >
                        see all projects
                    </v-btn>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { featuredBlogRoute } from '@/data/blogPosts';
import { featuredProjectRoute } from '@/data/projects';

</script>

<style scoped>

</style>