export const state = () => ({
  drawer: {
    active: true,
    mini: true,
    items: [
      { title: 'Dashboard', icon: 'apps', to: '/' },
      { title: 'Profile', private: true ,icon: 'account_box', to: '/profile' },
      { title: 'Matches', private: true ,icon: 'list', to: '/matches' },
      // { title: 'Seasons', icon: 'event_note', to: '/seasons' },
      { title: 'Maps', icon: 'map', to: '/maps' },
      { title: 'Heroes', icon: 'whatshot', to: '/heroes' },
      { title: 'About', icon: 'info', to: '/about' },
      { title: 'Admin', private: true ,icon: 'build', to: '/admin/uploads' }
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
