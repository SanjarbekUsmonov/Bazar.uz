<template>
  <div v-if=" props.product != undefined " >
      <div class="info-text text-h5 text-weight-medium">
      {{ props.product.name }}
    </div>
    <div class="info-data q-mt-md">
        <div>
          <span >Sotuvchi:</span> <span class="q-ml-xl">Nomalum</span>
        </div>
        <div>
          <span>Yetkazib berish:</span> <span>1 kun, bepul</span>
        </div>
    </div>
    <q-separator class="q-mt-md"/>
    <div class="info-amount">
        <div class="q-mt-lg">Miqdor:</div>
        <div class="info-amount-active">

        </div>
        <div class="info-amount-cost q-mt-lg">
          Narx: {{ props.product.prince }} so'm
          <div class="info-amount-cost-active text-h6">
            5 tasi - {{ props.product.prince * 5 }} so'm
          </div>
        </div>
    </div>
    <div class="info-btn q-mt-xl">
      <q-btn color="primary" glossy label="Savatga qo'shish" padding="10px 70px" />
      <q-btn color="white" glossy text-color="black" label="Darhol sotib olish" padding="10px 70px"  class="q-ml-md"/>
    </div>
  </div>
</template>

<script setup>
import {useCounterStore} from "src/stores/index"
const store = useCounterStore()
const props = defineProps({product: Object})


</script>

<style lang="scss" scoped>
.info-amount-active{
  width: 120px;
  height: 40px;
  background: black;
}
</style>
