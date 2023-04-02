<template>
  <q-layout view="hHh lpR fFf">


      <q-header reveal  bordered class=" header bg-white text-white">
      <q-toolbar>
        <q-toolbar-title class="row justify-between">
          <div class="black text-h5 text-weight-bold">Bazar uz</div>
          <q-input class="input" v-model="search" outlined type="search" >
          <template v-slot:append>
          <q-icon name="search" />
        </template>
         </q-input>
          <q-btn flat round icon="event" color="black"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>




    <q-page-container>
      <router-view />
    </q-page-container>



    <q-footer  class="bg-grey-8 text-white">

    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import {useCounterStore} from "src/stores/index"
const store = useCounterStore()
store.GETPRODUCTS()

let search = ref('')

</script>
<style scoped>
.header{
  width: 90%;
  margin: 0 auto;
}
.black{
color: black;
}
.input{
  width: 400px;
}

</style>
