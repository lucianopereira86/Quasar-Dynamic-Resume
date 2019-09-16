<template>
  <div>
    <q-avatar @click="MY.click" class="cursor-pointer q-mr-md language-avatar">
      <q-img :src="CONFIG.general.flags.MY" />
      <div class="selected" v-if="MY.select"></div>
    </q-avatar>
    <q-avatar @click="EN.click" class="cursor-pointer language-avatar">
      <q-img :src="CONFIG.general.flags.EN" />
      <div class="selected" v-if="EN.select"></div>
    </q-avatar>
  </div>
</template>

<script>
export default {
  props: {
    CONFIG: Object,
    MY: Object,
    EN: Object
  }
}
</script>

<style scoped>
.language-avatar {
  font-size: 44px !important;
}
</style>
