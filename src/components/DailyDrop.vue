<template>
  <div class="imageSize">
    <img src="@/assets/1.png" class="img-daily" />
    <div class="flex-stats">
      <div class="win-daily">
        <vue3-autocounter
          ref='counter'
          :startAmount='+prevAmount'
          :endAmount='+amount'
          :duration='2'
          :prefix=currency
          separator=','
          decimalSeparator='.'
          :decimals='2'
        />
      </div>
      <div class="dropin-daily">
        Must drop in:
        <i class="fa fa-clock-o"></i>
        {{ state.pots[0].mustDropIn }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import State from '@/interfaces/State'

const store = useStore()
const state: State = store.state

const pot = reactive(state.pots[0])
const { currency, amount, prevAmount } = toRefs(pot)

</script>

<style scoped>
  .dropin-daily {
    color: aliceblue;
    font-size: 1rem;
    background: #052d77;
    border-radius: 1rem;
    margin-top: 1vh;
    margin-bottom: 1vh;
    border-radius: 1rem;
    font-weight: 800;
    width: 20vw;
    min-width: 150px;
    max-width: 300px;

  }
  .img-daily {
    width: 20vw;
    min-width: 150px;
    max-width: 300px;
    background-repeat: round;
    background-size: cover;
  }
  .win-daily {
    font-size: 2.5vh;
    color: #c69f27;
    font-weight: 800;
    background-image: url("@/assets/box.png");
    background-repeat: round;
    background-size: cover;
    line-height: 5vh;
    width: 20vw;
    min-width: 150px;
    max-width: 300px;
  }
</style>
