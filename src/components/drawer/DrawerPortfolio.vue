<template>
  <q-dialog v-model="show" position="right" v-if="CONFIG.portfolio">
    <q-layout style="min-width: 50vw;min-height:20vh;max-height:90vh">
      <DrawerTitle icon="fab fa-git-alt" :text="CONFIG.labels.drawer.portfolio" :CONFIG="CONFIG" />
      <q-tabs
        v-model="tab"
        dense
        class="text-grey bg-white q-pt-sm"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="github" label="GitHub" />
        <q-tab name="articles" :label="CONFIG.labels.drawer.articles" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated style="overflow-y:auto;max-height:80vh">
        <q-tab-panel name="github">
          <PortfolioGithub :CONFIG="CONFIG" />
        </q-tab-panel>
        <q-tab-panel name="articles">
          <PortfolioArticles :CONFIG="CONFIG" />
        </q-tab-panel>
      </q-tab-panels>
    </q-layout>
  </q-dialog>
</template>

<script>
import DrawerTitle from './DrawerTitle'
import PortfolioGithub from './portfolio/PortfolioGithub'
import PortfolioArticles from './portfolio/PortfolioArticles'
export default {
  props: {
    CONFIG: Object
  },
  components: {
    DrawerTitle,
    PortfolioGithub,
    PortfolioArticles
  },
  data () {
    return {
      show: false,
      tab: 'github'
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
