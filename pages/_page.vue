
<template>
  <div class="">
    <SearchBar />
    <div id="pokemonCards" class="container mt-4 mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <PokemonCard v-for="pokemon in pokemonDetails" :key="pokemon.id" :pokemon="pokemon" />
      </div>
      <Pagination
        :total-pages="totalPages"
        :current-page="currentPage"
        :next-page="nextPage"
        :prev-page="prevPage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Pagination from '~/components/Pagination.vue'
import paginate from '~/utils/paginate'
import getPokemon from '~/utils/getPokemon'
export default Vue.extend({
  components: { Pagination },
  async asyncData (context) {
    const content = await paginate(context.params, 25, context.error)
    const pokemonList = content.paginatedPokemons.data.results
    const currentPage = content.currentPage || 1
    const promises: any = []
    pokemonList.forEach((element: any) => {
      const urlArray = element.url.split('/')
      const indexLocation = urlArray.length - 2
      const idPokemon = urlArray[indexLocation]
      promises.push(getPokemon(idPokemon, context.app.i18n.locale))
    })
    const results = await Promise.all(promises)
    return {
      pokemonDetails: results,
      totalPages: Math.ceil(content.total / 25),
      currentPage,
      nextPage: currentPage < content.total ? currentPage + 1 : content.total,
      prevPage: currentPage > 1 ? currentPage - 1 : 1
    }
  }
})
</script>
