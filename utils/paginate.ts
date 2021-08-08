import axios from 'axios'

export default async (params: any, perpage: number = 25, error: any) => {
  const pokemonList = await axios.get(`${process.env.pokemonApi}pokemon?&limit=${perpage}`)
  const totalPokemons = await pokemonList.data.count

  const currentPage = parseInt(params.page)
  const lastPage = Math.ceil(totalPokemons / perpage)
  const lastPageCount = totalPokemons % perpage

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0
    }
    if (currentPage === lastPage) {
      return totalPokemons - lastPageCount
    }
    return (currentPage - 1) * perpage
  }
  let paginatedPokemons
  if (currentPage === 1) {
    paginatedPokemons = pokemonList
  } else {
    paginatedPokemons = await axios.get(`${process.env.pokemonApi}pokemon?offset=${skipNumber()}&limit=${perpage}`)
  }

  if (currentPage === 0 || !paginatedPokemons) {
    return error({ statusCode: 404, message: 'No pokemon found!' })
  }

  return {
    paginatedPokemons,
    currentPage,
    nextPage: currentPage + 1,
    total: totalPokemons,
    prevPage: currentPage - 1
  }
}
