<template>
  <Layout>
    <hero-section />
    <base-section :background="true">
      <base-row>
        <headline text="Im Vergleich" />
        <teaser-item />
        <teaser-item />
        <teaser-item />
      </base-row>
    </base-section>
    <base-section :fullwidth="true">
      <base-row>
        <headline :fullwidth="false" text="Unser Produkt in der Praxis" />
        <p class="p-5 w-3/5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing.
        </p>
      </base-row>
      <base-row orientation="start">
        <asym-section>
          <div class="flex justify-end">
            <quote-item :fullwidth="false" :inverted="true" class="self-center" />
          </div>
          <div class="flex justify-end">
            <g-image class="w-9/12 -mr-20" src="~/assets/images/windrad.jpg" />
          </div>
        </asym-section>
      </base-row>
    </base-section>

    <base-section :background="true">
      <base-row>
        <headline text="Wir sind das Team dahinter" />
        <g-image class="w-full p-5" src="~/assets/images/team.jpg" />
        <quote-item class="my-24" />
        <teaser-item />
        <teaser-item />
        <teaser-item />
      </base-row>
    </base-section>
  </Layout>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
import Headline from '@/components/Headline.vue'
import TeaserItem from '@/components/TeaserItem.vue'
import QuoteItem from '@/components/QuoteItem.vue'
import AsymSection from '@/components/AsymSection.vue'
import BaseRow from '@/components/BaseRow.vue'

export default {
  metaInfo: {
    title: 'Vanevo'
  },
  components: {
    HeroSection,
    BaseSection,
    Headline,
    TeaserItem,
    QuoteItem,
    AsymSection,
    BaseRow
  }
}
</script>

<style></style>
