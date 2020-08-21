<template>
  <Layout>
    <hero-section :text="data.hero" />
    <base-section background="blue" :fullheight="false">
      <base-row>
        <intro-text :text="data.intro" />
      </base-row>
    </base-section>
    <base-section background="gray">
      <base-row>
        <headline :text="data.comparisonSection.headline" />
        <teaser-item
          v-for="item in data.comparisonSection.teasers"
          :key="item.index"
          :border="true"
          :headline="item.headline"
          :text="item.content"
        />
      </base-row>
    </base-section>
    <base-section background="blue">
      <base-row>
        <headline :light="true" text="So funktioniert die Technik" />
        <p class="p-5 text-white">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing.
        </p>
      </base-row>
      <base-row>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
          <div>
            <quote-item
              class="mb-5 ml-5"
              :inverted="true"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua."
            />
            <p class="p-5 text-white">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <g-image
            class="w-full pt-5 md:p-0"
            src="~/assets/images/technik.png"
          />
        </div>
      </base-row>
    </base-section>

    <base-section background="white">
      <base-row>
        <headline text="Einsatzgebiete" />
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
          <g-image
            class="w-full pt-5 md:pl-5"
            src="~/assets/images/windrad.jpg"
          />
          <div>
            <p class="p-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <quote-item
              class="my-5 ml-5"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua."
            />
            <p class="p-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
      </base-row>
    </base-section>

    <base-section background="gray">
      <base-row>
        <headline :text="data.teamSection.headline" />
        <g-image class="w-full pt-5 md:p-5" src="~/assets/images/team.jpg" />
        <quote-item class="my-24" :text="data.teamSection.quote" />
        <teaser-item
          v-for="item in data.teamSection.teasers"
          :key="item.index"
          :headline="item.headline"
          :text="item.content"
        />
      </base-row>
    </base-section>

    <base-section background="blue">
      <base-row>
        <headline :light="true" text="Kontakt" />
        <contact-form />
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
import BaseRow from '@/components/BaseRow.vue'
import ContactForm from '@/components/ContactForm.vue'
import IntroText from '@/components/IntroText.vue'
import Content from '@/data/index.json'

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
    BaseRow,
    ContactForm,
    IntroText
  },
  data() {
    return {
      data: Content
    }
  }
}
</script>
