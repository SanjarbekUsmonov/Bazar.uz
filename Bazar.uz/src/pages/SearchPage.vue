<template>
  <div>
    <Card />
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useCounterStore} from "src/stores/index"
import Card from 'src/components/card.vue';
const store = useCounterStore()



</script>

<style lang="css" scoped>

</style>
