<template>
  <q-layout view="lHh Lpr lFf" v-if="LANG">
    <q-header elevated>
      <q-toolbar
        class="row"
        :class="[LANG.home.navBgColor]"
        :style="{ color: LANG.home.navTextColor }"
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
          {{LANG.home.title}}
          <div class="text-subtitle1 text-center text-grey-4">
            <cite>"{{LANG.home.message}}"</cite>
          </div>
        </q-toolbar-title>
        <div class="col-2 text-right">
          <q-avatar @click="selectLang(false)" class="cursor-pointer">
            <q-img :src="LANG.home.flag.MY" />
          </q-avatar>
          <q-toggle v-model="isEN" color="white" keep-color @input="selectLang(isEN)" />
          <q-avatar @click="selectLang(true)" class="cursor-pointer">
            <q-img :src="LANG.home.flag.EN" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <Dashboard ref="Dashboard" :LANG="LANG" />
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
    ...mapState('General', ['LANG'])
  },
  created () {
    let language = localStorage.getItem('language') || 'MY'
    this.isEN = language === 'EN'
    this.SET_LANG(language)
  },
  methods: {
    ...mapMutations('General', ['SET_LANG']),
    showDashboard () {
      this.$refs.Dashboard.open()
    },
    selectLang (isEN) {
      this.isEN = isEN
      let language = isEN ? 'EN' : 'MY'
      this.SET_LANG(language)
    }
  }
}
</script>

<style>
</style>
