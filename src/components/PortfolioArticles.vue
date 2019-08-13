<template>
  <q-card class="full-width" style="overflow-y:auto;height:70vh">
    <q-card-section>
      <q-list v-for="(article, index) in LANG.portfolio.articles" :key="index" class="q-mb-lg">
        <q-item-label header>
          <span class="text-subtitle1 text-black text-bold">{{article.site}}</span>
        </q-item-label>
        <q-item v-for="(site, index2) in article.urls" :key="index2">
          <q-item-section>
            <q-item-label>
              <a :href="site.url" target="_blank">{{site.url}}</a>
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
