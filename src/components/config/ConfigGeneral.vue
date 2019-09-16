<template>
  <q-card class="q-pa-md config-container">
    <q-card-section class="row">
      <div class="col">
        <q-toggle
          class="text-subtitle2"
          left-label
          v-model="model.languages.switch"
          label="Allow languages switch"
          @input="languages.switch = model.languages.switch"
        />
      </div>
      <div class="col" v-if="!languages.switch">
        <span class="text-subtitle2">Default language:</span>
        <q-radio v-model="languages.default" val="MY" label="MY" @input="selectDefault" />
        <q-radio v-model="languages.default" val="EN" label="EN" @input="selectDefault" />
      </div>
    </q-card-section>
    <ConfigIcon :model="model.flags" prop="MY" label="MY flag URL" />
    <ConfigIcon :model="model.flags" prop="EN" label="EN flag URL" />
  </q-card>
</template>

<script>
import ConfigIcon from './ConfigIcon'
export default {
  name: 'ConfigGeneral',
  props: {
    model: Object
  },
  components: {
    ConfigIcon
  },
  data () {
    return {
      languages: this.model.languages
    }
  },
  methods: {
    selectDefault (val) {
      this.model.languages.default = val
    }
  }
}
</script>
<style  scoped>
</style>
