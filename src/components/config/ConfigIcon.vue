<template>
  <q-card-section class="q-pa-none">
    <q-item>
      <q-item-section avatar>
        <q-avatar rounded>
          <q-img :src="model[prop]" v-if="model[prop]" />
          <q-icon v-else name="far fa-image" size="30px" color="grey"></q-icon>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-input rounded v-model="model[prop]" :label="label" class="bg-white"></q-input>
      </q-item-section>
    </q-item>
  </q-card-section>
</template>

<script>
export default {
  props: {
    model: Object,
    prop: String,
    label: String
  }
}
</script>

<style>
</style>
