<template>
  <div class="p-4" :class="fullwidth ? 'w-full' : 'w-4/5 md:w-3/5'">
    <h3 class="sm:text-4xl text-2xl title-font font-medium" :class="light ? 'text-white light' : 'text-gray-900'">
      {{ text }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Headline',
  props: {
    text: {
      type: String,
      default: 'Ich bin eine tolle Headline'
    },
    light: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  position: relative;
}

h3:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 95%;
  border-top: 3px solid #143988;
}

.light:after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 95%;
  border-top: 3px solid white;
}
</style>
