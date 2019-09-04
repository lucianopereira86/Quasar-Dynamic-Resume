<template>
  <q-dialog v-model="show" position="right" v-if="CONFIG.education">
    <q-layout style="min-width: 50vw;min-height:20vh;max-height:90vh">
      <DrawerTitle
        icon="fas fa-graduation-cap"
        :text="CONFIG.labels.drawer.education"
        :CONFIG="CONFIG"
      />
      <q-card class="full-width full-height" style="overflow-y:auto;max-height:80vh">
        <q-card-section>
          <q-list v-for="(school, index) in CONFIG.education.schools" :key="index">
            <q-item-label header class="text-center">
              <q-img :src="school.image" style="max-height:10vh;max-width:20vw" />
            </q-item-label>
            <q-item>
              <q-item-section>
                <q-item-label class="text-subtitle1 text-bold">{{school.title}}</q-item-label>
                <q-item-label>{{school.location}}</q-item-label>
                <q-item-label caption>{{school.period}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator class="q-my-sm" />
          </q-list>
          <q-list class="row">
            <q-item-label header class="col-12 text-left">
              <span class="text-h6">{{CONFIG.labels.drawer.languages}}</span>
            </q-item-label>
            <q-item
              v-for="(language, index) in CONFIG.education.languages"
              :key="index"
              class="co-2"
            >
              <q-item-section avatar>
                <q-avatar>
                  <q-img :src="language.flag" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-subtitle1 text-bold">{{language.name}}</q-item-label>
                <q-item-label>{{language.level}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-layout>
  </q-dialog>
</template>

<script>
import GeneralMixins from '../../mixins/general.mixins'
import DrawerTitle from './DrawerTitle'
export default {
  props: {
    CONFIG: Object
  },
  components: {
    DrawerTitle
  },
  mixins: [GeneralMixins],
  data () {
    return {
      show: false
    }
  },
  methods: {
    open () {
      this.show = true
    }
  }
}
</script>

<style>
</style>
