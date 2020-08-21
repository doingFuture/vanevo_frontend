<template>
  <p
    class="leading-relaxed pl-3 border-l-4"
    :class="[
      inverted ? 'border-white text-white ml-5 font-semibold' : 'border-vanevo-blue',
      fullwidth ? 'w-9/12' : 'w-9/12 md:w-6/12',
    ]"
  >
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'QuoteItem',
  props: {
    inverted: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
