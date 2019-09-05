<template>
  <q-page-sticky :offset="offset" class="text-center cursor-pointer btnMenu">
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
    ...mapState('General', ['CONFIG'])
  }
}
</script>

<style scoped>
.btnMenu {
  width: 75px;
  height: 85px;
}
</style>
