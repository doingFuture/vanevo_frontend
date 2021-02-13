<template>
  <Layout>
    <base-section background="gray">
      <base-row>
        <headline :underlined="false" :text="$page.news.title" />
        <span class="my-16 px-2 pt-2 border-t-4 border-vanevo-blue">
          {{ formattedDate }}
        </span>
        <g-image
          class="w-full h-full pt-5 lg:pt-0"
          :src="$page.news.image.image"
          :alt="$page.news.image.alt"
        />
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="w-full p-5 mt-16" v-html="$page.news.content" />
      </base-row>
    </base-section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  news(id: $id) {
    title
    date
    image {
        image
        alt
    }
    content
    path
  }
}
</page-query>

<script>
import BaseSection from '@/components/BaseSection.vue'
import BaseRow from '@/components/BaseRow.vue'
import Headline from '@/components/Headline.vue'

export default {
  metaInfo: {
    title: 'Impressum'
  },
  components: {
    BaseSection,
    BaseRow,
    Headline
  },
  computed: {
    formattedDate() {
      const date = new Date(this.$page.news.date)
      return date.toLocaleDateString('de-DE')
    }
  }
}
</script>

<style lang="scss" scoped></style>
