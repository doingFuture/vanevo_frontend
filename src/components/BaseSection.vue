<template>
  <section
    class="min-h-screen text-black body-font"
    :class="background ? 'bg-gray-300' : ''"
  >
    <div
      class="pt-24 pb-8"
      :class="fullwidth ? 'w-full' : 'container w-4/5 md:w-3/5 mx-auto'"
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
