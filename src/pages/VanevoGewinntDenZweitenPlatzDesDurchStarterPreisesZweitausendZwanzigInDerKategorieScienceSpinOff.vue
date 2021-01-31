<template>
  <Layout>
    <base-section background="gray">
      <base-row>
        <headline
          :underlined="false"
          text="VANEVO gewinnt den 2. Platz des DurchSTARTer-Preises 2020 in der Kategorie Science-Spin-Off"
        />
        <span class="my-16 px-2 pt-2 border-t-4 border-vanevo-blue"
          >01.12.2020</span
        >
        <g-image
          class="w-full h-full pt-5 lg:pt-0"
          src="~/assets/images/NBank_BuB_Durchstarter_PRZ-0702.jpg"
          alt="Videokonferenz"
        />
        <div class="w-full p-5 mt-16">
          <p class="text-base">
            VANEVO konnte sich unter 92 Bewerbern für den Durchstarterpreis in
            der Kategorie Science-Spin-Off durchsetzen und den 2. Platz belegen.
            Der DurchSTARTer ist ein Preis des Landes Niedersachsen, verliehen
            von einer Gemeinschaftsinitiative niedersächsischer Ministerien, der
            NBank, dem Innovationszentrum Niedersachsen und der
            Unternehmerverbände Niedersachsen (UVN). Die Verleihung fand am
            01.12.2020 im Rahmen einer digitalen Preisverleihung statt.
          </p>
          <p class="text-base mt-4">
            VANEVO freut sich, dass mit der Darstellung des Unternehmenskonzepts
            die Jury überzeugt werden konnte!
          </p>
          <p class="text-base mt-4">
            Weitere Informationen:
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
