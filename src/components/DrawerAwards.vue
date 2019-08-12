<template>
  <q-dialog v-model="show" position="right" v-if="LANG.awards">
    <q-layout style="min-width: 50vw;min-height:20vh;max-height:80vh">
      <DrawerTitle icon="fas fa-award" :text="LANG.labels.drawer.awards" />
      <q-card class="full-width full-height" style="overflow-y:auto;max-height:60vh">
        <q-card-section>
          <q-list v-for="(award, index) in LANG.awards" :key="index" class="q-mb-lg">
            <q-item-label header class="text-center">
              <q-img :src="award.image" style="max-height:10vh;max-width:20vw" />
            </q-item-label>
            <q-item>
              <q-item-section>
                <q-item-label class="text-subtitle1 text-bold">{{award.title}}</q-item-label>
                <q-item-label>{{award.location}}</q-item-label>
                <q-item-label caption>{{award.period}}</q-item-label>
                <q-item-label caption>{{award.description}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-layout>
  </q-dialog>
</template>

<script>
import DrawerTitle from './DrawerTitle'
export default {
  props: {
    LANG: Object
  },
  components: {
    DrawerTitle
  },
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
