<template>
  <div class="p-4 w-full" :class="itemNumber < 2 ? '' : `lg:w-1/${itemNumber}`">
    <div
      class="h-full overflow-hidden shadow-xl text-gray-900 bg-white flex flex-col"
      :class="border ? 'border-4 border-white ' : ''"
    >
      <g-image
        :class="
          image
            ? 'xl:h-64 lg:h-48 md:h-36 w-full object-cover object-center'
            : 'hidden'
        "
        :src="`/images/${image}`"
      />
      <div class="p-6 flex flex-col h-full">
        <div :class="isNewsTeaser ? 'h-48' : ''">
          <h3
            class="title-font text-lg font-medium inline-block"
            :class="isNewsTeaser ? '' : 'underlined mb-3'"
          >
            {{ headline }}
          </h3>
        </div>
        <p v-if="subline" class="team-teaser__subline">
          {{ subline }}
        </p>
        <ul class="leading-relaxed mb-3" :class="list ? 'list-disc pl-5' : ''">
          <li v-for="item in content" :key="item.index">{{ item }}</li>
        </ul>
        <div v-if="isNewsTeaser" class="flex items-end h-full">
          <a
            href="./vacancies/Stellenausschreibung_Wirtschaftsingenieur_VANEVO.pdf"
            target="_blank"
            class="flex justify-center bg-vanevo-blue text-white text-xl mt-6 p-6 lg:px-16 px-4 w-full break-words focus:border-none focus:outline-none"
            >Mehr erfahren</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeaserItem',
  props: {
    isNewsTeaser: {
      type: Boolean,
      default: false
    },
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
    subline: {
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

.underlined:after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  border-top: 3px solid #143988;
}

.team-teaser__subline {
  margin-top: -5px;
  margin-bottom: 20px;
  font-weight: 200;
  font-size: 15px;
}
</style>
