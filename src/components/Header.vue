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
        :class="showMenu ? 'block w-full h-screen' : 'hidden lg:flex'"
      >
        <a
          :href="english ? '/home/#VANEVO-Stacks' : '/#VANEVO-Stacks'"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          @click="showMenu = false"
          >VANEVO Stacks</a
        >
        <a
          :href="english ? '/home/#function' : '/#function'"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          @click="showMenu = false"
          ><span v-if="!english">Funktionsweise</span
          ><span v-if="english">Functional Principle</span></a
        >
        <a
          :href="english ? '/home/#application' : '/#application'"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          @click="showMenu = false"
          ><span v-if="!english">Anwendung</span
          ><span v-if="english">Application</span></a
        >
        <a
          :href="english ? '/home/#team' : '/#team'"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          @click="showMenu = false"
          >Team</a
        >
        <a
          :href="english ? '/home/#career' : '/#career'"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer has-bubble"
          @click="showMenu = false"
          ><span v-if="!english">Karriere</span
          ><span v-if="english">Career</span></a
        >
        <a
          :href="english ? '/home/#news' : '/#news'"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          @click="showMenu = false"
          ><span>News</span></a
        >
        <a
          :href="english ? '/home/#contact' : '/#contact'"
          class="p-5 lg:p-0 lg:mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer"
          @click="showMenu = false"
          ><span v-if="!english">Kontakt</span
          ><span v-if="english">Contact</span></a
        >
        <div class="flex">
          <g-link to="/">
            <g-image class="w-8 p-1" src="~/assets/images/german.jpeg" />
          </g-link>
          <g-link to="/home">
            <g-image class="w-8 p-1" src="~/assets/images/english.jpeg" />
          </g-link>
        </div>
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
  props: {
    english: {
      type: Boolean,
      default: false
    }
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

<style lang="scss" scoped>
.has-bubble {
  position: relative;
  &:after {
    content: "1";
    background:#143988;
    color: white;
    text-align: center;
    position: absolute;
    top: -15px;
    right: -15px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    font-size:16px;
    padding-right:1px;
  }
}
</style>
