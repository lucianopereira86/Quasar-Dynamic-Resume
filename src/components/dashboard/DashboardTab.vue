<template>
  <q-card class="full-width" style="overflow-y:auto;height:82.8vh">
    <q-card-section v-for="(mod, index) in modules" :key="index">
      <q-expansion-item
        bordered
        expand-separator
        :label="mod.name"
        header-class="text-h6 bg-grey-2"
      >
        <div v-if="mod.isArray">
          <DashboardItens :section="mod" />
        </div>
        <div v-else>
          <div class="q-ml-lg q-my-md" v-for="(section, index2) in mod.sections" :key="index2">
            <q-expansion-item
              v-if="section.name"
              bordered
              expand-separator
              :label="section.name"
              header-class="q-pl-md text-subtitle2 bg-grey-2"
            >
              <div v-if="section.itens">
                <DashboardItens :section="section" />
              </div>
              <div v-else>
                <DashboardFields :section="section" />
              </div>
            </q-expansion-item>
            <div v-else>
              <div v-if="section.itens">
                <DashboardItens :section="section" />
              </div>
              <div v-else>
                <DashboardFields :section="section" />
              </div>
            </div>
          </div>
        </div>
      </q-expansion-item>
    </q-card-section>
  </q-card>
</template>

<script>
import DashboardItens from './DashboardItens'
import DashboardFields from './DashboardFields'
export default {
  props: {
    lang: String
  },
  components: {
    DashboardItens,
    DashboardFields
  },
  data () {
    return {
      modules: []
    }
  },
  watch: {
    lang: function (val) {
      console.log('lang', val)
      this.getModules()
    }
  },
  mounted () {
    this.getModules()
  },
  methods: {
    getModules () {
      this.modules = []
      let lang = this.$LANG.get(this.lang)
      for (let obj of Object.entries(lang)) {
        let name = obj[0].toUpperCase()
        if (name !== 'DASHBOARD') {
          let mod = {
            name: name,
            sections: []
          }
          if (obj[1] instanceof Array) {
            mod.isArray = true
            this.getItens(mod, obj[1])
          } else {
            this.getSections(mod, obj[1])
          }
          this.modules.push(mod)
        }
      }
    },
    getSections (mod, obj) {
      for (let obj2 of Object.entries(obj)) {
        let section = {
          name: '',
          fields: []
        }
        if (typeof (obj2[1]) === 'string' || typeof (obj2[1]) === 'boolean') {
          section.fields.push({ key: obj2[0], value: obj2[1] })
        } else if (obj2[1] instanceof Array) {
          section.name = obj2[0]
          this.getItens(section, obj2[1])
        } else {
          section.name = obj2[0]
          for (let [key, value] of Object.entries(obj2[1])) {
            section.fields.push({ key, value })
          }
        }
        mod.sections.push(section)
      }
    },
    getItens (section, array, isNewItem) {
      section.itens = []
      array.forEach(o => {
        this.createNewItem(section, o)

        let item = {
          fields: []
        }
        for (let [key, value] of Object.entries(o)) {
          let field = { key, value }
          if (value instanceof Array) {
            field.isArray = true
            this.getItens(field, value)
          }
          item.fields.push(field)
        }
        section.itens.push(item)
      })
    },
    createNewItem (section, o) {
      if (!section.newItem) {
        let newItem = {
          fields: []
        }
        for (let key in o) {
          let value = o[key]
          let field = {
            key: key,
            value: null,
            isArray: false
          }
          if (value instanceof Array) {
            field.isArray = true
            this.getItens(field, value)
            field.itens.length = 1
            field.itens.map(i => {
              i.fields.map(f => {
                if (f.isArray) {
                  f.itens.length = 1
                  f.itens.forEach(j => {
                    j.fields.map(h => {
                      h['value'] = ''
                    })
                  })
                } else {
                  f['value'] = ''
                }
                return f
              })
            })
          }
          newItem.fields.push(field)
        }
        section.newItem = newItem
      }
    }
  }
}
</script>

<style>
.my-picker {
  width: 250px;
}
</style>
