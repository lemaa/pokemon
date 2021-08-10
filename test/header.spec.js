import { shallowMount } from '@vue/test-utils'

import Header from '~/components/Header.vue'

describe('Header', () => {
  it('renders a title', () => {
    const title = 'Pokemon'

    const wrapper = shallowMount(Header, {
      propsData: {
        title
      }
    })
    expect(wrapper.find('.text-logo-pokeball').text()).toBe(title)
  })
})
