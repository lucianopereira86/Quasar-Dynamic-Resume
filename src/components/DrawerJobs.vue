<template>
  <q-dialog v-model="show" position="left" v-if="LANG.jobs">
    <q-layout style="min-width: 50vw;min-height:20vh;max-height:80vh">
      <DrawerTitle icon="fas fa-user-tie fa" :text="LANG.labels.drawer.jobs" />
      <q-card class="full-width full-height" style="overflow-y:auto;max-height:60vh">
        <q-card-section>
          <div class="row">
            <div class="col" v-for="(jobs, index) in LANG.jobs" :key="index">
              <q-list>
                <q-item-label header class="text-center">
                  <span class="text-h6">{{jobs.type}}</span>
                </q-item-label>
                <q-item v-for="(job, index) in jobs.jobs" :key="index" class="q-mb-lg">
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img :src="job.image" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-subtitle1 text-bold">{{job.function}}</q-item-label>
                    <q-item-label>{{job.company}}</q-item-label>
                    <q-item-label caption>{{job.period}}</q-item-label>
                    <q-item-label caption>{{job.description}}</q-item-label>
                    <q-item-label>
                      <div class="row q-mt-sm">
                        <div class="col-2" v-for="(tech, index2) in job.techs" :key="index2">
                          <q-avatar :title="tech.title" size="30px">
                            <q-img :src="tech.image" />
                          </q-avatar>
                        </div>
                      </div>
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
