<template>
  <div>
    <div class="row q-my-sm items-center" v-for="(field, index3) in section.fields" :key="index3">
      <div
        :class="['col-2', section.name ? 'text-subtitle1' : 'text-subtitle2', {'q-pl-xl': section.name}]"
      >{{field.key}}:</div>
      <div class="col-10">
        <div v-if="showColor(field)">
          <q-color v-model="field.value" no-header class="my-picker q-mb-sm" />
          <span class="text-body1">{{field.value}}</span>
        </div>
        <div v-else>
          <div class="col-11" v-if="isBoolean(field)">
            <q-toggle v-model="field.value" />
          </div>
          <div v-else class="col-11">
            <q-input v-model="field.value" outlined />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GeneralMixins from '../../mixins/general.mixins.js'
export default {
  props: {
    section: Object
  },
  mixins: [GeneralMixins],
  methods: {
    showColor (field) {
      return typeof (field.value) === 'string' ? field.value.startsWith('#') : false
    }
  }
}
</script>

<style>
</style>
