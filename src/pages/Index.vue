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
        <p class="p-5">
          VANEVO hat ein neues Herstellungsverfahren für die Kernkomponente - den Stack - von Redox-Flow-Batterien entwickelt.
        <br>
        <br>
          Der Ansatz: Verkleben statt Verpressen! 
          <br>
          Bei der Vertigung werden weniger komplexte Teile gebraucht, was das Ganze einfacher macht. Dadurch kann der Vorgang leichter Automatisiert werden, was den Prozess wesentlich schneller macht und im Allgemeinen einfacher in der Herstellung, da keine Dichtelemente verspannt werden müssen.
        <br>
        <br>
          Das Verkleben spart also nicht nur Zeit und Nerven, sondern vor allem Geld, und das Beste - es ist durch mehrere Patentanmeldungen geschützt.
        </p>
        <teaser-item
          v-for="item in data.comparisonSection.teasers"
          :key="item.index"
          :border="true"
          :list="true"
          :headline="item.headline"
          :listItem1="item.listItem1"
          :listItem2="item.listItem2"
          :listItem3="item.listItem3"
          :listItem4="item.listItem4"
          :listItem5="item.listItem5"
          :image="item.image"
        />
      </base-row>
    </base-section>
    <base-section background="blue">
      <base-row>
        <headline :light="true" text="Wie funktionieren Redox-Flow-Batterien?" />
        <p class="p-5 text-white">
          Redox-Flow-Batterien speichern elektrische Energie mit Hilfe von 2 Flüssigkeiten.
          <br>
          Diese werden in zwei Tanks gelagert und durch die in der Mitte verbauten Stacks geladen und entladen. Redox-Flow-Batterien sind nicht nur sicher, da Sie nicht brennbar sind, sondern bieteten auch eine hohe Lebensdauer mit bis zu 15.000 Ladezyklen.
        </p>
      </base-row>
      <base-row>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
          <div>
            <quote-item
              class="mb-5 ml-5"
              :inverted="true"
              text="Die Vorteile dieser Technologie liegt damit auf der Hand, Sie ist sicher, die Kosten pro Zyklus sind gering und die Batterie selbst kann nach erfolgreicher Abnutzung einfach nachhaltig Recycelt werden."
            />
            <p class="p-5 text-white">
              Redox-Flow-Batterien sind eine bewährte Technologie, welche seit über 40 Jahren stetig weiterentwickelt wird.
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
        <headline text="Wo und wofür braucht man Redox-Flow-Batterien?" />
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
          <g-image
            class="w-full pt-5 md:pl-5"
            src="~/assets/images/windrad.jpg"
          />
          <div>
            <p class="p-5">
              Die Erzeugung von grünem Strom ist nicht gleichbleibend.
              <br>
              Wenn keine Sonne scheint – z.B. nachts – oder wenn kein Wind weht, wird kein
              Strom aus Sonnen- und Windkraft erzeugt.
            </p>
            <quote-item
              class="my-5 ml-5"
              text="Für ein verlässliches Stromsystem auf Basis grüner Stromquellen sind
              daher Stromspeicher nötig. Diese sollten nachhaltig sein, wie die
                    Redox-Flow-Batterien von VANEVO"
            />
            <p class="p-5">
              Die Einsatzgebiete für Redox-Flow-Batterien von VANEVO können sehr vielseitig sein.
              <br>
              <br>
              Angefangen im Eigenheim, für die Speicherung fluktuierender grüner Stromquellen z.B. bei Solaranlage 
              über die immer wachsende Anzahl von Ladesäulen für E-Mobilität, bis hin zur Industrie mit ihrem Lastspitzenmanagement oder Notstromversorgung.

              Aber auch die großen Netzdienstleistungen wie Regeleistung und Verringerung Netzausbau werden darüber abgedeckt.
            </p>
          </div>
        </div>
      </base-row>
    </base-section>

    <base-section background="gray">
      <base-row>
        <headline :text="data.teamSection.headline" />
        <g-image class="w-full pt-5 md:p-5" src="~/assets/images/team.png" />
        <p class="font-semibold text-4m md:p-5 my-20">
          Alles begann 2015, wahrend Jan an seiner Promotion zum Thema Redox-Flow-Batterien schrieb. 
          <br>
          <br>
          Er steckte tief in der Materie und stellte sich die Frage, ob es nicht moglich ware diese Technologie einfach, schneller und somit auch kostengunstiger zu produzieren. Dabei entwickeltet er einige gute Idee, welche er auch direkt als Patent anmeldete. 
          <br>
          <br>
          In der folgenden Zeit bis 2018 Konnte Jan mit Hilfe eines Forschungsprojektes und drei weiterer Mitstreitern am Forschungsinstitut einen vielversprechendnden technichen Ansatz entwickeln. Weiter, im Jahr 2018 kommt sein Burder Arne als erfahrener Konstrukteur mit dazu und beide grunden die GmbH VANEVO mit dem Ziel eine neue Varriante von Redox-Flow-Batterien auf den Markt zu bringen.
          <br>
          <br>
          Im darauf folgenden Jahr 2019 lernen die beiden Bruder Jackkick kennen, ein erfahrener Redox-Flow Ingenieur, welcher Teil des Teams wird. Seit dem arbeiten die Drei an der standigen Weiterenwicklung der Technick und des Geschaftsmoddels von VANEVO.
        </p>
        <teaser-item
          v-for="item in data.teamSection.teasers"
          :key="item.index"
          :headline="item.headline"
          :job="item.job"
          :listItem1="item.listItem1"
          :image="item.image"
        />
      </base-row>
    </base-section>

    <base-section background="white">
      <base-row>
        <div class="w-7/12">
          <p class="font-semibold text-4xl md:pr-5">
            Wollen Sie mehr über VANEVO wissen? 
            <br>
            Dann nehmen Sie <span class="text-vanevo-blue">Kontakt</span> mit uns auf!
          </p>
        </div>
        <g-image class="hidden md:block w-5/12 pt-5 md:pt-0 shadow-2xl" src="~/assets/images/lightbulb.jpg" />
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
