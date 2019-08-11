<template>
  <q-dialog v-model="show" position="left" v-if="LANG.coding">
    <q-layout style="min-width: 60vw; max-width:80vw;min-height:20vh;max-height:80vh">
      <q-toolbar class="bg-accent text-white">
        <q-item>
          <q-item-section avatar>
            <q-icon name="fas fa-code" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h5">{{LANG.labels.drawer.coding}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-toolbar>
      <q-card class="full-width full-height" style="overflow-y:auto;max-height:70vh">
        <q-card-section>
          <div class="row">
            <div class="col" v-for="(coding, index) in LANG.coding" :key="index">
              <q-list>
                <q-item-label header class="text-center">
                  <span class="text-h6">{{coding.type}}</span>
                </q-item-label>
                <q-item v-for="(tech, index) in getTechs(coding)" :key="index" class="q-mb-lg">
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img :src="tech.image" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-subtitle1 text-bold">{{tech.name}}</q-item-label>
                    <q-item-label>
                      <q-rating
                        v-model="tech.rating"
                        size="1.5em"
                        icon="star"
                        :color="getColor(tech.rating)"
                        readonly
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-layout>
  </q-dialog>
</template>

<script>
import GeneralMixins from '../mixins/general.mixins'
export default {
  props: {
    LANG: Object
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
    },
    getTechs (coding) {
      let techs = [...coding.techs]
      return techs.sort((a, b) => b.rating - a.rating)
    }
  }
}
</script>

<style>
</style>
