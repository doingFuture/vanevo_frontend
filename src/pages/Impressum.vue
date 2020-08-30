<template>
  <Layout>
    <base-section background="white">
      <base-row>
        <headline text="Impressum" />
        <text-paragraph v-for="(paragraph, index) in data.paragraphs"
          :key="index"
          :paragraph="data.paragraphs[index]"
        />
        <p class="w-full px-5">Quelle: <a class="text-vanevo-blue underline" href="https://www.e-recht24.de/impressum-generator.html">e-recht24.de</a></p>
      </base-row>
    </base-section>
  </Layout>
</template>

<script>
import BaseSection from '@/components/BaseSection.vue'
import BaseRow from '@/components/BaseRow.vue'
import TextParagraph from '@/components/TextParagraph.vue'
import Headline from '@/components/Headline.vue'
import Content from '@/data/impressum.json'

export default {
  metaInfo: {
    title: 'Impressum'
  },
  components: {
    BaseSection,
    BaseRow,
    TextParagraph,
    Headline
  },
  data() {
    return {
      data: Content
    }
  }
}
</script>

<style lang="scss" scoped></style>
