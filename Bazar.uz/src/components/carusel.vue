<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        v-for="slide,index in store.category"
        :key="index"
        :name="index + 1"
        :img-src='slide.img'/>

    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from 'src/stores/index'
const store = useCounterStore()

let slide = ref(1)
let autoplay = ref(true)


</script>
<style>

</style>
