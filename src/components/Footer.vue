<template>
  <footer class="text-gray-700 body-font">
    <div class="container w-3/5 px-5 pt-24 pb-5 mx-auto">
      <g-image class="w-64" src="~/assets/images/vanevo.png" />
    </div>
    <div
      class="container w-3/5 px-5 pb-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col"
    >
      <div class="md:w-1/2 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <div class="bg-white relative flex flex-wrap">
          <div class="px-6 w-full mt-4 lg:mt-0">
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm mb-2"
            >
              EMAIL
            </h2>
            <a href="mailto:info@vanevo.de" class="text-vanevo-blue leading-relaxed block mb-3"
              >info@vanevo.de</a
            >
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm mb-2"
            >
              TELEFON
            </h2>
            <p class="leading-relaxed">+49 (0) 151 5213083</p>
          </div>
          <div class="px-6 w-full">
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm mb-2"
            >
              ADDRESSE
            </h2>
            <p class="leading-relaxed">
              Johann-Hinrich-Engelbart Weg 2
            </p>
            <p class="leading-relaxed mb-3">
              26131 Oldenburg
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
      >
        <div class="md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            LINKS
          </h2>
          <nav class="list-none mb-10">
            <li class="mb-3">
              <a class="text-gray-600 hover:text-gray-800">VANEVO-Stacks</a>
            </li>
            <li class="mb-3">
              <a class="text-gray-600 hover:text-gray-800">Funktionsweise</a>
            </li>
            <li class="mb-3">
              <a class="text-gray-600 hover:text-gray-800">Anwendung</a>
            </li>
            <li class="mb-3">
              <a class="text-gray-600 hover:text-gray-800">Team</a>
            </li>
            <li class="mb-3">
              <a class="text-gray-600 hover:text-gray-800">Kontakt</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div>
      <span class="flex justify-between items-center w-3/5 mx-auto px-5 mb-20">
          <g-image class="w-32" src="~/assets/images/bund.jpg" />
          <g-image class="w-32" src="~/assets/images/exist.jpg" />
          <g-image class="w-32" src="~/assets/images/esf.jpg" />
          <g-image class="w-32" src="~/assets/images/eu.jpg" />
          <g-image class="w-32" src="~/assets/images/foerder.jpg" />
      </span>
    </div>
    <div class="bg-gray-200">
      <div
        class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
      >
        <p class="text-gray-500 text-sm text-center sm:text-left">
          © 2020 vanevo
        </p>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped></style>
