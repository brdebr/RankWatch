export const state = () => ({
  drawer: {
    active: true,
    mini: true,
    items: [
      { icon: 'apps', title: 'Dashboard', to: '/' },
      { icon: 'info', title: 'About', to: '/about' }
    ]
  }
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer.active = !state.drawer.active
  },
  setDrawer(state, val) {
    state.drawer.active = val
  },
  toggleMini(state) {
    state.drawer.mini = !state.drawer.mini
  },
  setItems(state, val) {
    state.items = val
  },
  addItem(state, val) {
    state.items.push(val)
  }
}
