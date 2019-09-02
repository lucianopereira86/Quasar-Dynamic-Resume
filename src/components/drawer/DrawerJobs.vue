<template>
  <q-dialog v-model="show" position="left" v-if="LANG.jobs">
    <q-layout style="min-width: 50vw;min-height:20vh;max-height:90vh">
      <DrawerTitle icon="fas fa-user-tie fa" :text="LANG.labels.drawer.jobs" :LANG="LANG" />
      <q-card class="full-width full-height" style="overflow-y:auto;max-height:80vh">
        <q-card-section>
          <div class="row">
            <div class="col" v-for="(jobs, index) in LANG.jobs" :key="index">
              <q-list>
                <q-item-label header class="text-center">
                  <span class="text-h6">{{jobs.type}}</span>
                </q-item-label>
                <q-item v-for="(job, index) in jobs.jobs" :key="index">
                  <q-item-section>
                    <div class="full-width text-center">
                      <q-img
                        :src="job.image"
                        :title="job.company"
                        style="max-height:8vh;max-width:8vw"
                        class="q-mb-md"
                      />
                    </div>
                    <q-item-label class="text-subtitle1 text-bold">{{job.function}}</q-item-label>
                    <q-item-label>{{job.company}}</q-item-label>
                    <q-item-label caption>{{job.period}}</q-item-label>
                    <q-item-label caption>{{job.description}}</q-item-label>
                    <q-item-label>
                      <div class="row q-mt-sm">
                        <div
                          class="col-3 q-py-xs"
                          v-for="(tech, index2) in job.techs"
                          :key="index2"
                        >
                          <q-avatar :title="tech.title" size="35px">
                            <q-img :src="tech.image" />
                          </q-avatar>
                        </div>
                      </div>
                      <q-separator class="q-my-sm" />
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
