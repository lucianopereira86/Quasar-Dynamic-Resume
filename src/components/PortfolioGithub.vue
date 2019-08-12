<template>
  <q-card class="full-width full-height" style="overflow-y:auto;max-height:60vh">
    <q-card-section>
      <q-list>
        <q-item class="q-mb-lg">
          <q-item-section>
            <q-item-label>Sourcerer.io</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <a :href="LANG.portfolio.sourcererIO" target="_blank">{{LANG.portfolio.sourcererIO}}</a>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list>
        <q-item-label header>
          <span>{{`${repos.length} ${LANG.labels.drawer.reposFound}`}}</span>
        </q-item-label>
        <q-item v-if="loading" class="q-mb-lg">
          <q-item-section>
            <q-item-label avatar>
              <q-icon name="fas fa-sync-alt fa-spin"/>
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
</template>

<script>
export default {
  props: {
    LANG: Object
  },
  data () {
    return {
      repos: [],
      loading: false
    }
  },
  mounted () {
    this.getRepos()
  },
  methods: {
    getRepos () {
      this.loading = true
      let id = this.LANG.portfolio.github.id
      this.$axios
        .get(`https://api.github.com/users/${id}/repos?per_page=100&page=1`)
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
