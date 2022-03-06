<template>
  <PageLoading v-if="state.loading" errorMsg="LOADING" />
  <Main v-else />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import PageLoading from './components/PageLoading.vue'
import Main from './views/Main.vue'
import State from '@/interfaces/State'

const store = useStore()
const state: State = store.state

onMounted(() => {
  store.dispatch('getPots')

  const timeUpdate = () => {
    for (const i in state.pots) {
      if (state.pots[i].must_drop_in) {
        const sec = state.pots[i].must_drop_in.split(':').map(Number)
        const data = {
          i: i,
          seconds: sec[0] * 3600 + sec[1] * 60 + sec[2]
        }
        store.commit('updateTime', data)
      }
    }
  }

  setInterval(function () {
    timeUpdate()
  }, 1000)

  setInterval(function () {
    store.commit('updatePots', state)
  }, 5000)
})

</script>

<style lang="stylus">
  body
    background: #08091f;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

</style>
