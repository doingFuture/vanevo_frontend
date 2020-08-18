<template>
  <section
    class="min-h-screen text-black body-font"
    :class="background ? 'bg-gray-300' : ''"
  >
    <div
      class="py-24"
      :class="fullwidth ? 'w-full' : 'container w-3/5 mx-auto'"
    >
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'BaseSection',
  props: {
    background: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    fullheight: {
        type: Boolean,
        default: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
