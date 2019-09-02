<template>
  <q-page id="home" class="relative-position">
    <div class="row">
      <div class="col-3">
        <HomePreferences :LANG="LANG" />
      </div>
      <div class="col-6 text-center">
        <HomeMenu :LANG="LANG" />
      </div>
      <div class="col-3 text-right">
        <HomeFiles :LANG="LANG" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
import HomePreferences from '../components/home/HomePreferences'
import HomeMenu from '../components/home/HomeMenu'
import HomeFiles from '../components/home/HomeFiles'
export default {
  name: 'PageIndex',
  components: {
    HomePreferences,
    HomeMenu,
    HomeFiles
  },
  computed: {
    ...mapState('General', ['LANG'])
  }
}
</script>

<style scoped>
</style>
