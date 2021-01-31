<template>
  <Layout>
    <base-section background="gray">
      <base-row>
        <headline
          :underlined="false"
          text="VANEVO wins the 2nd place of the DurchSTARTER-Award 2020 in the category science spin-off"
        />
        <span class="my-16 px-2 pt-2 border-t-4 border-vanevo-blue"
          >Dec. 1st, 2020</span
        >
        <g-image
          class="w-full h-full pt-5 lg:pt-0"
          src="~/assets/images/NBank_BuB_Durchstarter_PRZ-0702.jpg"
          alt="Videokonferenz"
        />
        <div class="w-full p-5 mt-16">
          <p class="text-base">
            Among 92 applicants, VANEVO managed to win the second place of the
            DurchSTARTER-Award 2020 in the category science spin-off. The
            DurchSTARTER (german for “hot-shot” or “newcomer”) is awarded by the
            state of Lower Saxony and some of its institutions. The ceremony on
            Dec. 1st, 2020, was organized as a virtual event.
          </p>
          <p class="text-base mt-4">
            VANEVO is proud having been able to convince the jury of our
            business model and our benefits!
          </p>
          <p class="text-base mt-4">
            Further information:
            <a
              href="https://www.nbank.de/Blickpunkt/DurchSTARTer-Preis-2020-Niedersachsen-pr%C3%A4miert-seine-besten-Startups.jsp"
              >https://www.nbank.de/Blickpunkt/DurchSTARTer-Preis-2020-Niedersachsen-pr%C3%A4miert-seine-besten-Startups.jsp
            </a>
            <a href="https://durchstarterpreis.nbank.de/"
              >https://durchstarterpreis.nbank.de/
            </a>
          </p>
        </div>
      </base-row>
    </base-section>
  </Layout>
</template>

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
  }
}
</script>

<style lang="scss" scoped></style>
