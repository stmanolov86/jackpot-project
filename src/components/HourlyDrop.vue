<template>
  <div class="hourly-wrap">
    <img src="@/assets/3.png" class="hourly-img" />
    <div class="hourly-stats">
      <div class="hourly-amount">
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
      <div class="hourly-drop">
        Must drop in:
        <i class="fa fa-clock-o"></i>
        {{ state.pots[2].mustDropIn }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import State from '@/interfaces/State'

const store = useStore()
const state: State = store.state

const pot = reactive(state.pots[2])
const { currency, amount, prevAmount } = toRefs(pot)

</script>

<style scoped>
  .hourly-wrap {
    background-image: url("@/assets/stars.png");
    background-repeat: round;
    background-size: auto;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .hourly-stats {
    width: 50%;
    margin: auto;
  }
  .hourly-img {
    width: 40%;
    background-repeat: round;
    background-size: cover;
    margin: auto
  }
  .hourly-amount {
    width: 100%;
    font-size: 3vw;
    color: #c69f27;
    font-weight: 800;
  }
  .hourly-drop {
    color: aliceblue;
    width: 100%;
    font-size: 0.5vw;
  }

  /* @media (min-width: 300px) {
    .hourly-drop {
      font-size: 26px;
    }
  }
  @media (min-width: 250px) {
    .hourly-drop {
      font-size: 20px;
    }
  }
  @media (min-width: 180px) {
    .hourly-drop {
      font-size: 15px;
    }
  } */

</style>
