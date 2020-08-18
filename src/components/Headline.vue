<template>
  <div class="p-4" :class="fullwidth ? 'w-full' : 'w-3/5'">
    <h3 class="sm:text-4xl text-2xl title-font font-medium text-gray-900">
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
  border-top: 3px solid rgb(43, 108, 176);
}
</style>
