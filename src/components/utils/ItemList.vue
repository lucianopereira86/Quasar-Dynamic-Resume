<template>
  <q-item>
    <q-item-section avatar>
      <q-icon :color="color" :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label v-if="masks">
        <q-input rounded dense v-model="model[prop]" class="bg-white" v-mask="masks"></q-input>
      </q-item-label>
      <q-item-label v-else>
        <q-input v-if="isArea" filled type="textarea" v-model="model[prop]"></q-input>
        <q-input v-else rounded dense v-model="model[prop]" class="bg-white"></q-input>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { mask } from 'vue-the-mask'
export default {
  props: {
    color: String,
    icon: String,
    model: Object,
    prop: String,
    masks: Array,
    isArea: Boolean
  },
  directives: { mask }
}
</script>

<style>
</style>
