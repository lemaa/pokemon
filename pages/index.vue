
<template>
  <div class="">
    <SearchBar @search-pokemon="searchPokemon" />
    <div id="pokemonCards" class="mt-4">
      <div v-if="is_search">
        <div v-if="pokemonFiltredList.length >0" class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7">
          <PokemonCard v-for="pokemon in pokemonFiltredList" :key="pokemon.id" :pokemon="pokemon" />
        </div>
        <div v-else class="relative h-32">
          <div class="absolute inset-0 flex items-center justify-center">
            <img class="logo-pokeball w-10 mr-5 " src="~/assets/images/anxiety.png"> {{ $t('pokemon.pokemonNotFound') }}
          </div>
        </div>
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7">
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
import Pokemon from '~/types/pokemon'
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
      pokemonList: [] as Array<Pokemon>,
      pokemonFullList: [] as Array<Pokemon>,
      pokemonFiltredList: [] as Array<Pokemon> | undefined,
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
    searchPokemon (e: {searchText: string, type: string, xp: string}) {
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
