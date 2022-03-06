<template>
  <div class="loader">
    <div class="loading-indicator">
      <div class="circle"></div>
      <div class="rectangle"></div>
      <span class="text">{{ props.errorMsg }}...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  errorMsg: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="stylus">

  .loader
    z-index 1000
    height 100%
    width 100%
    opacity 0.9
    background rgb(0, 0, 0)
    top 0
    left 0
    right 0
    bottom 0
    position fixed

  .loading-indicator
    position absolute
    margin 0 auto
    top 45%
    left 45%

  .circle
    border 3px solid #3bc9db
    width 200px
    height 200px
    border-radius 100px

  .rectangle
    opacity 0.9
    background rgb(0, 0, 0)
    width 230px
    height 140px
    position relative
    top -172px
    animation spin 2s cubic-bezier(0.26, 1.36, 0.74,-0.29) infinite
    -webkit-animation spin 2s cubic-bezier(0.26, 1.36, 0.74,-0.29) infinite

  .text
    color white
    font-family Arial
    font-size 20px
    position relative
    top -255px
    left 50px
    text-align center
    width 100%
    margin 0 auto

  @-webkit-keyframes spin
    0% {
      transform rotateZ(0deg)
    }

    100% {
      transform rotateZ(360deg)
      transform rotateZ(360deg)
    }

  keyframes spin
    0% {
      transform rotateZ(0deg)
    }

</style>
