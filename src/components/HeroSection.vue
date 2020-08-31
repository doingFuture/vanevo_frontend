<template>
  <section
    class="h-75 bg-white flex flex-wrap flex-col justify-center items-center relative bg-cover"
    :style="{
      'background-image': 'url(' + require('../assets/images/intro.jpg') + ')',
    }"
  >
    <div class="w-2/3">
      <h2
        class="text-black flex-col text-xl md:text-5xl"
      >
        {{ text }}
      </h2>
      <g-link to="/#contact"
        class="inline-block uppercase text-white self-start bg-vanevo-blue border-0 mt-4 py-4 px-8 focus:outline-none text-xs md:text-base shadow-xl hover:shadow-2xl"
      >
        Jetzt Kontakt aufnehmen
      </g-link>
    </div>
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
