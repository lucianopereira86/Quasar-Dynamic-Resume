<template>
  <q-card v-if="model" class="q-pa-md config-container">
    <q-card-section>
      <q-input rounded dense v-model="model[lang].profile" label="Profile" class="bg-white"></q-input>
    </q-card-section>
    <ConfigIcon :model="model" prop="image" label="Profile Picture URL" />
    <q-card-section>
      <q-list>
        <q-item-label header class="text-center">
          <span class="text-h6">{{model.name}}</span>
        </q-item-label>

        <q-item v-for="key in model" :key="key">
          <q-item-section avatar>
            <q-icon :color="getIconColor(key)" :name="getIconName(key)" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <q-input rounded dense v-model="model[key]" class="bg-white"></q-input>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ConfigDrawerProfile',
  props: {
    lang: String,
    model: Object,
    fields: Array
  },
  methods: {
    getField (key) {
      return this.fields.map(f => f.prop === key)[0]
    },
    getIconColor (key) {
      return this.getField(key).color
    },
    getIconName (key) {
      return this.getField(key).name
    },
    isAnchor (key) {
      return this.getField(key).isAnchor
    },
    getValue (key) {
      return this.getField(key).value
    }
  }
}
</script>

<style>
</style>
