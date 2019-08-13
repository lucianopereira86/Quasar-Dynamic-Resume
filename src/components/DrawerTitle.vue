<template>
  <q-toolbar :style="{ backgroundColor: LANG.labels.drawer.titleBgColor }" :class="[LANG.labels.drawer.titleTextColor]">
    <div class="row full-width items-center">
      <div class="col-1 text-center">
        <q-icon :name="icon" size="25px" />
      </div>
      <div class="col-10">
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
    LANG: Object
  }
}
</script>

<style>
</style>
