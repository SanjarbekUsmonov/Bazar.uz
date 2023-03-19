<template>
  <q-layout view="hHh lpR fFf">


      <q-header reveal  bordered class=" header bg-indigo-6 text-white">
      <q-toolbar>
        <q-toolbar-title>
          Bazar uz
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

<script>

</script>
<style scoped>
.header{
  width: 90%;
  margin: 0 auto;
}

</style>
