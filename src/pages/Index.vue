<template>
  <Layout>
    <hero-section :text="data.hero" />
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
          Stacks im Vergleich:
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
        <headline text="Wie funktionieren Redox-Flow-Batterien?" />
        <p class="p-5 text-black">
          Redox-Flow-Batterien speichern elektrische Energie mit Hilfe von zwei
          Flüssigkeiten (Elektrolyte).
          <br />
          <br />
          Diese Elektrolyte werden in zwei Tanks gelagert und können in den
          Stacks geladen und entladen werden. Redox-Flow-Batterien sind nicht
          brennbar, bieten eine hohe Lebensdauer mit bis zu 15.000 Ladezyklen,
          weisen die geringsten Kosten je Lade/Entlade-Zyklus auf und können
          recycelt werden.
        </p>

        <div class="grid gap-10 grid-cols-1">
          <quote-item
            class="mb-5 ml-5 mt-10"
            text="Die Vorteile dieser Speicher-Technologie liegen damit auf der Hand: Sie ist sicher, langlebig, günstig und nachhaltig!"
          />
          <div>
            <div class="image-wrapper">
              <g-image
                class="w-8/12 pb-5 lg:p-5"
                src="~/assets/images/schema.png"
              />
            </div>
            <p class="p-5 text-black">
              Übrigens: Redox-Flow-Batterien sind eine bewährte Technologie,
              welche seit über 40 Jahren stetig weiterentwickelt wird.
            </p>
          </div>
        </div>
      </base-row>
    </base-section>

    <base-section id="application" :fullheight="false" background="blue">
      <base-row>
        <headline
          :light="true"
          text="Wo kommen Redox-Flow-Batterien zum Einsatz?"
        />
        <div class="grid gap-10 grid-cols-1 lg:grid-cols-2">
          <g-image
            class="w-full p-5 lg:pl-5"
            src="~/assets/images/windrad.jpg"
          />
          <div>
            <p class="pb-5 pl-5 pr-5 lg:pt-5 text-white">
              Die Erzeugung von grünem Strom erfolgt zeitlich variabel - immer
              nur dann, wenn Wind weht oder die Sonne scheint.
              <br />
              Für eine gelungene Energiewende wird aber eine durchgehende,
              zuverlässige Stromversorgung benötigt.
              <br />
              Dies kann mit Redox-Flow-Batterien als Stromspeicher für grünen
              Strom erreicht werden: für eine zuverlässige und nachhaltige
              Energiewende!
            </p>
            <quote-item
              class="my-5 ml-5"
              :inverted="true"
              text="Redox-Flow-Batterien eignen sich perfekt als Puffer für grünen Strom!"
            />
            <p class="p-5 text-white">
              Die Einsatzgebiete für Redox-Flow-Batterien von VANEVO sind sehr
              vielseitig:
            </p>
            <ul class="leading-relaxed p-5 list-disc pl-10 text-white">
              <li>
                Speicherung grünen Stroms zur Erhöhung des Eigenverbrauchs
              </li>
              <li>Versorgung von Ladesäulen für die Elektromobilität</li>
              <li>
                Lastmanagement (Peakshaving), Notstromversorgung in der
                Industrie
              </li>
              <li>Verringerung des Netzausbaus</li>
              <li>Systemdienstleistungen (Regelleistung)</li>
              <li>Speicher für Inselnetze z.B. in Entwicklungsländern</li>
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
          Aller Anfang ist... akademisch, zumindest bei VANEVO:
          <br />
          Während seiner Doktorarbeit am Forschungsinstitut untersuchte und
          entwickelte Jan Redox-Flow-Batterien.
          <br />
          Dabei kam die Frage auf: Wieso ist diese vorteilhafte Technologie
          eigentlich nicht wirklich im Markt der Stromspeicher-Technologie
          vertreten?
          <br />
          Die Antwort war schnell gefunden: zu teuer!
          <br />
          Es wurden Lösungen zur Kostenreduktion entwickelt und ein erstes
          Patent angemeldet. Mit drei Kollegen konnte Jan im Rahmen eines
          Forschungsprojektes den Ansatz zur Kostenreduktion weiter zu einer
          Geschäftsidee entwickeln.
          <br />
          <br />
          2016
          <br />
          Jannick kam ans Forschungsinstitut und unterstützte das Vorhaben mit
          seiner Abschlussarbeit.
          <br />
          <br />
          2018
          <br />
          Arne, ein erfahrener Konstrukteur, wird Teil des Teams. Die VANEVO
          GmbH wird gegründet mit dem Ziel, Komponenten für Redox-Flow-Batterien
          auf den Markt zu bringen.
          <br />
          <br />
          2019 / 2020
          <br />
          Arne, Jannick und Jan verbessern die Technik und das Geschäftsmodell.
          Es wird ein weiteres Patent für ein optimiertes Herstellverfahren
          angemeldet.
          <br />
          <br />
          <br />
          <span class="text-vanevo-blue font-bold"
            >Nächste Meilensteine: Investoren gewinnen, Mitarbeiter einstellen,
            Serienproduktion aufbauen!</span
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

    <base-section id="career" class="pt-16" :fullheight="false" background="blue">
      <base-row class="px-2">
        <div class="w-full">
          <headline :light="true" class="mb-4" text="Karriere bei VANEVO" />
          <p class="pb-5 pl-5 pr-5 lg:pt-5 text-white">
            Wir stellen ein! Für unsere weiteren technischen Entwicklungen sowie
            den Markteintritt suchen wir Mitarbeiter (m/w/d).
            <br />
            <br />
            Falls Du Lust auf die Mitarbeit in einem jungen Startup hast und mit
            Deinen Ideen die Entwicklung von VANEVO mitgestalten möchtest, dann
            bewirb Dich bei uns unter jobs@vanevo.de! Wir freuen uns auf deine
            Bewerbung - gerne auch initiativ!
          </p>
          <headline
            :underlined="false"
            :light="true"
            class="my-4"
            text="Unsere offenen Vakanzen:"
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
          headline="NBank Capital beteiligt sich an VANEVO GmbH"
          subline="30.12.2020"
          :content="[
            'VANEVO und die NBank Capital haben am 30.12.2020 einen Beteiligungsvertrag unterzeichnet.',
          ]"
          image="NBank_News.png"
          link="nbank-capital-beteiligt-sich-an-vanevo-gmbh"
        />
        <teaser-item
          :item-number="2"
          :is-news-teaser="true"
          headline="VANEVO gewinnt den 2. Platz des DurchSTARTer-Preises 2020 in der Kategorie Science-Spin-Off"
          subline="01.12.2020"
          :content="[
            'VANEVO konnte sich unter 92 Bewerbern für den Durchstarterpreis in der Kategorie Science-Spin-Off durchsetzen und den 2. Platz belegen.',
          ]"
          image="NBank_BuB_Durchstarter_PRZ-0702.jpg"
          link="vanevo-gewinnt-den-zweiten-platz-des-durch-starter-preises-zweitausend-zwanzig-in-der-kategorie-science-spin-off"
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
            Interesse geweckt?
            <br />
            Nehmen Sie Kontakt mit uns auf!
          </p>
          <contact-form />
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
import CheckeredSection from '@/components/CheckeredSection.vue'
import JobOffer from '@/components/JobOffer.vue'
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
