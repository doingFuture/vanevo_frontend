<template>
  <Layout :english="true">
    <hero-section :english="true" />
    <base-section background="blue" :fullheight="false">
      <base-row>
        <intro-text :text="$page.homepages.intro" />
      </base-row>
    </base-section>
    <base-section id="VANEVO-Stacks" :fullheight="false" background="gray">
      <base-row>
        <headline
          class="mb-10"
          :text="$page.homepages.intro_section.headline"
        />
        <div class="my-5 lg:shadow-xl">
          <checkered-section
            :is-even="true"
            :content="$page.homepages.intro_section.intro_content"
            image="was_01.jpg"
          >
            <quote-item
              class="my-5"
              :text="$page.homepages.intro_section.intro_quote"
            />
          </checkered-section>
          <checkered-section
            :is-even="false"
            :content="$page.homepages.intro_section.outro_content"
            image="was_02.jpg"
          >
            <quote-item
              class="my-5"
              :text="$page.homepages.intro_section.outro_quote"
            />
          </checkered-section>
        </div>
        <h4 class="font-semibold text-2xl lg:text-xl lg:mt-20 p-5 w-full">
          Stack technologies compared:
        </h4>
        <teaser-item
          :item-number="2"
          :border="true"
          :list="true"
          headline="State of the Art"
          :content="$page.homepages.intro_section.competitor_list"
        />
        <teaser-item
          :item-number="2"
          :border="true"
          :list="true"
          headline="VANEVO"
          :content="$page.homepages.intro_section.vanevo_list"
        />
      </base-row>
    </base-section>
    <base-section id="function" :fullheight="false" background="white">
      <base-row>
        <headline :text="$page.homepages.how_section.headline" />
        <div
          class="p-5 text-black"
          v-html="asHTML($page.homepages.how_section.intro_content)"
        />

        <div class="grid gap-10 grid-cols-1">
          <quote-item
            class="mb-5 ml-5 mt-10"
            :text="$page.homepages.how_section.quote"
          />
          <div>
            <div class="image-wrapper">
              <g-image
                class="w-8/12 pb-5 lg:p-5"
                :src="$page.homepages.how_section.image.image"
              />
            </div>
            <div v-html="$page.homepages.how_section.outro_content" />
          </div>
        </div>
      </base-row>
    </base-section>

    <base-section id="application" :fullheight="false" background="blue">
      <base-row>
        <headline
          :light="true"
          :text="$page.homepages.where_section.headline"
        />
        <div class="grid gap-10 grid-cols-1 lg:grid-cols-2">
          <g-image
            class="w-full p-5 lg:pl-5"
            :src="$page.homepages.where_section.image.image"
          />
          <div>
            <div
              class="text-white p-5"
              v-html="asHTML($page.homepages.where_section.intro_content)"
            />
            <quote-item
              class="my-5 ml-5"
              :inverted="true"
              :text="$page.homepages.where_section.quote"
            />
            <div
              class="text-white p-5"
              v-html="asHTML($page.homepages.where_section.outro_content)"
            />
            <ul class="leading-relaxed p-5 list-disc pl-10 text-white">
              <li
                v-for="listItem in $page.homepages.where_section.where_list"
                :key="listItem.index"
              >
                {{ listItem }}
              </li>
            </ul>
          </div>
        </div>
      </base-row>
    </base-section>

    <base-section id="team" :fullheight="false" background="gray">
      <base-row>
        <headline :text="$page.homepages.team_section.headline" />
        <g-image
          class="w-full pt-5 px-5 h-full"
          :src="$page.homepages.team_section.image.image"
        />
        <div
          class="text-4m px-5 mb-20 lg:mt-20 mt-10"
          v-html="asHTML($page.homepages.team_section.content)"
        />
        <span class="block w-full px-5 mb-8 font-bold text-vanevo-blue">{{
          $page.homepages.team_section.quote
        }}</span>
        <teaser-item
          v-for="item in $page.homepages.team_section.team"
          :key="item.index"
          :item-number="3"
          :headline="item.name"
          :subline="item.title"
          :content="[item.about]"
          :image="item.image.image"
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
          <headline
            :light="true"
            class="mb-4"
            :text="$page.homepages.career_section.headline"
          />
          <div
            class="pb-5 pl-5 pr-5 lg:pt-5 text-white"
            v-html="asHTML($page.homepages.career_section.content)"
          />
          <div v-if="hasJobs">
            <headline
              :underlined="false"
              :light="true"
              class="my-4"
              text="Current Vacancies:"
            />
            <job-offer
              v-for="edge in $page.jobs.edges"
              :key="edge.node.id"
              :job-name="edge.node.title"
              :job-pdf="edge.node.vacancy_pdf"
            />
          </div>
        </div>
      </base-row>
    </base-section>

    <base-section
      id="news"
      :fullheight="false"
      background="gray"
      v-if="hasNews"
    >
      <base-row>
        <headline text="News" />
        <ClientOnly v-if="!isPhone">
          <carousel :navigation-enabled="true" :per-page="2" :loop="true">
            <slide v-for="newsItem in $page.news.edges" :key="newsItem.node.id">
              <teaser-item
                :item-number="2"
                :is-news-teaser="true"
                :headline="newsItem.node.title"
                :subline="newsItem.node.date"
                :content="[...newsItem.node.excerpt]"
                :image="newsItem.node.image.image"
                :link="newsItem.node.path"
              />
            </slide>
          </carousel>
        </ClientOnly>

        <teaser-item
          v-else
          v-for="newsItem in $page.news.edges"
          :key="newsItem.node.id"
          :item-number="2"
          :is-news-teaser="true"
          :headline="newsItem.node.title"
          :subline="newsItem.node.date"
          :content="[...newsItem.node.excerpt]"
          :image="newsItem.node.image.image"
          :link="newsItem.node.path"
        />
      </base-row>
    </base-section>

  </Layout>
</template>

<page-query>
query {
  news: allNews(filter: { fileInfo: { directory: { eq: "news/en" } } }) {
    edges {
      node {
      	title
        id
        date
        excerpt
        image {
          image
          alt
        }
        path
        fileInfo{
          directory
        }
      }
    }
  }
  jobs: allJobs {
    edges {
      node {
      	title
        id
        vacancy_pdf
      }
    }
  }
  homepages(path:"/homepages/en") {
    title
    intro
    intro_section{
      headline
      intro_content
      intro_quote
      outro_content
      outro_quote
      vanevo_list
      competitor_list
    }
    how_section{
      headline
      intro_content
      quote
      outro_content
      image {
        image
        alt
      }
    }
    where_section{
      headline
      image{
        image
        alt
      }
      intro_content
      quote
      outro_content
      where_list
    }
    team_section{
      headline
      image{
        image
        alt
      }
      content
      quote
      team{
        jan{
          image{
            image
            alt
          }
          name
          title
          about
        }
        arne{
          image{
            image
            alt
          }
          name
          title
          about
        }
        jannick{
          image{
            image
            alt
          }
          name
          title
          about
        }
      }
    }
     career_section{
      headline
      content
    }
  }
}
</page-query>

<script>
import HeroSection from "@/components/HeroSection.vue";
import BaseSection from "@/components/BaseSection.vue";
import Headline from "@/components/Headline.vue";
import TeaserItem from "@/components/TeaserItem.vue";
import QuoteItem from "@/components/QuoteItem.vue";
import BaseRow from "@/components/BaseRow.vue";
import IntroText from "@/components/IntroText.vue";
import JobOffer from "@/components/JobOffer.vue";
import CheckeredSection from "@/components/CheckeredSection.vue";
import Content from "@/data/home.json";
import marked from "marked";

export default {
  metaInfo: {
    title: "Vanevo",
  },
  components: {
    HeroSection,
    BaseSection,
    Headline,
    TeaserItem,
    QuoteItem,
    BaseRow,
    IntroText,
    CheckeredSection,
    JobOffer,
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },
  data() {
    return {
      data: Content,
    };
  },
  methods: {
    asHTML(markdownString) {
      const htmlString = marked(markdownString);
      return htmlString;
    },
  },
  computed: {
    isPhone() {
      return !this.$screen.lg;
    },
    hasJobs() {
      return this.$page.jobs.edges.length;
    },
    hasNews() {
      return this.$page.news.edges.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
