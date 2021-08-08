
import { Middleware } from '@nuxt/types'

const redirect: Middleware = (context) => {
  return context.redirect('/1')
}

export default redirect
