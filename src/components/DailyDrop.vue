<template>
  <div class="daily-wrap">
    <img src="@/assets/1.png" class="img-daily" />
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
      <span>Must drop in:</span>
      <i class="fa fa-clock-o"></i>
      <span>{{ state.pots[0].mustDropIn }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import State from '@/interfaces/State'

const store = useStore()
const state: State = store.state

// TODO can we count on imageType or index the pots directly
const potIndex = state.pots.findIndex(p => p.imageType === 'daily_drop')
const pot = reactive(state.pots[potIndex])
const { currency, amount, prevAmount } = toRefs(pot)

</script>

<style scoped>
  .daily-wrap {
    text-align: center;
  }
  .dropin-daily {
    color: aliceblue;
    margin: auto;
    margin-top: 0.8rem;
    width: 70%;
    text-align: center;
    font-size: calc(6px + 0.25vw);
    font-weight: 700;
    border-radius: 1rem;
    line-height: 2;
    background: #292d42;
  }
  .img-daily {
    width: 100%;
    min-width: 150px;
    max-width: 300px;
    background-repeat: round;
    background-size: cover;
  }
  .win-daily {
    font-size: calc(14px + 1vw);
    color: #c69f27;
    font-weight: 800;
    background-image: url("@/assets/box.png");
    background-repeat: round;
    background-size: cover;
    line-height: 1.8;
    width: 100%;
  }
</style>
