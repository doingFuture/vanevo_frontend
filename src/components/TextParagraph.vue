<template>
  <div class="w-full py-5">
    <h3 class="text-lg font-semibold py-2">{{ paragraph.headline }}</h3>
    <p class="text-base">{{ paragraph.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'TextParagraph',
  props: {
    paragraph: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
