import { apiHelper } from './../utils/helpers'

export default {
  // input parameters
  signIn({ email, password }) {
    // return a Promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  signUp(data) {
    return apiHelper.post('/signup', {
      ...data
    })
  }
}