<template>
  <div class="p-4 md:w-1/3">
    <div
      class="h-full overflow-hidden shadow-xl text-gray-900 hover:text-white bg-white hover:bg-vanevo-blue"
      :class="border ? 'border-4 border-white hover:border-vanevo-blue' : ''"
    >
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        src="https://dummyimage.com/720x400"
        alt="blog"
      />
      <div class="p-6">
        <h3 class="title-font text-lg font-medium mb-3 inline-block">
          {{ headline }}
        </h3>
        <p class="leading-relaxed mb-3">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeaserItem',
  props: {
    border: {
      type: Boolean,
      default: false
    },
    headline: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
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
  right: 0;
  border-top: 3px solid #143988;
}
</style>
