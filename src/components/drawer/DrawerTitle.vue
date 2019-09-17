<template>
  <q-toolbar
    :style="{ backgroundColor: CONFIG.general.window.titleBgColor, color: CONFIG.general.window.titleTextColor }"
  >
    <div class="row full-width items-center">
      <div class="col-1 text-right">
        <q-icon :name="icon" size="25px" />
      </div>
      <div class="col-9 q-pl-md">
        <span class="text-h5">{{title}}</span>
      </div>
      <div class="col-1">
        <q-btn icon="edit" round flat @click="showConfig(`Drawer${moduleName}`)" v-if="isDebug()"></q-btn>
      </div>
      <div class="col-1">
        <q-btn round flat class="float-right" icon="close" color="white" v-close-popup></q-btn>
      </div>
    </div>
    <DialogConfig
      :ref="`DialogDrawer${moduleName}Config`"
      :title="title"
      :CONFIG="CONFIG"
      :model="model"
      :save="(model) => saveConfig(moduleName.toLowerCase(), model, callback)"
    >
      <slot :lang="CONFIG.lang()" :model="model" :CONFIG="CONFIG"></slot>
    </DialogConfig>
  </q-toolbar>
</template>

<script>
import GeneralMixins from '../../mixins/general.mixins'
import DialogConfig from '../utils/DialogConfig'
export default {
  name: 'DrawerTitle',
  props: {
    title: String,
    moduleName: String,
    icon: String,
    CONFIG: Object,
    model: Object,
    callback: Function
  },
  components: {
    DialogConfig
  },
  mixins: [GeneralMixins]
}
</script>

<style>
</style>
