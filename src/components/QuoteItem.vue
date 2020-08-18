<template>
  <p
    class="leading-relaxed pl-3 border-l-4"
    :class="[inverted ? 'border-white text-white' : 'border-blue-700', fullwidth ? 'w-9/12' : 'w-6/12']"
  >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat. diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat. diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
