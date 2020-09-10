<template>
  <div class="p-4" :class="fullwidth ? 'w-full' : 'w-4/5 md:w-3/5'">
    <h3
      class="sm:text-4xl text-3xl title-font font-semibold"
      :class="light ? 'text-white light' : 'text-gray-900'"
    >
      <span class="relative">{{ underlineable[0] }}</span
      >{{ underlineable[1] }}
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
    },
    light: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    underlineable() {
      const capital = this.text.slice(0, 1)
      const rest = this.text.slice(1, this.text.length)
      return [capital, rest]
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  position: relative;
}

span:after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  border-top: 4px solid #143988;
}

.light {
  .span:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    border-top: 4px solid white;
  }
}
</style>
