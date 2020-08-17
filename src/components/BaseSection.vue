<template>
  <section
    class="min-h-screen text-gray-700 body-font"
    :class="background ? 'bg-gray-300' : ''"
  >
    <div class="container w-3/5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <slot />
      </div>
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
