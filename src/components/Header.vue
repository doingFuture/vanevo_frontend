<template>
  <header
    class="text-gray-700 body-font shadow-2xl fixed top-0 left-0 right-0 z-10 bg-white"
  >
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row md:items-center"
    >
      <g-link
        to="/"
        class="flex title-font font-medium items-center text-gray-900"
      >
        <g-image
          class="w-48 self-center pt-2 lg:pt-0"
          src="~/assets/images/vanevo.png"
        />
      </g-link>
      <div class="block lg:hidden absolute right-0 top-0 p-5">
        <v-burger
          :active="showMenu"
          type="squeeze"
          class="focus:outline-none"
          @updated="handleBurger()"
        />
      </div>
      <nav
        class="lg:ml-auto flex flex-wrap flex-col lg:flex-row items-center pt-5 lg:pt-0 text-xl lg:text-base xl:text-lg justify-start"
        :class="showMenu ? 'block w-full h-screen' : 'hidden lg:block'"
      >
        <a
          href="/#VANEVO-Stacks"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          @click="showMenu = false"
          >VANEVO-Stacks</a
        >
        <a
          href="/#function"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          @click="showMenu = false"
          >Funktionsweise</a
        >
        <a
          href="/#application"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          @click="showMenu = false"
          >Anwendung</a
        >
        <a
          href="/#team"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          @click="showMenu = false"
          >Team</a
        >
        <a
          href="/#contact"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          @click="showMenu = false"
          >Kontakt</a
        >
      </nav>
    </div>
  </header>
</template>

<script>
import { VBurger } from 'vue-burger'

export default {
  name: 'Header',
  components: {
    VBurger
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    handleBurger() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="scss" scoped></style>
