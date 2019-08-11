<template>
  <q-page-sticky position="center" :offset="offset" class="text-center cursor-pointer">
    <q-icon color="white" :name="icon" size="3rem"></q-icon>
    <div class="text-white text-subtitle2 q-mt-md">
      <span>{{text}}</span>
    </div>
  </q-page-sticky>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    offset: Array,
    icon: String,
    text: String
  },
  computed: {
    ...mapState('General', ['LANG'])
  }
}
</script>

<style>
</style>
