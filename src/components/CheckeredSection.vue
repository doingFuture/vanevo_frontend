<template>
  <div class="flex flex-col mb-10 md:mb-0" :class="isEven ? 'md:flex-row' : 'md:flex-row-reverse'">
    <g-image class="md:w-1/2 w-full" src="~/assets/images/VANEVO-Shortstack.jpg" />
    <div class="md:w-1/2 w-full bg-white flex flex-col justify-center items-center px-5 py-10 md:p-0">
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
