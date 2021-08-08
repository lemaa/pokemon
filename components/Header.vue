<template>
  <nav id="header" class="flex items-center justify-between flex-wrap bg-teal p-3 shadow-sm border-b-2 bg-red-500 border-yellow-500">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <img class="logo-pokeball w-12" src="~/assets/images/pokeball.png">
      <span class="text-logo-pokeball font-semibold  text-5xl px-2.5">{{ title }}</span>
    </div>
    <div class="block sm:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
    <div class="w-full block flex-grow sm:flex sm:items-center sm:justify-end sm:w-auto">
      <div>
        <a
          v-for="locale in $i18n.locales"
          :key="locale.code"
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent text-white hover:text-teal hover:bg-white mt-4 lg:mt-0"
          @click="$i18n.setLocale(locale.code)"
        >{{ locale.name }}</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss">
nav#header {
  .text-logo-pokeball {
    text-shadow: 0 1px #3667b5, -2px 1px #3667b5, -1px 0 #3667b5, -4px 4px #3667b5;
    color: #f4e906;
  }
}

</style>
