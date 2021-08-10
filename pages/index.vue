
<template>
  <div class="">
    <SearchBar @search-pokemon="searchPokemon" />
    <div id="pokemonCards" class="mt-4">
      <div v-if="is_search" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <PokemonCard v-for="pokemon in pokemonFiltredList" :key="pokemon.id" :pokemon="pokemon" />
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <PokemonCard v-for="pokemon in pokemonList" :key="pokemon.id" :pokemon="pokemon" />
      </div>
      <div v-if="pokemonList.length > 0 && pokemonList.length < maxPokemon && !is_search" class="text-center mb-3">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent py-2 px-4 rounded inline-flex items-center" @click="fetchMorePokemon()">
          <img v-if="loading" class=" animate-spin logo-pokeball w-5 mr-3" src="~/assets/images/pokeball.png">
          <span>{{ $t('pagination.loadMore') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBar from '~/components/SearchBar.vue'
import PokemonCard from '~/components/PokemonCard.vue'
import getPokemonList from '~/utils/getPokemonList'
import filterList from '~/utils/filterList'
export default Vue.extend({
  components: {
    SearchBar,
    PokemonCard
  },
  async asyncData (context) {
    const pokemonList = await getPokemonList(0, 25, context.app.i18n.locale, context.error)
    const pokemonFullList = await getPokemonList(0, 500, context.app.i18n.locale, context.error)

    return { pokemonList, pokemonFullList }
  },
  data () {
    return {
      pokemonList: [] as Array<any>,
      pokemonFullList: [] as Array<any>,
      pokemonFiltredList: [] as Array<any>,
      maxPokemon: 800,
      is_search: false,
      loading: false
    }
  },
  methods: {
    async fetchMorePokemon () {
      this.loading = true
      const morePokemons = await getPokemonList(this.pokemonList.length, 25, this.$i18n.locale, this.$nuxt.error)
      this.pokemonList = [...this.pokemonList, ...morePokemons]
      this.loading = false
    },
    searchPokemon (e: any) {
      if (e.searchText === '' && e.type === '' && e.xp === '') {
        this.is_search = false
        return
      }
      this.is_search = true
      this.pokemonFiltredList = filterList(this.pokemonFullList, e)
    }
  }

})
</script>
