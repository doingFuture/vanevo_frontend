<template>
  <section
    class="text-black body-font"
    :class="[`bg-${bgClass}`, fullheight ? 'min-h-screen' : '']"
  >
    <div
      class="pb-8"
      :class="[fullwidth ? 'w-full' : 'container w-4/5 md:w-3/5 mx-auto', fullheight ? 'pt-24' : 'pt-8']"
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
      type: String,
      default: 'white'
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    fullheight: {
        type: Boolean,
        default: true
    }
  },
  data() {
    return {
      bgColors: ['white', 'blue-800', 'gray-300']
    }
  },
  computed: {
    bgClass() {
      const bgClass = this.bgColors.find(bgColor => bgColor.includes(this.background))
      return bgClass
    }
  }
}
</script>

<style lang="scss" scoped></style>
