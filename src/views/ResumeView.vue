<template>
  <div class="resume-container mt-16">
    <iframe
      :src="'/assets/FrazerResume.pdf#toolbar=0'"
      width="100%"
      height="100%"
      style="border: none;"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'ResumeView',
};
</script>

<style scoped>
.resume-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>