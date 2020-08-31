<template>
  <section class="text-black body-font relative">
    <div class="container px-5 py-8 mx-auto">
      <div class="lg:w-full lg:w-2/3 mx-auto">
        <p v-if="error" class="text-red-500 mb-2 italic font-semibold">
          Sie haben ein oder mehrere Felder nicht ausgefüllt!
        </p>
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-full md:w-1/2">
            <input
              v-model="form.surname"
              required
              name="surname"
              class="w-full bg-transparent border-2 border-white focus:outline-none focus:bg-white text-base px-4 py-2 focus:shadow-xl text-white focus:text-black"
              placeholder="Vorname"
              type="text"
            />
          </div>
          <div class="p-2 w-full md:w-1/2">
            <input
              v-model="form.lastname"
              required
              name="lastname"
              class="w-full bg-transparent border-2 border-white focus:outline-none focus:bg-white text-base px-4 py-2 focus:shadow-xl text-white focus:text-black"
              placeholder="Nachname"
              type="text"
            />
          </div>
          <div class="p-2 w-full md:w-1/2">
            <input
              v-model="form.subject"
              required
              name="subject"
              class="w-full bg-transparent border-2 border-white focus:outline-none focus:bg-white text-base px-4 py-2 focus:shadow-xl text-white focus:text-black"
              placeholder="Betreff"
              type="text"
            />
          </div>
          <div class="p-2 w-full md:w-1/2">
            <input
              v-model="form.mail"
              required
              name="mail"
              class="w-full bg-transparent border-2 border-white focus:outline-none focus:bg-white text-base px-4 py-2 focus:shadow-xl text-white focus:text-black"
              placeholder="Email"
              type="email"
            />
          </div>
          <div class="p-2 w-full">
            <textarea
              v-model="form.message"
              required
              class="w-full bg-transparent border-2 border-white focus:outline-none focus:bg-white h-48 text-base px-4 py-2 resize-none block focus:shadow-xl text-white focus:text-black"
              placeholder="Message"
            ></textarea>
          </div>
          <div class="p-2 w-full">
            <button
              class="flex ml-auto text-black bg-white border-0 py-2 px-8 focus:border-none focus:outline-none text-lg hover:shadow-xl"
              @click="checkForm()"
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
import axios from 'axios'
import querystring from 'querystring'

export default {
  name: 'ContactForm',
  data() {
    return {
      error: false,
      form: {
        surname: null,
        lastname: null,
        mail: null,
        message: null,
        subject: null
      },
      response: null
    }
  },
  computed: {
    responseCode() {
      return this.response.status
    }
  },
  methods: {
    send() {
      axios
        .post('http://vanevo.de/new/mail.php', querystring.stringify(this.form))
        .then((res) => {
          this.response = res
        })
    },
    checkForm() {
      if (
        this.form.surname &&
        this.form.lastname &&
        this.form.mail &&
        this.form.message &&
        this.form.subject
      ) {
        this.send()
        this.clearForm()
        return
      }
      this.error = true
    },
    clearForm() {
      const newForm = Object.keys(this.form).map(() => ({}))
      this.form = newForm
      this.error = false
    }
  }
}
</script>

<style lang="scss" scoped>
::placeholder {
  color: white;
}
</style>
