<template>
  <q-card v-if="model" class="q-pa-md config-container">
    <q-card-section>
      <q-input rounded dense v-model="model[lang].title" label="Title" class="bg-white"></q-input>
    </q-card-section>
    <q-card-section class="q-my-md">
      <q-input rounded dense v-model="model[lang].message" label="Message" class="bg-white"></q-input>
    </q-card-section>
    <q-card-section class="row">
      <div class="col">
        <div class="q-mb-md">
          <span class="text-black text-bold">Text Color:</span>
          <span class="q-ml-md color-span" :style="getStyleColor()">{{color}}</span>
        </div>
        <q-color
          v-model="model.color"
          no-header
          no-footer
          class="my-picker"
          @input="color = model.color"
        />
      </div>
      <div class="col">
        <div class="q-mb-md">
          <span class="text-black text-bold">Background Color:</span>
          <span class="q-ml-md color-span" :style="getStyleBgColor()">{{bgColor}}</span>
        </div>
        <q-color
          v-model="model.bgColor"
          no-header
          no-footer
          class="my-picker"
          @input="bgColor = model.bgColor"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ConfigNav',
  props: {
    lang: String,
    model: Object
  },
  data () {
    return {
      myLang: this.model.languages.default,
      color: this.model.color,
      bgColor: this.model.bgColor
    }
  },
  methods: {
    getStyleColor () {
      return { color: this.model.color }
    },
    getStyleBgColor () {
      return { color: this.model.bgColor }
    }
  }
}
</script>
