<template>
  <q-card v-if="model" class="q-pa-md config-container">
    <q-card-section>
      <q-input rounded dense v-model="model[lang].files" label="Files" class="bg-white"></q-input>
    </q-card-section>
    <q-card-section class="q-pb-none">
      <span class="text-subtitle1 text-black text-bold">New File</span>
    </q-card-section>
    <q-card-section class="q-pa-md">
      <div>
        <q-input rounded dense v-model="newModel.url" label="URL" class="bg-white"></q-input>
      </div>
      <div class="row items-center q-mt-sm q-gutter-md">
        <div class="col-6">
          <q-input rounded dense v-model="newModel.title" label="Title" class="bg-white"></q-input>
        </div>
        <div class="col-4">
          <q-input rounded dense v-model="newModel.filename" label="Filename" class="bg-white"></q-input>
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
      <span class="text-subtitle1 text-black text-bold">Files</span>
    </q-card-section>
    <q-card-section>
      <q-list separator class="text-left">
        <q-item v-for="(file, index) in model.files" :key="index">
          <q-item-section avatar>
            <q-avatar>
              <q-icon :name="getIcon(file)" :color="getColorIcon(file)" size="30px" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{file.title}}</q-item-label>
            <q-item-label caption>{{file.filename}}</q-item-label>
            <q-item-label caption>{{file.url}}</q-item-label>
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
import GeneralMixins from '../../../mixins/general.mixins'
export default {
  name: 'ConfigHomeFiles',
  props: {
    lang: String,
    model: Object
  },
  mixins: [GeneralMixins],
  data () {
    return {
      newModel: {
        url: '',
        filename: '',
        title: ''
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
      this.model.files.unshift(newModel)
      this.newModel = { ...this.newModelReset }
    },
    remove (index) {
      this.model.files.splice(index, 1)
    },
    isDisabled () {
      return this.newModel.url.length === 0 ||
        this.newModel.filename.length === 0 ||
        this.newModel.title.length === 0
    }
  }
}
</script>
