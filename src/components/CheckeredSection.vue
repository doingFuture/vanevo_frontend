<template>
  <div
    class="flex flex-col mb-10 lg:mb-0"
    :class="isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'"
  >
    <g-image
      v-if="isEven"
      class="lg:w-1/2 w-full h-full"
      src="~/assets/images/was_01.jpg"
    />
    <g-image
      v-else
      class="lg:w-1/2 w-full h-full"
      src="~/assets/images/was_02.jpg"
    />
    <div
      class="lg:w-1/2 w-full bg-white flex flex-col justify-center items-center px-0 lg:px-5 py-10 lg:p-0"
    >
      <p class="w-10/12 ml-5">
        {{ content }}
      </p>
      <slot />
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
      type: String,
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
