<template>
  <q-card class="full-width full-height" style="overflow-y:auto;max-height:60vh">
    <q-card-section>
      <q-list v-for="(article, index) in LANG.portfolio.articles" :key="index" class="q-mb-lg">
        <q-item-label header>
          <span>{{article.site}}</span>
        </q-item-label>
        <q-item v-for="(url, index2) in article.urls" :key="index2">
          <q-item-section>
            <q-item-label>
              <a :href="url" target="_blank">{{url}}</a>
            </q-item-label>
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
  }
}
</script>

<style>
</style>
