import axios from 'axios'
import getPokemon from './getPokemon'

export default async (offset: number = 0, perpage: number = 25, language: string = 'fr', error: any) => {
  const pokemonListUrl = `${process.env.pokemonApi}pokemon?offset=${offset}&limit=${perpage}`
  try {
    const response = await axios.get(pokemonListUrl)
    const pokemonData = await response.data.results
    const promises: any = []
    if (!pokemonData) {
      return error({ statusCode: 404, message: 'No pokemon found!' })
    }
    pokemonData.forEach((element: any) => {
      const urlArray = element.url.split('/')
      const indexLocation = urlArray.length - 2
      const idPokemon = urlArray[indexLocation]
      promises.push(getPokemon(idPokemon, language))
    })
    return await Promise.all(promises)
  } catch (e) {
    console.log(e)
  }
}
