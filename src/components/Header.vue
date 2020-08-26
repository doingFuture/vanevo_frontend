<template>
  <header class="text-gray-700 body-font shadow-2xl">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <g-image class="w-64" src="~/assets/images/vanevo.png" />
      </a>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <a class="mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer">VANEVO-Stacks</a>
        <a class="mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer">Funktionsweise</a>
        <a class="mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer">Anwendung</a>
        <a class="mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer">Team</a>
        <a class="mr-5 border-transparent border-b-2 hover:border-vanevo-blue cursor-pointer">kontakt</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
</style>
