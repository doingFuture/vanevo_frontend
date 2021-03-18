<template>
  <div class="p-4 w-full" :class="widthClasses">
    <div
      class="h-full overflow-hidden text-gray-900 bg-white flex flex-col"
      :class="border ? 'border-4 border-white ' : ''"
    >
      <g-image
        :class="
          image
            ? 'xl:h-64 lg:h-48 md:h-36 w-full object-cover object-center'
            : 'hidden'
        "
        :src="image"
      />
      <div class="p-6 flex flex-col h-full">
        <div :class="isNewsTeaser ? 'h-32' : ''">
          <h3
            class="text-base lg:text-lg title-font font-medium inline-block underlined mb-3"
          >
            {{ headline }}
          </h3>
        </div>
        <p v-if="subline" class="team-teaser__subline">
          {{ formattedSubline }}
        </p>
        <ul class="leading-relaxed mb-3" :class="contentClasses">
          <li v-for="item in content" :key="item.index">{{ item }}</li>
        </ul>
        <div v-if="isNewsTeaser" class="flex items-end h-full">
          <g-link
            :to="link"
            class="flex justify-center bg-vanevo-blue text-white text-xl mt-6 p-6 lg:px-16 px-4 w-full break-words focus:border-none focus:outline-none"
            >{{ buttonText }}</g-link
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
    isEnglish: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: ''
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
  },
  computed: {
    buttonText() {
      return this.isEnglish ? 'more' : 'mehr erfahren'
    },
    formattedSubline() {
      if (this.isNewsTeaser) {
        const date = new Date(this.subline)
        return date.toLocaleDateString('de-DE')
      }
      return this.subline
    },
    contentClasses() {
      if (this.list) {
        return 'list-disc pl-5'
      }
      if (this.isNewsTeaser) {
        return 'h-32'
      }
      return ''
    },
    widthClasses() {
      if (this.itemNumber < 2 || this.isNewsTeaser) {
        return ''
      }
      if (this.itemNumber === 2) {
        return 'lg:w-1/2'
      }
      return 'lg:w-1/3'
    }
  }
}
</script>

<style lang="scss">
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

.VueCarousel-navigation-button {
  &:focus {
    outline: none !important;
  }
}
</style>
