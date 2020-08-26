<template>
  <Layout>
    <hero-section :text="data.hero"/>
    <base-section background="blue" :fullheight="false">
      <base-row>
        <intro-text :text="data.intro" />
      </base-row>
    </base-section>
    <base-section background="gray">
      <base-row>
        <headline :text="data.comparisonSection.headline" />
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
          <g-image
            class="w-full pt-5 md:pl-5"
            src="~/assets/images/VANEVO-Shortstack.jpg"
          />
          <div>
            <p class="p-5">
              VANEVO hat ein neues Herstellungsverfahren für die Kernkomponente -
              den Stack - von Redox-Flow-Batterien entwickelt.
              <br />
              <br />
              Der Ansatz: Verkleben statt Verpressen!
              <br />
              <br />
              Für VANEVO-Stacks werden weniger Teile sowie weniger komplexe Teile als bei alternativen Stackkonzepten benötigt, wodurch die Anforderungen vereinfacht werden. 
              Zudem kann der Vorgang leichter automatisiert werden, so dass eine schnellere Montage möglich ist. 
              Durch den Verzicht auf Dichtelemente entfallen massive Endplatten zur Verspannung - die Stacks sind daher deutlich leichter und somit einfacher in der Handhabung.
            </p>
            <quote-item
              class="my-5 ml-5"
              text="Der VANEVO-Stack: Einfacher, schneller, günstiger!"
            />
            <p class="p-5">
              Das Verkleben ermöglicht die kosteneffiziente Fertigung von VANEVO-Stacks und ist durch mehrere Patentanmeldungen geschützt.
            </p>
          </div>
        </div>
        <teaser-item
          v-for="item in data.comparisonSection.teasers"
          :itemNumber="item.number"
          :key="item.index"
          :border="true"
          :list="true"
          :headline="item.headline"
          :content="item.content"
        />
      </base-row>
    </base-section>
    <base-section background="blue">
      <base-row>
        <headline
          :light="true"
          text="Wie funktionieren Redox-Flow-Batterien?"
        />
        <p class="p-5 text-white">
          Redox-Flow-Batterien speichern elektrische Energie mit Hilfe von zwei Flüssigkeiten (Elektrolyte).
          <br>
          Diese Elektrolyte werden in zwei Tanks gelagert und können in den Stacks geladen und entladen werden. 
          Redox-Flow-Batterien sind nicht brennbar, bieten eine hohe Lebensdauer mit bis
          zu 15.000 Ladezyklen, weisen die geringsten Kosten je Lade/Entlade-Zyklus auf und können recycelt werden.
        </p>
      </base-row>
      <base-row>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
          <div>
            <quote-item
              class="mb-5 ml-5"
              :inverted="true"
              text="Die Vorteile dieser Speicher-Technologie liegen damit auf der Hand: Sie ist sicher, langlebig, günstig und nachhaltig!"
            />
            <p class="p-5 text-white">
              Übrigens: Redox-Flow-Batterien sind eine bewährte Technologie , welche seit über 40 Jahren stetig weiterentwickelt wird. 
            </p>
          </div>
          <g-image
            class="w-full pt-5 md:p-0"
            src="~/assets/images/schema.jpg"
          />
        </div>
      </base-row>
    </base-section>

    <base-section background="white">
      <base-row>
        <headline text="Wo kommen Redox-Flow-Batterien zum Einsatz?"/>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
          <g-image
            class="w-full pt-5 md:pl-5"
            src="~/assets/images/windrad.jpg"
          />
          <div>
            <p class="p-5">
              Die Erzeugung von grünem Strom erfolgt nicht kontinuierlich.
              <br />
              Wenn keine Sonne scheint – z.B. nachts – oder wenn kein Wind weht,
              wird kein Strom aus Sonnen- und Windkraft erzeugt.
            </p>
            <quote-item
              class="my-5 ml-5"
              text="Für ein verlässliches Stromsystem auf Basis fluktuierender grüner Stromquellen sind
              daher Stromspeicher nötig. Diese sollten nachhaltig sein, wie die
                    Redox-Flow-Batterien von VANEVO"
            />
            <p class="p-5">
              Die Einsatzgebiete für Redox-Flow-Batterien von VANEVO sind sehr
              vielseitig.
            </p>
            <ul class="leading-relaxed p-5 list-disc list-inside"> 
              <li>Speicherung grünen Stroms zur Erhöhung des Eigenverbrauchs</li>
              <li>Versorgung von Ladesäulen für die Elektromobilität</li>
              <li>Lastmanagement (Peakshaving), Notstromversorgung in der Industrie</li>
              <li>Verringerung des Netzausbaus</li>
              <li>Systemdienstleistungen (Regelleistung)</li>
              <li>Speicher für Inselnetze z.B. in Entwicklungsländern</li>
            </ul>
          </div>
        </div>
      </base-row>
    </base-section>

    <base-section background="gray">
      <base-row>
        <headline :text="data.teamSection.headline" />
        <g-image class="w-full pt-5 md:p-5" src="~/assets/images/team.png" />
        <p class="font-semibold text-4m md:p-5 my-20">
          2015 Aller Anfang ist... akademisch, zumindest bei VANEVO: 
          <br>
          <br>
          Während seiner Doktorarbeit am Forschungsinstitut untersuchte und entwickelte Jan Redox-Flow-Batterien. Dabei kam die Frage auf: Wieso ist diese vorteilhafte Technologie eigentlich nicht wirklich im Markt der Stromspeicher-Technologie vertreten? 
          <br>
          <br>
          Die Antwort war schnell gefunden: Weil sie zu teuer ist! 
          <br>
          Es wurden Lösungen zur Kostenreduktion entwickelt und ein erstes Patent angemeldet.
          Mit drei Kollegen konnte Jan im Rahmen eines Forschungsprojektes den Ansatz zur Kostenreduktion weiter zu einer Geschäftsidee entwickeln. 
          <br>
          <br>
          Jannick kam ans Forschungsinstitut und unterstützte das Vorhaben mit seiner Abschlussarbeit.
          <br>
          <br>
          2018 Arne, ein erfahrener Konstrukteur, wird Teil des Teams. Die VANEVO GmbH wird gegründet mit dem Ziel, Komponenten für Redox-Flow-Batterien auf den Markt zu bringen.
          <br>
          <br>
          2019/2020 Arne, Jannick und Jan verbessern die Technik und das Geschäftsmodell. Es wird ein weiteres Patent für ein optimiertes Herstellverfahren angemeldet. 
          <br>
          <br>
          Nächste Meilensteine: Investoren gewinnen, Mitarbeiter einstellen, Serienproduktion aufbauen!
        </p>
        <teaser-item
          v-for="item in data.teamSection.teasers"
          :key="item.index"
          :itemNumber="item.number"
          :headline="item.headline"
          :job="item.job"
          :content="item.content"
          :hasImage="true"
          :image="item.image"
        />
      </base-row>
    </base-section>

    <base-section background="white">
      <base-row>
        <div class="w-7/12">
          <p class="font-semibold text-4xl md:pr-5">
            Wie funktioniert das VANEVO-Herstellverfahren ganz genau?
            <br>
            <br>
            Wie viel kann dabei denn an Kosten eingespart werden?
            <br>
            <br>
            Wie viel Geld benötigt VANEVO denn?
            <br>
            <br>
            Kann ich Redox-Flow-Batterien auch in meinen Keller stellen? 
            <br>
            <br>
            Was sagt Barack Obama zu Redox-Flow-Batterien? 
            <br>
            <br>
            Hää?
            <br>
            <br>
            Wenn Sie diese oder andere Fragen haben: Nehmen Sie <span class="text-vanevo-blue">Kontakt</span> mit uns auf!
          </p>
        </div>
        <g-image
          class="hidden md:block w-5/12 pt-5 md:pt-0 shadow-2xl"
          src="~/assets/images/lightbulb.jpg"
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
