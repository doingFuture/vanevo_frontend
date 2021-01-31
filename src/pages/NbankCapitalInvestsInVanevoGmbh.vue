<template>
  <Layout>
    <base-section background="gray">
      <base-row>
        <headline
          :underlined="false"
          text="NBank Capital invests in VANEVO GmbH"
        />
        <span class="my-16 px-2 pt-2 border-t-4 border-vanevo-blue"
          >Dec. 30th, 2020</span
        >
        <g-image
          class="w-full h-full pt-5 lg:pt-0"
          src="~/assets/images/NBank_News.png"
          alt="Logo NBank Capital"
        />
        <div class="w-full p-5 mt-16">
          <h3 class="text-2xl font-semibold py-2 mb-4">Signed!</h3>
          <p class="text-base">
            On Dec. 30th, 2020, VANEVO and NBank Capital have signed an
            investment agreement. NBank Capital provides VANEVO with venture
            capital for the next development steps and the upcoming market
            entry.
          </p>
          <p class="text-base mt-4">
            NBank Capital is a subsidiary of NBank and invests in startups
            within its program NSeed.
          </p>
          <p class="text-base mt-4">
            We are looking forward to the collaboration with NBank Capital and
            are happy that VANEVO takes another step!
          </p>
          <p class="text-base mt-4">
            Further information:
            <a
              href="https://www.nbank.de/Die-NBank/Presse/NBank-Capital-2020.jsp"
              >https://www.nbank.de/Die-NBank/Presse/NBank-Capital-2020.jsp</a
            >
          </p>
          <p class="text-base mt-16">
            Foto: Logo NBank Capital
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
