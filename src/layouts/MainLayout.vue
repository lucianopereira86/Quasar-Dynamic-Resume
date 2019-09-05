<template>
  <q-layout view="lHh Lpr lFf" v-if="CONFIG">
    <q-header elevated>
      <q-toolbar
        class="row"
        :class="[CONFIG.home.navBgColor]"
        :style="{ color: CONFIG.home.navTextColor }"
      >
        <div class="col-2 text-left">
          <q-btn
            v-if="isDebug"
            icon="dashboard"
            round
            outline
            @click="showDashboard()"
            class="q-ml-md"
            title="Dashboard"
          ></q-btn>
        </div>
        <q-toolbar-title class="col-8 text-h4 text-center q-pa-sm">
          {{CONFIG.home.title}}
          <div class="text-subtitle1 text-center text-grey-4">
            <cite>"{{CONFIG.home.message}}"</cite>
          </div>
        </q-toolbar-title>
        <div class="col-2 text-right" v-if="CONFIG.general.languages.switch">
          <q-avatar @click="selectLang(false)" class="cursor-pointer">
            <q-img :src="CONFIG.home.flag.MY" />
          </q-avatar>
          <q-toggle v-model="isEN" color="white" keep-color @input="selectLang(isEN)" />
          <q-avatar @click="selectLang(true)" class="cursor-pointer">
            <q-img :src="CONFIG.home.flag.EN" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <Dashboard ref="Dashboard" />
  </q-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Dashboard from '../components/dashboard/Dashboard'
export default {
  name: 'MainLayout',
  components: {
    Dashboard
  },
  data () {
    return {
      isEN: false,
      isDebug: process.env.NODE_ENV === 'development'
    }
  },
  computed: {
    ...mapState('General', ['CONFIG'])
  },
  created () {
    let language = localStorage.getItem('language') || 'MY'
    this.isEN = language === 'EN'
    this.SET_LANGUAGE(language)
    console.log('CONFIG', this.CONFIG)
  },
  methods: {
    ...mapMutations('General', ['SET_LANGUAGE']),
    showDashboard () {
      this.$refs.Dashboard.open()
    },
    selectLang (isEN) {
      this.isEN = isEN
      let language = isEN ? 'EN' : 'MY'
      this.SET_LANGUAGE(language)
    }
  }
}
</script>

<style>
</style>
