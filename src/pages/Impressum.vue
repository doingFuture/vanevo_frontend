<template>
  <Layout>
    <base-section background="white">
      <base-row>
        <headline :text="$page.legalTexts.title" />
        <div
          class="p-5 text-black imprint__content"
          v-html="asHTML($page.legalTexts.content)"
        />
        <p class="w-full px-5">
          Quelle:
          <a
            class="text-vanevo-blue underline"
            href="https://www.e-recht24.de/impressum-generator.html"
            >e-recht24.de</a
          >
        </p>
      </base-row>
    </base-section>
  </Layout>
</template>

<page-query>
query {
  legalTexts(path:"/legal-texts/impressum/"){
    title
    content
  }
}
</page-query>

<script>
import BaseSection from '@/components/BaseSection.vue'
import BaseRow from '@/components/BaseRow.vue'
import Headline from '@/components/Headline.vue'
import Content from '@/data/impressum.json'
import marked from 'marked'

export default {
  metaInfo: {
    title: 'Impressum'
  },
  components: {
    BaseSection,
    BaseRow,
    Headline
  },
  data() {
    return {
      data: Content
    }
  },
  methods: {
    asHTML(markdownString) {
      const htmlString = marked(markdownString)
      return htmlString
    }
  }
}
</script>

<style lang="scss">
.imprint__content {
  p {
    margin-bottom: 1.5rem;
    word-break: break-word;
  }
  h3 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.125rem;
    font-weight: 600;
  }
}
</style>
