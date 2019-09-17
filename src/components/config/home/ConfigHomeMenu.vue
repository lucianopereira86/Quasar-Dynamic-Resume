<template>
  <q-card v-if="model" class="q-pa-md config-container">
    <ConfigIcon :model="model" prop="picture" label="Profile Picture URL" />
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
      <div class="col">
        <div class="q-mb-md">
          <span class="text-black text-bold">Menu Button Color:</span>
          <span class="q-ml-md color-span" :style="getStyleMenuBgColor()">{{menuBgColor}}</span>
        </div>
        <q-color
          v-model="model.menuBgColor"
          no-header
          no-footer
          class="my-picker"
          @input="menuBgColor = model.menuBgColor"
        />
      </div>
    </q-card-section>
    <q-card-section class="q-pb-none">
      <span class="text-subtitle1 text-black text-bold">Menu Options</span>
    </q-card-section>
    <q-card-section>
      <q-input rounded dense v-model="model[lang].menu.awards" label="Awards" class="bg-white"></q-input>
      <q-input
        rounded
        dense
        v-model="model[lang].menu.education"
        label="Education"
        class="bg-white"
      ></q-input>
      <q-input
        rounded
        dense
        v-model="model[lang].menu.portfolio"
        label="Portfolio"
        class="bg-white"
      ></q-input>
      <q-input rounded dense v-model="model[lang].menu.coding" label="Coding" class="bg-white"></q-input>
      <q-input rounded dense v-model="model[lang].menu.profile" label="Profile" class="bg-white"></q-input>
      <q-input rounded dense v-model="model[lang].menu.jobs" label="Jobs" class="bg-white"></q-input>
    </q-card-section>
  </q-card>
</template>

<script>
import ConfigIcon from '../ConfigIcon'
export default {
  name: 'ConfigHomeMenu',
  props: {
    lang: String,
    model: Object
  },
  components: {
    ConfigIcon
  },
  data () {
    return {
      color: this.model.color,
      bgColor: this.model.bgColor,
      menuBgColor: this.model.menuBgColor
    }
  },
  methods: {
    getStyleColor () {
      return { color: this.model.color }
    },
    getStyleBgColor () {
      return { color: this.model.bgColor }
    },
    getStyleMenuBgColor () {
      return { color: this.model.menuBgColor }
    }
  }
}
</script>
