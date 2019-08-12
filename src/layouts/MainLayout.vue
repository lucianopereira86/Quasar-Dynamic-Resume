<template>
  <q-layout view="lHh Lpr lFf" v-if="LANG">
    <q-header elevated>
      <q-toolbar class="row" :class="[LANG.home.navBgColor, LANG.home.navTextColor]">
        <q-toolbar-title class="col-8 offset-2 text-h4 text-center q-pa-sm">
          {{LANG.home.title}}
          <div class="text-subtitle1 text-center text-grey-4">
            <cite>"{{LANG.home.message}}"</cite>
          </div>
        </q-toolbar-title>
        <div class="col-2 text-right">
          <q-avatar @click="selectLang(false)" class="cursor-pointer">
            <q-img :src="LANG.home.flag.BR" />
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
  </q-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'MyLayout',
  data () {
    return {
      isEN: false
    }
  },
  computed: {
    ...mapState('General', ['LANG'])
  },
  created () {
    let language = localStorage.getItem('language') || 'BR'
    this.isEN = language === 'EN'
    this.SET_LANG(language)
  },
  methods: {
    ...mapMutations('General', ['SET_LANG']),
    selectLang (isEN) {
      this.isEN = isEN
      let language = isEN ? 'EN' : 'BR'
      this.SET_LANG(language)
    }
  }
}
</script>

<style>
</style>
