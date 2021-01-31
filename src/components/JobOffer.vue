<template>
  <a
    href="./vacancies/Stellenausschreibung_Wirtschaftsingenieur_VANEVO.pdf"
    target="_blank"
    class="flex flex-row justify-between items-center bg-white mx-5 p-6 px-16 lg:w-full focus:border-none focus:outline-none text-xl hover:shadow-2xl"
  >
    <span>{{ jobName }}</span>
    <svg
      width="50px"
      height="60px"
      viewBox="0 0 75 66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>Group</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Artboard-Copy-4"
          transform="translate(-2534.000000, -14070.000000)"
        >
          <g id="Group" transform="translate(2534.000000, 14070.000000)">
            <polygon
              id="Rectangle"
              fill="#143988"
              transform="translate(41.826923, 33.000000) rotate(-45.000000) translate(-41.826923, -33.000000) "
              points="18.75 9.92307692 64.7834448 10.0434783 64.9038462 56.0769231 18.8704013 55.9565217"
            ></polygon>
            <polygon
              id="Rectangle-Copy-5"
              fill="#FFFFFF"
              transform="translate(33.173077, 33.000000) rotate(-45.000000) translate(-33.173077, -33.000000) "
              points="10.0961538 9.92307692 56.1295987 10.0434783 56.25 56.0769231 10.2165552 55.9565217"
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  </a>
</template>

<script>
export default {
  name: 'JobOffer',
  props: {
    jobName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
