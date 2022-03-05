<template>
  <BlockingError v-if="state.loading" msg="Error Loading" />
  <Main v-else />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import BlockingError from './components/BlockingError.vue'
import Main from './views/Main.vue'
import State from '@/interfaces/State'

const store = useStore()
const state: State = store.state

onMounted(() => {
  store.dispatch('getPots')

  setInterval(function () {
    for (const i in state.pots) {
      if (state.pots[i].mustDropIn) {
        const sec = state.pots[i].mustDropIn.split(':').map(Number)
        const data = {
          i: i,
          seconds: sec[0] * 3600 + sec[1] * 60 + sec[2]
        }
        store.commit('updateTime', data)
      }
    }
  }, 1000)

  setInterval(function () {
    store.commit('updatePots', state)
  }, 5000)
})

</script>

<style>
  body {
    background: #08091f;
  }
  .generalWidth {
    margin: auto;
    background-image: url("@/assets/bg.png");
    height: 100vh;
    min-height: 320px;
    width: 20vw;
    min-width: 150px;
    max-width: 300px;
  }
  .imageSize {
    width: 20vw;
    min-width: 150px;
  }
  .flex-stats {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .win-amount {
    font-size: xx-large;
    color: #c69f27;
    font-weight: 800;
  }
</style>
