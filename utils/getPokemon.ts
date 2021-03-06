
import axios from 'axios'
export default async (idPokemon: number, language:string = 'fr') => {
  const pokemonURL = `${process.env.pokemonApi}pokemon/${idPokemon}/`
  const pokemonSpeciesURL = `${process.env.pokemonApi}pokemon-species/${idPokemon}/`

  try {
    const pokemonGeneral = await axios.get(pokemonURL)
    let pokemonSpecies
    const {
      id,
      name,
      types,
      sprites,
      stats,
      abilities,
      height,
      weight,
      // eslint-disable-next-line camelcase
      base_experience
    } = pokemonGeneral.data
    const pokemonTheme = types[0].type.name
    const formattedAbilities = abilities.map((ability: any) => ability.ability.name.split('-').join(' '))
    const formattedStats = stats.map((stat: any) => {
      return {
        name: stat.stat.name.split('-').join(' '),
        baseStat: stat.base_stat
      }
    })

    let evolvesFrom
    let species = 'unknown Pokémon'
    let flavorTextEntries = ''
    let generation = ''

    if (idPokemon <= 10000) {
      pokemonSpecies = await axios.get(pokemonSpeciesURL)

      flavorTextEntries = pokemonSpecies && pokemonSpecies.data.flavor_text_entries
      const evolvesFromSpecies = pokemonSpecies && pokemonSpecies.data.evolves_from_species
      const genera = pokemonSpecies && pokemonSpecies.data.genera
      generation = pokemonSpecies && pokemonSpecies.data.generation.name

      if (evolvesFromSpecies) {
        evolvesFrom = {
          name: evolvesFromSpecies.name,
          url: evolvesFromSpecies.url.split('/')[
            evolvesFromSpecies.url.split('/').length - 2
          ]
        }
      } else {
        evolvesFrom = undefined
      }

      species = genera.filter((g: any) => g.language.name === language)[0].genus
    }
    return {
      id,
      name,
      generation,
      xp: base_experience,
      types: types.map((e: any) => e.type.name),
      description: getFlavorText(flavorTextEntries, language),
      sprites: sprites.front_default,
      stats: formattedStats,
      height: height / 10,
      weight: weight / 10,
      abilities: formattedAbilities,
      evolvesFrom,
      pokemonTheme,
      species
    }
  } catch (e) {
    if (e.response) {
      return e.response.status
    } else if (e.request) {
      return e.request
    } else {
      return e.message
    }
  }
}

function getFlavorText (flavors: any, language: string = 'fr') {
  if (flavors === '') {
    return 'no description found for this pokemon'
  }
  let Description = []
  Description = flavors
    .filter((flavor: any) => flavor.language.name === language)
    .map((item: any) => item.flavor_text)

  const index = Math.floor(Math.random() * Description.length)
  return Description[index]
}
