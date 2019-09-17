<template>
  <q-toolbar
    :style="{ backgroundColor: CONFIG.general.window.titleBgColor, color: CONFIG.general.window.titleTextColor }"
  >
    <div class="row full-width items-center">
      <div class="col-1 text-center">
        <q-icon name="fas fa-cog" size="25px" />
      </div>
      <div class="col-10">
        <span class="text-h5">{{title}}</span>
      </div>
      <div class="col-1">
        <q-btn round flat class="float-right" icon="close" color="white" v-close-popup></q-btn>
      </div>
    </div>
  </q-toolbar>
</template>

<script>
export default {
  name: 'ConfigTitle',
  props: {
    title: String,
    CONFIG: Object
  }
}
</script>

<style>
</style>
