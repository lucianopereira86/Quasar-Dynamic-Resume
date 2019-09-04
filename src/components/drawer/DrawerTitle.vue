<template>
  <q-toolbar
    :style="{ backgroundColor: CONFIG.labels.drawer.titleBgColor, color: CONFIG.labels.drawer.titleTextColor }"
  >
    <div class="row full-width items-center">
      <div class="col-1 text-center" :style="{ width: widthCol1 }">
        <q-icon :name="icon" size="25px" />
      </div>
      <div class="col-10" :style="{ width: widthCol2 }">
        <span class="text-h5">{{text}}</span>
      </div>
      <div class="col-1">
        <q-btn round flat class="float-right" icon="close" color="white" v-close-popup></q-btn>
      </div>
    </div>
  </q-toolbar>
</template>

<script>
export default {
  props: {
    icon: String,
    text: String,
    CONFIG: Object,
    widthCol1: String,
    widthCol2: String
  }
}
</script>

<style>
</style>
