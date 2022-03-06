<template>
  <div class="general-width">
    <DropDaily />
    <DropSuper />
    <DropHourly />
  </div>
</template>

<script setup lang="ts">
import DropDaily from '@/components/DropDaily.vue'
import DropSuper from '@/components/DropSuper.vue'
import DropHourly from '@/components/DropHourly.vue'
</script>

<style scoped lang="stylus">

  .general-width
    margin auto
    background-image url("@/assets/bg.png")
    height 100vh
    min-height 300px
    width 20vw
    min-width 150px
    max-width 300px

</style>
