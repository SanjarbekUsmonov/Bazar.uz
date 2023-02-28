<template>
  <div class="q-pa-md q-gutter-md row justify-between">
    <q-card class="my-card" v-for="card in 8" :key="card">
      <q-img style="height: 250px;" src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Cafe Basilico
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="22px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          $・Italian, Cafe
        </div>
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>
      <div>
        <q-btn flat round icon="event" />
       <q-btn flat color="primary">
          Reserve
        </q-btn>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      stars: ref(4)
    }
  }
}
</script>

<style lang="css" scoped>
.my-card{
  width: 100%;
  height: 460px;
  max-width: 250px;
  -webkit-box-shadow: -4px 5px 24px -10px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -4px 5px 24px -10px rgba(34, 60, 80, 0.2);
  box-shadow: -4px 5px 24px -10px rgba(34, 60, 80, 0.2);
}
</style>
