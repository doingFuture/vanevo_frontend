<template>
  <div class="layout pt-20">
    <Header :english="english" />
    <div class="min-h-screen">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  props: {
    english: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
body {
  overflow-x: hidden;
}
</style>
