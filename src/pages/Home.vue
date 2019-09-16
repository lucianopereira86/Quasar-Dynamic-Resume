<template>
  <q-page id="home" class="relative-position" v-if="CONFIG" :style="getStyleBgColor()">
    <div class="row">
      <div class="col-3">
        <HomePreferences :CONFIG="CONFIG" :style="getStyleColor()" />
      </div>
      <div class="col-6 text-center">
        <HomeMenu :CONFIG="CONFIG" />
      </div>
      <div class="col-3 text-right">
        <HomeFiles :CONFIG="CONFIG" :style="getStyleColor()" />
      </div>
    </div>
  </q-page>
</template>

<script>
import HomePreferences from '../components/home/HomePreferences'
import HomeMenu from '../components/home/HomeMenu'
import HomeFiles from '../components/home/HomeFiles'
export default {
  name: 'PageIndex',
  props: {
    CONFIG: Object
  },
  components: {
    HomePreferences,
    HomeMenu,
    HomeFiles
  },
  methods: {
    getStyleColor () {
      return this.CONFIG.home ? { color: this.CONFIG.home.color } : {}
    },
    getStyleBgColor () {
      return this.CONFIG.home ? { backgroundColor: this.CONFIG.home.bgColor } : {}
    }
  }
}
</script>

<style scoped>
</style>
