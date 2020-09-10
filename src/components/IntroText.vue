<template>
  <p class="intro-text text-white tracking-wide">{{text}}</p>
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
 font-size: 34px;
}
</style>
