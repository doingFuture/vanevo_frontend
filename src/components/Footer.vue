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
          <div class="px-6 w-full mt-4 lg:mt-0">
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm mb-2"
            >
              EMAIL
            </h2>
            <a class="text-indigo-500 leading-relaxed block mb-3"
              >info@vanevo.de</a
            >
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm mb-2"
            >
              TELEFON
            </h2>
            <p class="leading-relaxed">+49 (0) 151 5213083</p>
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
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-200">
      <div
        class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
      >
        <p class="text-gray-500 text-sm text-center sm:text-left">
          © 2020 vanevo
        </p>
        <span
          class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
        >
          <a class="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
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
