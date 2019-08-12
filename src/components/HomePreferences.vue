<template>
  <!-- <q-card class="full-width full-height" style="overflow-y:auto;max-height:70vh">
    <q-card-section> -->
      <q-list>
        <q-item-label header class="text-left">
          <q-icon name="fas fa-star" size="20px" class="q-mb-sm"/>
          <span class="text-h6 q-ml-md">{{LANG.labels.home.preferences}}</span>
        </q-item-label>
        <q-item v-for="(pref, index) in getPrefs()" :key="index" class="q-mb-lg">
          <q-item-section avatar>
            <q-avatar>
              <q-img :src="pref.image"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-bold">{{pref.name}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    <!-- </q-card-section>
  </q-card> -->
</template>

<script>
export default {
  props: {
    LANG: Object
  },
  methods: {
    getPrefs () {
      let prefs = [...this.LANG.home.preferences]
      return prefs.sort((b, a) => b.order - a.order)
    }
  }
}
</script>

<style>
</style>
