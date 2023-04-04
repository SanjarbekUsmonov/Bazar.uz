<template>
  <div class="section row  row  justify-center items-center content-center">
      <div class="container q-pt-md row justify-between">
          <div class="carusel">
            <info-carusel :product = "product"/>
          </div>
          <div class="info">
            <info-text :product = "product" />
          </div>
      </div>
  </div>
</template>

<script setup>
import infoCarusel from '../components/infoCarusel'
import infoText from '../components/infoText'
import {useRoute} from 'vue-router'
import {useCounterStore} from "src/stores/index"
import { ref } from 'vue'
import axios from 'axios'
const store = useCounterStore()
let id = ref()
id.value = useRoute().params.id
// console.log(store.products);
let product = ref(undefined)


let get_Api_Product = async()=>{
  let apiproduct = await axios.get("http://bazarcom.pythonanywhere.com/products/"+id.value+"/")
  product.value = apiproduct.data
}
get_Api_Product()

</script>

<style lang="css" scoped>
.container{
  width: 90%;
  height: auto;
  margin: 0 auto;
}
.carusel{
  width: 45%;
  height: 410px;
  /* background: red; */
}
.info{
  width: 50%;
  height: 410px;
  /* background: yellow; */
}
.section{
  height: 91vh;
}
</style>
