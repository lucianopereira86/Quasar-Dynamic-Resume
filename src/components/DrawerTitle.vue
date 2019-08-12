<template>
  <q-toolbar :class="[LANG.home.titleBgColor, LANG.home.titleTextColor]">
    <q-item>
      <q-item-section avatar>
        <q-icon :name="icon"/>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-h5">{{text}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-toolbar>
</template>

<script>
export default {
  props: {
    icon: String,
    text: String
  }
}
</script>

<style>
</style>
