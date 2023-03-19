<template>
  <div>
      <div class="container q-pt-md row justify-between bg-grey">
          <div class="carusel">
            <info-carusel/>
          </div>
          <div class="info">
            <info-text/>
          </div>
      </div>
  </div>
</template>

<script>
import infoCarusel from '../components/infoCarusel'
import infoText from '../components/infoText'
  export default {
  components: { infoCarusel,infoText },
      data() {
        return {

        }
      },
  }
</script>

<style lang="css" scoped>
.container{
  width: 90%;
  height: 100vh;
  margin: 0 auto;
}
.carusel{
  width: 45%;
  height: 500px;
  background: red;
}
.info{
  width: 50%;
  height: 500px;
  background: yellow;
}
</style>
