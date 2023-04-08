<template>
  <div >
    <Card :products="store.search_product" />
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useCounterStore} from "src/stores/index"
import Card from 'src/components/card.vue';
const store = useCounterStore()


</script>

<style lang="css" scoped>
div{
  padding: 20px;
}
</style>
