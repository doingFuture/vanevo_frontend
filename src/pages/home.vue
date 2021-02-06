<template>
  <Layout :english="true">
    <hero-section :english="true" />
    <base-section background="blue" :fullheight="false">
      <base-row>
        <intro-text :text="data.intro" />
      </base-row>
    </base-section>
    <base-section id="VANEVO-Stacks" :fullheight="false" background="gray">
      <base-row>
        <headline class="mb-10" :text="data.comparisonSection.headline" />
        <div class="my-5 lg:shadow-xl">
          <checkered-section
            v-for="(item, index) in data.comparisonSection.checks"
            :key="index"
            :is-even="index % 2 == 0"
            :content="item"
            :image="item.image"
          >
            <quote-item
              v-if="item.quote"
              class="my-5 ml-5 w-10/12"
              :text="item.quote"
            />
          </checkered-section>
        </div>
        <h4 class="font-semibold text-2xl lg:text-xl lg:mt-20 p-5 w-full">
          Stack technologies compared:
        </h4>
        <teaser-item
          v-for="item in data.comparisonSection.teasers"
          :key="item.index"
          :item-number="data.comparisonSection.teasers.length"
          :border="true"
          :list="true"
          :headline="item.headline"
          :content="item.content"
        />
      </base-row>
    </base-section>
    <base-section id="function" :fullheight="false" background="white">
      <base-row>
        <headline text="How do redox flow batteries work?" />
        <p class="p-5 text-black">
          In redox flow batteries, electrical energy is stored in two liquids,
          the electrolytes.
          <br />
          <br />
          These electrolytes are stored in tanks. The electrolytes can be
          charged or discharged by circulation through the stacks.
          <br />
          Redox flow batteries are non-flammable, show a high cycle life, are
          recyclable and offer the lowest levelized costs of storage.
        </p>

        <div class="grid gap-10 grid-cols-1">
          <quote-item
            class="mb-5 ml-5 mt-10"
            text="The advantage of this technology: it is safe, long-lasting, cheap and sustainable."
          />
          <div>
            <div class="image-wrapper">
              <g-image
                class="w-8/12 pb-5 lg:p-5"
                src="~/assets/images/schema_eng.jpeg"
              />
            </div>
            <p class="p-5 text-black">
              By the way: redox flow batteries are a proven technology which has
              been constantly advanced over decades.
            </p>
          </div>
        </div>
      </base-row>
    </base-section>

    <base-section id="application" :fullheight="false" background="blue">
      <base-row>
        <headline :light="true" text="Applications of redox flow batteries" />
        <div class="grid gap-10 grid-cols-1 lg:grid-cols-2">
          <g-image
            class="w-full p-5 lg:pl-5"
            src="~/assets/images/windrad.jpg"
          />
          <div>
            <p class="pb-5 pl-5 pr-5 lg:pt-5 text-white">
              The generation of green energy from renewable sources is not
              continuous but fluctuating.
              <br />
              When there is no wind or no sun, e.g. at night, no electricity
              from solar or wind can be generated.
              <br />
              For the energy transition towards renewable energies, a continuous
              and reliable power supply by means of electricity storage is
              necessary.
            </p>
            <quote-item
              class="my-5 ml-5"
              :inverted="true"
              text="Redox flow batteries are perfectly suited as buffer for renewable electricity."
            />
            <p class="p-5 text-white">
              Redox flow batteries can be used in various applications:
            </p>
            <ul class="leading-relaxed p-5 list-disc pl-10 text-white">
              <li>
                Buffer for renewables for increased consumption by owner
              </li>
              <li>Charging stations for electric cars</li>
              <li>
                Peak shaving in industrial applications
              </li>
              <li>Grid storage</li>
              <li>
                Storage in island grids/micro grids e.g. especially in
                developing countries
              </li>
            </ul>
          </div>
        </div>
      </base-row>
    </base-section>

    <base-section id="team" :fullheight="false" background="gray">
      <base-row>
        <headline :text="data.teamSection.headline" />
        <g-image
          class="w-full pt-5 px-5 h-full"
          src="~/assets/images/team_02.jpg"
        />
        <p class="text-4m px-5 mb-20 lg:mt-20 mt-10">
          2015
          <br />
          During his PhD at the German Aerospace Center (DLR) Jan investigated
          redox flow batteries.
          <br />
          Soon he came up with the question: why is this advantageous technology
          not really present in the market?
          <br />
          The simple answer: it‘s too expensive!
          <br />
          Approaches and solutions to reduce costs were developed and a patent
          application was filed.
          <br />
          Together with 3 colleagues and funded by a project grant, the idea to
          cut down the costs of redox flow batteries was turned into a business
          idea.
          <br />
          <br />
          2016
          <br />
          Jannick joined the team and supported the redox flow activities within
          his bachelor thesis.
          <br />
          <br />
          2018
          <br />
          Arne, an engineer and experienced CAD designer, became part of the
          team. The VANEVO GmbH was founded. Purpose of the company: Development
          and production of components for redox flow batteries.
          <br />
          <br />
          2019 / 2020
          <br />
          Arne, Jannick and Jan improve the technical approaches and the
          business model. Another patent application for an improved production
          approach was filed.
          <br />
          <br />
          <br />
          <span class="text-vanevo-blue font-bold"
            >Upcoming: Grow with more employees and setting up serial
            production!</span
          >
        </p>
        <teaser-item
          v-for="item in data.teamSection.teasers"
          :key="item.index"
          :item-number="data.teamSection.teasers.length"
          :headline="item.headline"
          :subline="item.job"
          :content="item.content"
          :image="item.image"
        />
      </base-row>
    </base-section>

    <base-section
      id="career"
      class="pt-16"
      :fullheight="false"
      background="blue"
    >
      <base-row class="px-2">
        <div class="w-full">
          <headline :light="true" class="mb-4" text="Working with VANEVO" />
          <p class="pb-5 pl-5 pr-5 lg:pt-5 text-white">
            We hire! For our technical developments and the upcoming market
            entry we look for talents (M/F/X).
            <br />
            <br />
            If you’re interested in working for a startup and you’d like to push
            VANEVO forward with your ideas, write us to jobs@vanevo.de!
            <br />
            <br />
            We’re looking forward to your message – whether specific to a job
            posting or a spontaneous application!
          </p>
          <headline
            :underlined="false"
            :light="true"
            class="my-4"
            text="Current Vacancies:"
          />
          <job-offer
            job-name="Wirtschaftsingenieur / Betriebswirtschaftler (m/w/d)"
          />
        </div>
      </base-row>
    </base-section>

    <base-section id="news" :fullheight="false" background="gray">
      <base-row>
        <headline text="News" />
        <teaser-item
          :item-number="2"
          :is-news-teaser="true"
          :is-english="true"
          headline="NBank Capital invests in VANEVO GmbH"
          subline="Dec. 30th, 2020"
          :content="[
            'On Dec. 30th, 2020, VANEVO and NBank Capital have signed an investment agreement.',
          ]"
          image="NBank_News.png"
          link="nbank-capital-invests-in-vanevo-gmbh"
        />
        <teaser-item
          :item-number="2"
          :is-news-teaser="true"
          :is-english="true"
          headline="VANEVO wins the 2nd place of the DurchSTARTER-Award 2020 in the category science spin-off"
          subline="Dec. 1st, 2020"
          :content="[
            'Among 92 applicants, VANEVO managed to win the second place of the DurchSTARTER-Award 2020 in the category science spin-off.',
          ]"
          image="NBank_BuB_Durchstarter_PRZ-0702.jpg"
          link="vanevo-wins-the-second-place-of-the-durch-starter-award-in-the-category-science-spin-off"
        />
      </base-row>
    </base-section>

    <base-section
      id="contact"
      class="pt-16"
      :fullheight="false"
      background="white"
    >
      <base-row class="px-2">
        <div class="lg:w-7/12">
          <p class="font-semibold text-3xl lg:pr-5 pb-2">
            Like to know more?
            <br />
            Get in touch with us!
          </p>
          <contact-form english="true" />
        </div>
        <g-image
          class="hidden lg:block w-5/12 h-full pt-5 lg:pt-0 shadow-2xl"
          src="~/assets/images/jannick_cta.jpg"
        />
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
import JobOffer from '@/components/JobOffer.vue'
import CheckeredSection from '@/components/CheckeredSection.vue'
import Content from '@/data/home.json'

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
    IntroText,
    CheckeredSection,
    JobOffer
  },
  data() {
    return {
      data: Content
    }
  }
}
</script>

<style lang="scss" scoped>
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
