<template>
  <q-dialog v-model="show" position="right" v-if="LANG.portfolio">
    <q-layout style="min-width: 50vw;min-height:20vh;max-height:80vh">
      <q-toolbar class="bg-accent text-white">
        <q-item>
          <q-item-section avatar>
            <q-icon name="fab fa-github" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h5">{{LANG.labels.drawer.portfolio}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-toolbar>
      <q-card class="full-width full-height" style="overflow-y:auto;max-height:60vh">
        <q-card-section>
          <q-list>
            <q-item-label header>
              <span>{{`${repos.length} ${LANG.labels.drawer.reposFound}`}}</span>
            </q-item-label>
            <q-item v-if="loading" class="q-mb-lg">
              <q-item-section>
                <q-item-label avatar>
                  <q-icon name="fas fa-sync-alt fa-spin" />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-else v-for="(repo, index) in repos" :key="index" class="q-mb-lg">
              <q-item-section>
                <q-item-label class="text-subtitle1 text-bold">{{repo.name}}</q-item-label>
                <q-item-label>
                  <a :href="repo.html_url" target="_blank">{{repo.html_url}}</a>
                </q-item-label>
                <q-item-label caption>{{repo.description}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-layout>
  </q-dialog>
</template>

<script>
export default {
  props: {
    LANG: Object
  },
  data () {
    return {
      show: false,
      repos: [],
      loading: false
    }
  },
  methods: {
    open () {
      this.show = true
      this.getRepos()
    },
    getRepos () {
      this.loading = true
      let id = this.LANG.portfolio.github.id
      this.$axios.get(`https://api.github.com/users/${id}/repos?per_page=100&page=1`)
        .then(resp => {
          this.repos = resp.data
          this.loading = false
        })
        .catch(e => {
          this.loading = false
          console.error('getRepos', e)
        })
    }
  }
}
</script>

<style>
</style>
