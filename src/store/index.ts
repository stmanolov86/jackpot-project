import { createStore } from 'vuex'
import State, { Pots } from '@/interfaces/State'
import axios from 'axios'

export default createStore({
  state: {
    pots: [],
    loading: true
  },
  getters: {
    getPotIndex: (state: State) => (indx: string) => {
      // TODO can we count on imageType or index the pots directly
      const potIndex = state.pots.findIndex(pot => pot.imageType === indx)

      return potIndex
    }
  },
  mutations: {
    loaded (state: State) {
      state.loading = false
    },
    updatePots (state: State) {
      for (const i in state.pots) {
        if (state.pots[i].amount && state.pots[i].must_drop_in !== '00:00:00') {
          state.pots[i].prevAmount = state.pots[i].amount

          state.pots[i].amount = (
            +state.pots[i].amount +
              (+state.pots[i].amount / 1000)
          ).toFixed(2)
        }
      }
      // TODO update localStore on every pot update for the time being
      localStorage.setItem('pots', JSON.stringify(state.pots))
    },
    updateTime (state: State, data) {
      data.seconds -= 1

      const h = Math.floor(data.seconds / 3600)
      const m = Math.floor((data.seconds % 3600) / 60)
      const s = (data.seconds % 3600) % 60

      if (state.pots[data.i].must_drop_in && data.seconds >= 0) {
        // TODO what happens when the counter reaches 0?
        state.pots[data.i].must_drop_in =
            (h < 10 ? '0' + h : h) + ':' +
            (m < 10 ? '0' + m : m) + ':' +
            (s < 10 ? '0' + s : s)
      }
    },
    populatePots (state: State, data: Pots) {
      // eperiment with localStorage for page refresh as there is no back-end yet
      const ptsData = JSON.parse(localStorage.getItem('pots') || JSON.stringify(data))
      state.pots = ptsData

      state.pots.forEach(pot => {
        // create local previous amount value, so autocounter would pick up on it
        pot.prevAmount = pot.amount
      })
    }
  },
  actions: {
    // get initial data from and populate the state
    async getPots ({ state, commit }) {
      await axios.get('data.json')
        .then(res => {
          commit('populatePots', res.data.pots)
        })

      commit('loaded', state)
    }
  },
  modules: {}
})
