<template>
  <q-page class="relative-position">
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
    <DrawerAwards ref="DrawerAwards" :LANG="LANG" />
    <DrawerEducation ref="DrawerEducation" :LANG="LANG" />
    <DrawerPortfolio ref="DrawerPortfolio" :LANG="LANG" />
    <DrawerCoding ref="DrawerCoding" :LANG="LANG" />
    <DrawerProfile ref="DrawerProfile" :LANG="LANG" />
    <DrawerJobs ref="DrawerJobs" :LANG="LANG" />
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
import HomePreferences from '../components/HomePreferences'
import HomeMenu from '../components/HomeMenu'
import HomeFiles from '../components/HomeFiles'
import DrawerAwards from '../components/DrawerAwards'
import DrawerEducation from '../components/DrawerEducation'
import DrawerPortfolio from '../components/DrawerPortfolio'
import DrawerCoding from '../components/DrawerCoding'
import DrawerProfile from '../components/DrawerProfile'
import DrawerJobs from '../components/DrawerJobs'
export default {
  name: 'PageIndex',
  components: {
    HomePreferences,
    HomeMenu,
    HomeFiles,
    DrawerAwards,
    DrawerEducation,
    DrawerPortfolio,
    DrawerCoding,
    DrawerProfile,
    DrawerJobs
  },
  computed: {
    ...mapState('General', ['LANG'])
  }
}
</script>

<style scoped>
</style>
