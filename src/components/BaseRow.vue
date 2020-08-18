<template>
  <div class="flex flex-wrap my-20" :class="`justify-${orientation}`">
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
