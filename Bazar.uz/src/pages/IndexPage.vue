<template>
  <div>
    <section>
      <div class="container">
        <carusel />
        <div class="card">
          <card />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "../components/card.vue";
import carusel from "../components/carusel.vue";
export default {
  components: { carusel, Card },
  name: "IndexPage",
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.container {
  width: 90%;
  height: 200vh;
  /* background: rgb(207, 205, 205); */
  margin: 0 auto;
}
</style>
