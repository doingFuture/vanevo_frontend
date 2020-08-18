<template>
  <section
    class="h-75 bg-blue-800 flex flex-wrap justify-center items-center relative bg-cover"
    :style="{'background-image': 'url(' + require('../assets/images/intro.jpg') + ')'}"
  >
    <h2 class="text-white flex-col text-6xl w-9/12 text-center">
      Strom speichern – ökologisch UND ökonomisch!
    </h2>
    <div class="bg-blue-400 flex-col w-4 h-4 absolute bottom-0"></div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style lang="scss" scoped>
.h-75 {
  height: 75vh;
  h2{
    text-shadow:1px 1px 1px gray;
  }
}
</style>
