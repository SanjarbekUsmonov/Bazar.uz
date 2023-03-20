<template>
  <div>
    <div class="info-text text-h5 text-weight-medium">
      Palov qozoni Kukmara shisha va shisha bo'lmagan qopqoqli, granit Ultra (moviy) liniyasi
    </div>
    <div class="info-data q-mt-md">
        <div>
          <span >Sotuvchi:</span> <span class="q-ml-xl">kukmara</span>
        </div>
        <div>
          <span>Yetkazib berish:</span> <span>1 kun, bepul</span>
        </div>
    </div>
    <q-separator class="q-mt-md"/>
    <div class="info-amount">
        <div class="q-mt-lg">Miqdor:</div>
        <div class="info-amount-active">
           <!-- bu yerga incremen va decrament -->
        </div>
        <div class="info-amount-cost q-mt-lg">
          Narx:
          <div class="info-amount-cost-active text-h6">
            dan 510 000 so'm
          </div>
        </div>
    </div>
    <div class="info-btn q-mt-xl">
      <q-btn color="primary" glossy label="Savatga qo'shish" padding="10px 70px" />
      <q-btn color="white" glossy text-color="black" label="Darhol sotib olish" padding="10px 70px"  class="q-ml-md"/>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.info-amount-active{
  width: 120px;
  height: 40px;
  background: black;
}
</style>
