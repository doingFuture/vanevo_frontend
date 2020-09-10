<template>
  <div class="flex flex-wrap mt-8 mb-12 md:my-20" :class="`justify-${orientation}`">
      <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseRow',
  props: {
    orientation: {
      type: String,
      default: 'center'
    }
  }
}
</script>

<style lang="scss" scoped></style>
