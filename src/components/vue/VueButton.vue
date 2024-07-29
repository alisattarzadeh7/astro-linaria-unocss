<script setup lang="ts">
import {ref} from "vue";

const counter = ref(0)


</script>

<template>
  <button @click="counter = counter + 1" class="bg-green">I'm a vue button with counter {{counter}}</button>
</template>

<style scoped>

</style>