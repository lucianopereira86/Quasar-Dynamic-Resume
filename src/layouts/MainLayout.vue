<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <NavBar :CONFIG="CONFIG" />
    </q-header>
    <q-page-container>
      <router-view :CONFIG="CONFIG" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import NavBar from '../components/NavBar'
export default {
  name: 'MainLayout',
  components: {
    NavBar
  },
  computed: {
    ...mapState('General', ['CONFIG'])
  },
  created () {
    this.SET_LANGUAGE()
  },
  methods: {
    ...mapMutations('General', ['SET_LANGUAGE'])
  }
}
</script>

<style>
</style>
