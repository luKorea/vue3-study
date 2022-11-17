<template>
  <div>
    <h1>{{ info }}</h1>
    <div>pinia学习使用</div>
    <div>{{ counterStore.count }}</div>
    <button @click="changeState">修改state</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useCounter from "./stores/counter";

const info = ref("list");

const counterStore = useCounter();
function changeState() {
  counterStore.count++
}
</script>

<style scoped>
</style>