<template>
  <Layout>
    <hero-section :text="data.hero" />
    <base-section background="blue" :fullheight="false">
      <base-row>
        <intro-text :text="data.intro" />
      </base-row>
    </base-section>
    <base-section id="comparison" background="gray">
      <base-row>
        <headline class="mb-10" :text="data.comparisonSection.headline" />
        <div class="m-5 lg:shadow-xl">
          <checkered-section
            v-for="(item, index) in data.comparisonSection.checks"
            :key="index"
            :is-even="index % 2 == 0"
            :content="item"
            :image="item.image"
          >
            <quote-item
              v-if="item.quote"
              class="mb-5 ml-5"
              :text="item.quote"
            />
          </checkered-section>
        </div>
        <h4 class="font-semibold text-xl mt-20 p-5 w-full">
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
    <base-section id="function" background="white">
      <base-row>
        <headline text="Wie funktionieren Redox-Flow-Batterien?" />
        <p class="p-5 text-black">
          Redox-Flow-Batterien speichern elektrische Energie mit Hilfe von zwei
          Flüssigkeiten (Elektrolyte).
          <br/>
          <br/>
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
            <g-image
              class="w-8/12 pt-5 lg:p-5"
              src="~/assets/images/schema.png"
            />
            <p class="p-5 text-black">
              Übrigens: Redox-Flow-Batterien sind eine bewährte Technologie ,
              welche seit über 40 Jahren stetig weiterentwickelt wird.
            </p>
          </div>
        </div>
      </base-row>
    </base-section>

    <base-section id="application" background="blue">
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
            <p class="p-5 text-white">
              Die Erzeugung von grünem Strom erfolgt nicht kontinuierlich.
              <br />
              <br />
              Wenn keine Sonne scheint – z.B. nachts – oder wenn kein Wind weht,
              wird kein Strom aus Sonnen- und Windkraft erzeugt.
            </p>
            <quote-item
              class="my-5 ml-5"
              :inverted="true"
              text="Für ein verlässliches Stromsystem auf Basis fluktuierender grüner Stromquellen sind
              daher Stromspeicher nötig. Diese sollten nachhaltig sein, wie die
                    Redox-Flow-Batterien von VANEVO"
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

    <base-section id="team" background="gray">
      <base-row>
        <headline :text="data.teamSection.headline" />
        <g-image class="w-full pt-5 px-5" src="~/assets/images/team_02.jpg" />
        <p class="font-semibold text-4m px-5 my-20">
          2015 Aller Anfang ist... akademisch, zumindest bei VANEVO:
          <br />
          <br />
          Während seiner Doktorarbeit am Forschungsinstitut untersuchte und
          entwickelte Jan Redox-Flow-Batterien. 
          <br>
          Dabei kam die Frage auf: Wieso
          ist diese vorteilhafte Technologie eigentlich nicht wirklich im Markt
          der Stromspeicher-Technologie vertreten?
          <br />
          <br />
          Die Antwort war schnell gefunden: Weil sie zu teuer ist!
          <br />
          Es wurden Lösungen zur Kostenreduktion entwickelt und ein erstes
          Patent angemeldet. Mit drei Kollegen konnte Jan im Rahmen eines
          Forschungsprojektes den Ansatz zur Kostenreduktion weiter zu einer
          Geschäftsidee entwickeln.
          <br />
          <br />
          Jannick kam ans Forschungsinstitut und unterstützte das Vorhaben mit
          seiner Abschlussarbeit.
          <br />
          <br />
          2018 Arne, ein erfahrener Konstrukteur, wird Teil des Teams. Die
          VANEVO GmbH wird gegründet mit dem Ziel, Komponenten für
          Redox-Flow-Batterien auf den Markt zu bringen.
          <br />
          <br />
          2019/2020 Arne, Jannick und Jan verbessern die Technik und das
          Geschäftsmodell. Es wird ein weiteres Patent für ein optimiertes
          Herstellverfahren angemeldet.
          <br />
          <br />
          <br>
          <span class="text-vanevo-blue font-bold">Nächste Meilensteine: Investoren gewinnen, Mitarbeiter einstellen,
          Serienproduktion aufbauen!</span>
        </p>
        <teaser-item
          v-for="item in data.teamSection.teasers"
          :key="item.index"
          :item-number="data.teamSection.teasers.length"
          :headline="item.headline"
          :job="item.job"
          :content="item.content"
          :image="item.image"
        />
      </base-row>
    </base-section>

    <base-section background="white">
      <base-row>
        <div class="w-7/12">
          <p class="font-semibold text-4xl lg:pr-5">
            Sie haben weitere Fragen?
            <br>
            Dann nehmen Sie
            <span class="text-vanevo-blue">Kontakt</span> mit uns auf!
            <br>
          </p>
                <g-link to="/#contact"
        class="mt-20 inline-block uppercase text-white self-start bg-vanevo-blue border-0 mt-4 py-4 px-8 focus:outline-none text-xs md:text-base xl:text-lg shadow-xl hover:shadow-2xl"
      >
        Jetzt Kontakt aufnehmen
      </g-link>
        </div>
        <g-image
          class="hidden lg:block w-5/12 pt-5 lg:pt-0 shadow-2xl"
          src="~/assets/images/jannick_cta.jpg"
        />
      </base-row>
    </base-section>

    <base-section id="contact" background="blue">
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
import CheckeredSection from '@/components/CheckeredSection.vue'
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
    CheckeredSection
  },
  data() {
    return {
      data: Content
    }
  }
}
</script>
