<template>
  <div class="flex" :class="isEven ? '' : 'flex-row-reverse'">
    <g-image class="w-1/2" src="~/assets/images/VANEVO-Shortstack.jpg" />
    <div class="w-1/2 bg-white flex flex-col justify-center items-center">
      <slot />
      <p class="w-9/12 ml-5">
        {{ content.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckeredSection',
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    content: {
      type: Object,
      default: () => {}
    },
    isEven: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
