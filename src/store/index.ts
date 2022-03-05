import { createStore } from 'vuex'
import State from '@/interfaces/State'
import axios from 'axios'

export default createStore({
  state: {
    pots: [],
    loading: true
  },
  getters: {},
  mutations: {
    loaded (state: State) {
      state.loading = false
    },
    updatePots (state: State) {
      for (const i in state.pots) {
        if (state.pots[i].amount && state.pots[i].mustDropIn !== '00:00:00') {
          state.pots[i].prevAmount = state.pots[i].amount
          state.pots[i].amount = (
            +state.pots[i].amount +
              (+state.pots[i].amount / 1000)
          ).toFixed(2)
        }
      }
    },
    updateTime (state: State, data) {
      data.seconds -= 1

      const h = Math.floor(data.seconds / 3600)
      const m = Math.floor((data.seconds % 3600) / 60)
      const s = (data.seconds % 3600) % 60

      if (state.pots[data.i].mustDropIn && data.seconds >= 0) {
        state.pots[data.i].mustDropIn =
            (h < 10 ? '0' + h : h) + ':' +
            (m < 10 ? '0' + m : m) + ':' +
            (s < 10 ? '0' + s : s)
      }
    },
    populatePots (state: State, data) {
      state.pots = data
      state.pots.forEach(pot => {
        pot.prevAmount = pot.amount
      })
    }
  },
  actions: {
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
