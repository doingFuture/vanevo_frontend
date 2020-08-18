<template>
  <div class="p-4 md:w-1/3">
    <div class="h-full overflow-hidden">
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        src="https://dummyimage.com/720x400"
        alt="blog"
      />
      <div class="p-6 bg-white">
        <h3 class="title-font text-lg font-medium text-gray-900 mb-3 inline-block">
          The Catalyzer
        </h3>
        <p class="leading-relaxed mb-3">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeaserItem'
}
</script>

<style lang="scss" scoped>
h3 {
  position: relative;
}

h3:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 3px solid rgb(43, 108, 176);
}
</style>
