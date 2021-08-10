import { shallowMount } from '@vue/test-utils'

import PokemonCard from '~/components/PokemonCard.vue'
const $t = () => { }

describe('PokemonCard', () => {
  it('renders a pokemon', () => {
    const pokemon = {
      id: 25,
      name: 'pikachu',
      generation: 'generation-i',
      xp: 112,
      types: [
        'electric'
      ],
      description: 'Il lui arrive de remettre d’aplomb\n' +
              'un Pikachu allié en lui envoyant\n' +
              'une décharge électrique.',
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      },
      stats: [
        {
          name: 'hp',
          base_stat: 35
        },
        {
          name: 'attack',
          base_stat: 55
        },
        {
          name: 'defense',
          base_stat: 40
        },
        {
          name: 'special attack',
          base_stat: 50
        },
        {
          name: 'special defense',
          base_stat: 50
        },
        {
          name: 'speed',
          base_stat: 90
        }
      ],
      height: 0.4,
      weight: 6,
      abilities: [
        'static',
        'lightning rod'
      ],
      evolvesFrom: {
        name: 'pichu',
        url: '172'
      },
      pokemonTheme: 'electric',
      species: 'Pokémon Souris'
    }

    const wrapper = shallowMount(PokemonCard, {
      propsData: {
        pokemon
      },
      mocks: { $t }
    })
    expect(wrapper.text()).toContain('Pokémon Souris')
  })
})
