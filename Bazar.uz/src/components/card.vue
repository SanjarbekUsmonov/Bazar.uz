<template>
    <div class="q-gutter-md row justify-between">
      <router-link :to="'/p/'+ card.id" class="my-card" v-for="card in props.products" :key="card">
        <q-img
          style="height: 250px"
          :src="card.img"
        />

       <div class="q-pa-md">
        <div>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">{{ card.name }}</div>
          </div>

          <q-rating v-model="stars" :max="5" size="22px"/>
        </div>

        <div class="q-pt-none">
          <div  class="q-mt-md" style="font-weight: 600;">{{ card.prince }}</div>
          <div class="text-caption text-grey">
           {{ card.info }}
          </div>
        </div>
        <div>
          <q-btn flat round icon="event" />
          <!-- <q-btn
            size=12px
            color="blue-grey-1"
            no-caps
            text-color="black"
            rounded
            glossy
            label="Sotib olish"
          /> -->
        </div>
       </div>
      </router-link>
    </div>
</template>

<script setup>
import { ref } from "vue"
import {useCounterStore} from "src/stores/index"
const store = useCounterStore()
const stars = ref(4)
const props = defineProps({products: Array,})

</script>

<style lang="css" scoped>
.my-card {
  width: 100%;
  height: 423px;
  cursor: pointer;
  max-width: 250px;
  background: rgb(255, 255, 255);
}
.my-card:hover{
  -webkit-box-shadow: -4px 5px 40px -10px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -4px 5px 40px -10px rgba(34, 60, 80, 0.2);
  box-shadow: -4px 5px 40px -10px rgba(34, 60, 80, 0.2);
}
a{
  text-decoration: none;
  color: black;
}
</style>
