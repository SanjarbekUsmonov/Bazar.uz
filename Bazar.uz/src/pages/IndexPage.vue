<template>
  <div>
      <section>
          <div class="container">
              <carusel/>
          </div>
      </section>
  </div>
</template>

<script>
import carusel from '../components/carusel.vue'
  export default {
  components: { carusel },
    name:"IndexPage",
    data() {
      return {

      }
    },
  }
</script>

<style lang="css" scoped>
.container{
  width: 90%;
  height: 200vh;
  background: rgb(207, 205, 205);
  margin: 0 auto;
}
</style>
