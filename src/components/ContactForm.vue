<template>
  <section class="text-black body-font relative">
    <div class="container lg:pr-10 pb-8 pt-10 mx-auto">
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
              class="w-full bg-transparent border-2 border-black focus:outline-none focus:bg-white text-base px-4 py-2 focus:shadow-xl text-black focus:text-black"
              :placeholder="english ? 'surname' : 'Vorname'"
              type="text"
            />
          </div>
          <div class="p-2 w-full md:w-1/2">
            <input
              v-model="form.lastname"
              required
              name="lastname"
              class="w-full bg-transparent border-2 border-black focus:outline-none focus:bg-white text-base px-4 py-2 focus:shadow-xl text-black focus:text-black"
              :placeholder="english ? 'lastname' : 'Nachname'"
              type="text"
            />
          </div>
          <div class="p-2 w-full">
            <input
              v-model="form.mail"
              required
              name="mail"
              class="w-full bg-transparent border-2 border-black focus:outline-none focus:bg-white text-base px-4 py-2 focus:shadow-xl text-black focus:text-black"
              :placeholder="english ? 'email' : 'Email'"
              type="email"
            />
          </div>
          <div class="p-2 w-full">
            <input
              v-model="form.subject"
              required
              name="subject"
              class="w-full bg-transparent border-2 border-black focus:outline-none focus:bg-white text-base px-4 py-2 focus:shadow-xl text-black focus:text-black"
              :placeholder="english ? 'subject' : 'Betreff'"
              type="text"
            />
          </div>
          <div class="p-2 w-full">
            <textarea
              v-model="form.message"
              required
              class="w-full bg-transparent border-2 border-black focus:outline-none focus:bg-white h-48 text-base px-4 py-2 resize-none block focus:shadow-xl text-black focus:text-black"
              :placeholder="english ? 'message' : 'Nachricht'"
            ></textarea>
          </div>
          <div class="p-2 w-full">
            <button
              v-if="!english"
              class="flex ml-auto text-white bg-vanevo-blue border-0 mt-5 lg:mt-0 py-2 px-8 focus:border-none focus:outline-none text-lg hover:shadow-xl"
              @click="checkForm()"
            >
              Senden
            </button>
            <button
              v-if="english"
              class="flex ml-auto text-white bg-vanevo-blue border-0 mt-5 lg:mt-0 py-2 px-8 focus:border-none focus:outline-none text-lg hover:shadow-xl"
              @click="checkForm()"
            >
              send
            </button>
          </div>
        </div>
        <div
          v-if="showNotification"
          class="bg-teal-100 border-t-4 mt-5 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md relative"
          role="alert"
        >
          <div class="flex">
            <div class="py-1 px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style="width: 40px;"
              >
                <path
                  d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"
                />
              </svg>
            </div>
            <div>
              <svg
                class="fill-current h-6 w-6 absolute right-0 mr-5"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                @click="closeNotification()"
              >
                <title>Close</title>
                <path
                  d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                />
              </svg>
              <p class="font-bold pt-1">
                Die Kontaktanfrage wurde erfolgreich versendet!
              </p>
              <p class="text-sm">
                Vielen Dank für die Kontaktaufnahme.
              </p>
            </div>
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
  props: {
    english: {
      type: Boolean,
      default: false
    }
  },
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
      if (this.response !== null) {
        return this.response.status
      }
      return null
    },
    showNotification() {
      if (this.responseCode === 200) {
        return true
      }
      return false
    }
  },
  methods: {
    send() {
      axios
        .post(
          'https://vanevo.de/new/vanevo.php',
          querystring.stringify(this.form)
        )
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
    },
    closeNotification() {
      this.response = null
    }
  }
}
</script>

<style lang="scss" scoped>
::placeholder {
  color: black;
}
input:required,
textarea:required {
  box-shadow: none;
}
input:invalid,
textarea:invalid {
  box-shadow: none;
}
</style>
