<template>
  <p class="text-white text-3xl font-light">{{text}}</p>
</template>

<script>
export default {
  name: 'IntroText',
  props: {
      text: {
          type: String,
          default: ''
      }
  }
}
</script>

<style lang="scss" scoped></style>
