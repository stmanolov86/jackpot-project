<template>
  <h1>{{ props.msg }}</h1>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
h1 {
  color: black;
  padding: 20px;
  text-align: center;
}
</style>
