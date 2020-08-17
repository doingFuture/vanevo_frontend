<template>
  <div class="w-full p-4">
    <h3 class="sm:text-3xl text-2xl title-font font-medium text-gray-900">
      {{ text }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Headline',
  props: {
    text: {
      type: String,
      default: 'Ich bin eine tolle Headline'
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  position: relative;
}

h3:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 95%;
  border-top: 3px solid rgb(43, 108, 176);
}
</style>
