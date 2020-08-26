<template>
  <section
    class="h-75 bg-white flex flex-wrap justify-center items-center relative bg-cover"
    :style="{
      'background-image': 'url(' + require('../assets/images/intro.jpg') + ')',
    }"
  >
    <h2 class="text-vanevo-blue flex-col text-5xl md:text-6xl w-9/12 text-center">
      {{ text }}
    </h2>
    <div class="bg-blue-400 flex-col w-10 h-10 absolute bottom-0"></div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.h-75 {
  height: 75vh;
  h2 {
    text-shadow: 1px 1px 1px gray;
  }
}
</style>
