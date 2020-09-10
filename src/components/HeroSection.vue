<template>
  <section
    class="h-75 bg-white flex flex-wrap flex-col justify-center items-center relative bg-cover"
    :style="{
      'background-image': 'url(' + require('../assets/images/intro.jpg') + ')',
    }"
  >
    <div class="container w-2/3 p-5">
      <h2
        class="text-black flex-col text-xl md:text-5xl xl:text-6xl font-bold tracking-wide"
      >
        STROM.
        <br>
        SAUBER.
        <br>
        SPEICHERN.
      </h2>
    </div>
  </section>
</template>



<style lang="scss" scoped>
.h-75 {
  height: 75vh;
}
</style>
