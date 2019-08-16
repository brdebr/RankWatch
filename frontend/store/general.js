export const state = () => ({
  layout: {
    drawer: true,
    drawerMini: true,
    drawerItems: [
      { title: 'Dashboard', private: false, icon: 'mdi-apps', to: '/' },
      {
        title: 'Profile',
        private: true,
        icon: 'mdi-account-box',
        to: '/profile'
      },
      {
        title: 'Matches',
        private: true,
        icon: 'mdi-calendar-text',
        to: '/matches'
      },
      { title: 'Maps', private: false, icon: 'mdi-map', to: '/maps' },
      { title: 'Heroes', private: false, icon: 'mdi-fire', to: '/heroes' },
      {
        title: 'About',
        private: false,
        icon: 'mdi-information-outline',
        to: '/about'
      },
      {
        title: 'Admin',
        private: true,
        icon: 'mdi-settings',
        to: '/admin/uploads'
      }
    ]
  }
})

export const getters = {
  filterDrawerPrivate(state) {
    return state.layout.drawerItems.filter((el) => true)
  }
}

export const mutations = {
  toggleDrawer(state) {
    state.layout.drawer = !state.layout.drawer
  },
  toggleDrawerMini(state) {
    state.layout.drawerMini = !state.layout.drawerMini
  },
  setDrawer(state, val) {
    state.layout.drawer = val
  },
  setDrawerItems(state, val) {
    state.layout.drawerItems = val
  },
  addDrawerItem(state, val) {
    state.layout.drawerItems.push(val)
  }
}
