<template>
  <p class="font-semibold text-2xl md:text-3xl text-white tracking-wide">{{text}}</p>
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


<style lang="scss" scoped>

.intro-text{
 font-weight: 500;
 font-size: 28px;
}
</style>
