<template>
  <div class="super-wrap">
    <img src="@/assets/2.png" class="super-img" />
    <div class="super-stats">
      <div class="super-amount">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import State from '@/interfaces/State'

const state: State = useStore().state

const pot = reactive(state.pots[1])
const { currency, amount, prevAmount } = toRefs(pot)
</script>

<style scoped>
  .super-wrap {
    background-image: url("@/assets/stars.png");
    background-repeat: round;
    background-size: auto;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 15% 0 15% 0;
  }
  .super-img {
    width: 40%;
    background-repeat: round;
    background-size: cover;
    margin: auto
  }
  .super-amount {
    width: 100%;
    font-size: x-large;
    color: #c69f27;
    font-weight: 800;
  }
  .super-stats {
    width: 50%;
    margin: auto;
  }
</style>
