<template>
  <div class="p-4 w-full" :class="itemNumber < 2 ? '' : `lg:w-1/${itemNumber}`">
    <div
      class="h-full overflow-hidden shadow-xl text-gray-900  bg-white "
      :class="border ? 'border-4 border-white ' : ''"
    >
      <g-image
        :class="
          image ? 'lg:h-48 md:h-36 w-full object-cover object-center' : 'hidden'
        "
        :src="`/images/${image}`"
      />
      <div class="p-6">
        <h3 class="title-font text-lg font-medium mb-3 inline-block">
          {{ headline }}
        </h3>
        <p v-if="job" class="team-teaser__job">
          {{ job }}
        </p>
        <ul
          class="leading-relaxed mb-3"
          :class="list ? 'list-disc pl-5' : ''"
        >
          <li v-for="item in content" :key="item.index">{{ item }}</li>
        </ul>
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
    itemNumber: {
      type: Number,
      default: 1
    },
    list: {
      type: Boolean,
      default: false
    },
    headline: {
      type: String,
      default: ''
    },
    job: {
      type: String,
      default: ''
    },
    content: {
      type: Array,
      default: () => []
    },
    image: {
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
  bottom: -4px;
  left: 0;
  right: 0;
  border-top: 3px solid #143988;
}

.team-teaser__job {
  margin-top: -5px;
  margin-bottom: 20px;
  font-weight: 200;
  font-size: 15px;
}
</style>
