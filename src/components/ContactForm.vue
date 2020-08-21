<template>
  <section class="text-black body-font relative">
    <div class="container px-5 py-8 mx-auto">
      <div class="lg:w-full md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <input
              class="w-full bg-transparent border-2 border-white focus:outline-none focus:bg-white focus:border-blue-800 text-base px-4 py-2 focus:shadow-xl"
              placeholder="Vorname"
              type="text"
            />
          </div>
          <div class="p-2 w-1/2">
            <input
              class="w-full bg-transparent border-2 border-white focus:outline-none focus:bg-white focus:border-blue-800 text-base px-4 py-2 focus:shadow-xl"
              placeholder="Nachname"
              type="text"
            />
          </div>
          <div class="p-2 w-1/2">
            <input
              class="w-full bg-transparent border-2 border-white focus:outline-none focus:bg-white focus:border-blue-800 text-base px-4 py-2 focus:shadow-xl"
              placeholder="Betreff"
              type="text"
            />
          </div>
          <div class="p-2 w-1/2">
            <input
              class="w-full bg-transparent border-2 border-white focus:outline-none focus:bg-white focus:border-blue-800 text-base px-4 py-2 focus:shadow-xl"
              placeholder="Email"
              type="email"
            />
          </div>
          <div class="p-2 w-full">
            <textarea
              class="w-full bg-transparent border-2 border-white focus:outline-none focus:bg-white h-48 focus:border-blue-800 text-base px-4 py-2 resize-none block focus:shadow-xl"
              placeholder="Message"
            ></textarea>
          </div>
          <div class="p-2 w-full">
            <button
              class="flex ml-auto text-black bg-white border-0 py-2 px-8 focus:outline-none text-lg hover:shadow-xl"
            >
              Senden
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style lang="scss" scoped>
::placeholder {
  color: white;
}
</style>
