<template>
  <div>
    <div >
      <h3 style="font-weight: 450">Erkaklar kiyimlari...</h3>
    </div>
      <card :products="store.category"/>
  </div>
</template>

<script setup>
import card from './card.vue';
import {useCounterStore} from "src/stores/index"
const store = useCounterStore()


</script>

<style lang="css" scoped>

</style>
