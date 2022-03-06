<template>
  <div class="hourly-wrap">
    <img src="@/assets/3.png" class="hourly-img" />
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
      <div class="hourly-drop">
        <span>Must drop in:</span>
        <i class="fa fa-clock-o"></i>
        <span>{{ state.pots[2].must_drop_in }}</span>
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
const getters = store.getters

const indx = getters.getPotIndex('hourly_drop')
const pot = reactive(state.pots[indx])
const { currency, amount, prevAmount } = toRefs(pot)
</script>

<style scoped lang="stylus">

  .hourly-wrap
    background-image url("@/assets/stars.png")
    background-size cover
    display flex
    justify-content space-around
    width 100%

  .hourly-img
    width 40%
    background-repeat round
    background-size cover
    margin auto

  .hourly-amount
    margin auto
    width 100%
    text-align center
    font-size clamp(1rem, 2.5vw, 2rem)
    text-shadow 1px 1px 0px black
    color #c69f27
    font-weight 700

  .hourly-drop
    color aliceblue
    margin auto
    width 100%
    text-align center
    font-size clamp(0.5rem, 0.8vw, 0.8rem)
    font-weight normal
    border-radius 1rem
    line-height 2
    background #292d42

</style>
