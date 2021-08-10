import { shallowMount } from '@vue/test-utils'
import SearchBar from '~/components/SearchBar.vue'
const $t = () => { }

describe('SearchBar', () => {
  it('renders a SearchBar', () => {
    const wrapper = shallowMount(SearchBar, {
      mocks: { $t }
    })
    wrapper.vm.$emit('search-pokemon', {
      searchText: 'bulbasaur',
      type: '',
      xp: ''
    })
    expect(wrapper.emitted('search-pokemon')).toBeTruthy()
  })
})
