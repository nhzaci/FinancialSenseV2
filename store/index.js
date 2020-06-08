export const state = () => ({
  loggedIn: false
})

export const mutations = {
  setLoggedIn(state, bool) {
    state.loggedIn = bool
  }
}
