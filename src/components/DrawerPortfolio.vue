<template>
  <q-dialog v-model="show" position="right" v-if="LANG.portfolio">
    <q-layout style="min-width: 50vw;min-height:20vh;max-height:80vh">
      <DrawerTitle icon="fas fa-git-alt" :text="LANG.labels.drawer.portfolio"/>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="github" label="GitHub"/>
        <q-tab name="articles" :label="LANG.labels.drawer.articles"/>
      </q-tabs>

      <q-separator/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="github">
          <PortfolioGithub :LANG="LANG"/>
        </q-tab-panel>
        <q-tab-panel name="articles">
          <PortfolioArticles :LANG="LANG"/>
        </q-tab-panel>
      </q-tab-panels>
    </q-layout>
  </q-dialog>
</template>

<script>
import PortfolioGithub from './PortfolioGithub'
import PortfolioArticles from './PortfolioArticles'
export default {
  props: {
    LANG: Object
  },
  components: {
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
