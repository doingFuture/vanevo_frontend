<template>
  <div
    class="flex flex-col mb-10 lg:mb-0"
    :class="isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'"
  >
    <g-image class="lg:w-1/2 w-full h-full" :src="`/images/${image}`" />
    <div
      class="lg:w-1/2 w-full bg-white flex flex-col justify-center items-center px-0 lg:px-5 py-10 lg:p-0"
    >
      <p class="w-10/12  ml-5">
        {{ content.text[0] }}
      </p>
      <slot />
      <p class="w-10/12 ml-5">
        {{ content.text[1] }}
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
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
