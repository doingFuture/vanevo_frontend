<template>
  <Layout>
    <base-section background="white">
      <base-row>
        <text-paragraph
          v-for="(paragraph, index) in data.paragraphs"
          :key="index"
          :paragraph="data.paragraphs[index]"
        />
      </base-row>
    </base-section>
  </Layout>
</template>

<script>
import BaseSection from '@/components/BaseSection.vue'
import BaseRow from '@/components/BaseRow.vue'
import TextParagraph from '@/components/TextParagraph.vue'
import Content from '@/data/datenschutz.json'

export default {
  metaInfo: {
    title: 'Datenschutz'
  },
  components: {
    BaseSection,
    BaseRow,
    TextParagraph
  },
  data() {
    return {
      data: Content
    }
  }
}
</script>

<style lang="scss" scoped></style>
