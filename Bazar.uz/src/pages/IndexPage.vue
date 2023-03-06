<template>
  <div>
    <section>
      <div class="container bg-grey-2">
        <carusel />
        <div>
          <card />
        </div>
        <div class="clothes q-pa-md">
          <q-img style="cursor: pointer;"
            src="https://images.uzum.uz/cetufm0l08k0o9qhg7d0/main_page_banner.jpg"
          />
        </div>
        <div>
          <smartphones />
        </div>
        <div class="clothes q-pa-md" >
          <q-img style="cursor: pointer;"
            src="https://images.uzum.uz/cetug62vtie1lhbghhn0/main_page_banner.jpg"
          />
        </div>
        <div>
          <womens />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "../components/card";
import carusel from "../components/carusel";
import Smartphones from "../components/smartphones";
import Womens from "../components/womens";
export default {
  components: { carusel, Card, Smartphones, Womens },
  name: "IndexPage",
};
</script>

<style lang="css" scoped>
.container {
  width: 90%;
  height: auto;
  /* background: rgb(207, 205, 205); */
  margin: 0 auto;
}
</style>
