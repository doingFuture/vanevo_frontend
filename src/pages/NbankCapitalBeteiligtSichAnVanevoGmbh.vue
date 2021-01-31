<template>
  <Layout>
    <base-section background="gray">
      <base-row>
        <headline
          :underlined="false"
          text="NBank Capital beteiligt sich an VANEVO GmbH"
        />
        <span class="my-16 px-2 pt-2 border-t-4 border-vanevo-blue"
          >30.12.2020</span
        >
        <g-image
          class="w-full h-full pt-5 lg:pt-0"
          src="~/assets/images/NBank_News.png"
          alt="Logo NBank Capital"
        />
        <div class="w-full p-5 mt-16">
          <h3 class="text-2xl font-semibold py-2 mb-4">Unterzeichnet!</h3>
          <p class="text-base">
            VANEVO und die NBank Capital haben am 30.12.2020 einen
            Beteiligungsvertrag unterzeichnet. Die NBank Capital stellt damit
            Wagniskapital für die weiteren Entwicklungen und den bevorstehenden
            Markteintritt von VANEVO bereit.
          </p>
          <p class="text-base mt-4">
            Die NBank Capital Beteiligungsgesellschaft mbH ist eine Tochter der
            NBank und geht in dem Programm NSeed Beteiligungen an Startups ein.
          </p>
          <p class="text-base mt-4">
            Wir freuen uns auf die weitere Zusammenarbeit mit der NBank Capital
            und darauf, VANEVO mit neuen Mitarbeitern und Mitteln weiter
            voranbringen zu können!
          </p>
          <p class="text-base mt-4">
            Weitere Informationen:
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
