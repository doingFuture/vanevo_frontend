<template>
  <section
    class="h-75 bg-white flex flex-wrap flex-col justify-center items-center relative bg-cover"
    :style="{
      'background-image': 'url(' + require('../assets/images/intro.jpg') + ')',
    }"
  >
    <div class="container w-10/12 md:w-3/5">
      <h2
        v-if="!english"
        class="text-black flex-col text-5xl md:text-6xl font-bold tracing-wide"
      >
        STROM.
        <br />
        SAUBER.
        <br />
        SPEICHERN.
      </h2>
      <h2
        v-if="english"
        class="text-black flex-col text-5xl md:text-6xl font-bold tracing-wide"
      >
        Green Energy – Green Storage
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    english: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.h-75 {
  height: 75vh;
}
</style>
