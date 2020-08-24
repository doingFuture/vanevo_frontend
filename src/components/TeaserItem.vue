<template>
  <div class="p-4 md:w-1/3">
    <div
      class="h-full overflow-hidden shadow-xl text-gray-900 hover:text-white bg-white hover:bg-vanevo-blue"
      :class="border ? 'border-4 border-white hover:border-vanevo-blue' : ''"
    >
      <g-image class="lg:h-48 md:h-36 w-full object-cover object-center" :src="`/images/${image}`" />
      <div class="p-6">
        <h3 class="title-font text-lg font-medium mb-3 inline-block">
          {{ headline }}
        </h3>
        <p class="team-teaser__job">
          {{ job }}
        </p>
        <ul 
          class="leading-relaxed mb-3"
          :class="list ? 'list-disc list-inside' : ''"
        >
          <li>{{ listItem1 }}</li>
          <li>{{ listItem2 }}</li>
          <li>{{ listItem3 }}</li>
          <li>{{ listItem4 }}</li>
          <li>{{ listItem5 }}</li>
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
    listItem1: {
      type: String,
      default: ''
    },
    listItem2: {
      type: String,
      default: ''
    },
    listItem3: {
      type: String,
      default: ''
    },
    listItem4: {
      type: String,
      default: ''
    },
    listItem5: {
      type: String,
      default: ''
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
  bottom: 0;
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
