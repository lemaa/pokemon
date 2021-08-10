<template>
  <div class=" inset-x-auto w-full z-10">
    <div class="  mx-auto shadow-md rounded-md p-5 bg-white">
      <div class="flex gap-2 flex-col md:flex-row center">
        <div class="relative flex-1">
          <input
            id="searchText"
            v-model="searchText"
            value=""
            name="searchText"
            type="text"
            class="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3"
            :placeholder="$t('searchBar.textSearchPlaceHolder')"
          >
          <label for="searchText" class="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">{{ $t('searchBar.textSearchLabel') }}</label>
        </div>
        <div class="relative flex-1">
          <select
            id="type"
            v-model="type"
            class="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-1"
            name="type"
          >
            <option value="" />
            <option v-for="item in types" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
          <label for="type" class="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">{{ $t('searchBar.typeLabel') }}</label>
        </div>
        <div class="relative flex-1">
          <select
            id="xp"
            v-model="xp"
            class="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-1"
            name="xp"
          >
            <option value="" />
            <option value="high">
              High XP
            </option>
            <option value="medium">
              Medium XP
            </option>
            <option value="low">
              Low XP
            </option>
          </select>
          <label for="xp" class="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">XP</label>
        </div>
        <div class="relative flex">
          <button
            class="bg-red-500 border-yellow-500  hover:bg-red-700 text-white font-extrabold text-lg rounded-full px-10 py-1"
            @click="searchPokemon"
          >
            {{ $t('searchBar.search') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      types: ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'],
      searchText: '',
      type: '',
      xp: ''
    }
  },
  methods: {
    searchPokemon () {
      this.$emit('search-pokemon',
        {
          searchText: this.searchText,
          type: this.type,
          xp: this.xp
        })
    }
  }

})
</script>
