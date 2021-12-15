export const state = () => ({
  USER_AGENT: 1
})
export const mutations = {
  SET_DEVICE_TYPE (state, type) {
    state.USER_AGENT = type
  }
}
