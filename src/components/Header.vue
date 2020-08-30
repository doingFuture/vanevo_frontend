<template>
  <header
    class="text-gray-700 body-font shadow-2xl fixed top-0 left-0 right-0 z-10 bg-white"
  >
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row md:items-center"
    >
      <g-link
        to="/"
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <g-image class="w-64" src="~/assets/images/vanevo.png" />
      </g-link>
      <div class="block lg:hidden absolute right-0">
        <v-burger
          :active="showMenu"
          type="squeeze"
          class="focus:outline-none"
          @updated="handleBurger()"
        />
      </div>
      <nav
        class="md:ml-auto flex flex-wrap flex-col md:flex-row items-center text-xl md:text-base justify-center"
        :class="showMenu ? 'block' : 'hidden md:block'"
      >
        <a
          class="p-5 md:p-0 md:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          >VANEVO-Stacks</a
        >
        <a
          class="p-5 md:p-0 md:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          >Funktionsweise</a
        >
        <a
          class="p-5 md:p-0 md:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          >Anwendung</a
        >
        <a
          class="p-5 md:p-0 md:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          >Team</a
        >
        <a
          class="p-5 md:p-0 md:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
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
