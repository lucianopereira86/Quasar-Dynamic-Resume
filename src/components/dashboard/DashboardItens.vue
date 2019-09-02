<template>
  <div>
    <div class="row q-my-sm items-center" v-for="(item, index3) in section.itens" :key="index3">
      <div class="col-1 text-center">
        <q-btn @click="removeItem(section, index3)" round icon="close" size="sm"></q-btn>
      </div>
      <div class="col-11">
        <div class="row q-my-sm" v-for="(field, index4) in item.fields" :key="index4">
          <q-expansion-item
            v-if="field.isArray"
            bordered
            expand-separator
            :label="field.key"
            header-class="bg-grey-2 text-subtitle2"
            class="full-width"
          >
            <DashboardItens :section="field" />
          </q-expansion-item>
          <div class="full-width row" v-else>
            <div class="col-1 text-subtitle2">{{field.key}}:</div>
            <div class="col-11" v-if="isBoolean(field)">
              <q-toggle v-model="field.value" />
            </div>
            <div v-else class="col-11">
              <q-input v-model="field.value" outlined />
            </div>
          </div>
        </div>
        <q-separator />
      </div>
    </div>
    <div class="row">
      <div class="col-2 offset-1 q-my-md">
        <q-btn @click="addItem(section)" color="primary" icon="add" label="Item"></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardItens from './DashboardItens.vue'
import GeneralMixins from '../../mixins/general.mixins'
export default {
  name: 'DashboardItens',
  props: {
    section: Object
  },
  components: {
    DashboardItens
  },
  mixins: [GeneralMixins],
  methods: {
    removeItem (sections, index) {
      sections.itens.splice(index, 1)
    },
    addItem (section) {
      section.itens.push(section.newItem)
    }
  }
}
</script>

<style>
</style>
