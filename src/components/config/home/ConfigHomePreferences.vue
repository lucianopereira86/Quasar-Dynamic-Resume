<template>
  <q-card v-if="model" class="q-pa-md config-container">
    <q-card-section>
      <q-input rounded dense v-model="model[lang].preferences" label="Preferences" class="bg-white"></q-input>
    </q-card-section>
    <q-card-section class="q-pb-none">
      <span class="text-subtitle1 text-black text-bold">New Preference</span>
    </q-card-section>
    <q-card-section>
      <ConfigIcon :model="newModel" prop="image" label="Icon URL" />
      <div class="row items-center q-pa-md">
        <div class="col-11">
          <q-input rounded dense v-model="newModel.name" label="Name" class="bg-white"></q-input>
        </div>
        <div class="col-1 text-right">
          <q-btn
            icon="add"
            round
            dense
            outline
            :disabled="isDisabled()"
            @click="add()"
            color="primary"
          ></q-btn>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pb-none">
      <span class="text-subtitle1 text-black text-bold">Preferences</span>
    </q-card-section>
    <q-card-section>
      <q-list separator class="text-left">
        <q-item v-for="(pref, index) in model.preferences" :key="index">
          <q-item-section avatar>
            <q-avatar>
              <q-img :src="pref.image" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-bold">{{pref.name}}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn icon="close" round dense outline @click="remove(index)" size="sm"></q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
import ConfigIcon from '../ConfigIcon'
export default {
  name: 'ConfigHomePreferences',
  props: {
    lang: String,
    model: Object
  },
  components: {
    ConfigIcon
  },
  data () {
    return {
      newModel: {
        image: '',
        name: ''
      },
      newModelReset: {}
    }
  },
  mounted () {
    this.newModelReset = { ...this.newModel }
  },
  methods: {
    add () {
      let newModel = { ...this.newModel }
      this.model.preferences.unshift(newModel)
      this.newModel = { ...this.newModelReset }
    },
    remove (index) {
      this.model.preferences.splice(index, 1)
    },
    isDisabled () {
      return this.newModel.image.length === 0 ||
        this.newModel.name.length === 0
    }
  }
}
</script>
