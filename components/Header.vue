<template>
  <nav id="header" class="flex items-center justify-between flex-wrap bg-teal shadow-sm border-b-2 bg-red-500 border-yellow-500">
    <div class="flex items-center flex-no-shrink text-white mx-5">
      <img class="logo-pokeball w-10 " src="~/assets/images/pokeball.png">
      <span class="text-logo-pokeball font-semibold  text-2xl p-2.5">{{ title }}</span>
    </div>
    <div class="w-full block flex-grow sm:flex sm:items-center sm:justify-end sm:w-auto">
      <div class="flex items-center justify-end w-full px-5 mt-3">
        <label for="language" class="flex items-center cursor-pointer">
          <div class="relative">
            <input id="language" v-model="checked" type="checkbox" class="sr-only" @change="changeLanguage()">
            <div class="block bg-red-800 w-12 h-6 rounded-full" />
            <div class="dot absolute left-1 top-1 bg-yellow-500 w-5 h-4 rounded-full transition" />
          </div>
          <div class="ml-3 text-white text-sm font-bold uppercase ">
            {{ language }}
          </div>
        </label>
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
  },
  data () {
    return {
      language: 'fr',
      checked: false
    }
  },
  methods: {
    changeLanguage () {
      this.language = this.checked ? 'en' : 'fr'
      this.$i18n.setLocale(this.language)
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

input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #f4e906;
}
</style>
