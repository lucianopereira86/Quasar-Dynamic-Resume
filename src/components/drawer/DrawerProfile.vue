<template>
  <q-dialog v-model="show" position="left" v-if="model">
    <q-layout style="width: 50vw;min-height:90vh">
      <DrawerTitle
        title="PROFILE"
        moduleName="Profile"
        icon="fas fa-address-card"
        :text="model.title"
        :CONFIG="CONFIG"
        :model="model"
      >
        <template v-slot:default="slotProps">
          <ConfigDrawerProfile :lang="slotProps.lang" :model="slotProps.model" :field="fields" />
        </template>
      </DrawerTitle>
      <q-card class="full-width" style="overflow-y:auto;max-height:85vh">
        <q-card-section class="text-center bg-grey-2">
          <q-avatar size="200px">
            <q-img :src="model.image" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <q-list>
            <q-item-label header class="text-center">
              <span class="text-h6">{{model.name}}</span>
            </q-item-label>

            <q-item v-for="(field, index) in fields" :key="index">
              <q-item-section avatar>
                <q-icon :color="field.color" :name="field.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  <a v-if="field.isAnchor" :href="field.value" target="_blank">{{field.value}}</a>
                  <span v-else>{{field.value}}</span>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-layout>
  </q-dialog>
</template>

<script>
import DrawerTitle from './DrawerTitle'
import ConfigDrawerProfile from '../config/drawer/ConfigDrawerProfile'
export default {
  name: 'DrawerProfile',
  props: {
    CONFIG: Object
  },
  components: {
    DrawerTitle,
    ConfigDrawerProfile
  },
  data () {
    return {
      show: false,
      model: null,
      fields: []
    }
  },
  methods: {
    open () {
      this.model = JSON.parse(JSON.stringify(this.CONFIG.profile))
      this.getFields()
      this.show = true
    },
    getFields () {
      let profileLang = this.model[this.CONFIG.lang()]
      this.fields.push(
        { color: 'red', icon: 'fas fa-birthday-cake', prop: 'birthday', value: profileLang.birthday },
        { color: 'secondary', icon: 'fas fa-phone', prop: 'phone', value: profileLang.phone },
        { color: 'accent', icon: 'fas fa-at', prop: 'email', value: this.model.email },
        { color: 'warning', icon: 'fas fa-globe-americas', prop: 'location', value: profileLang.location },
        { color: 'positive', icon: 'fab fa-whatsapp', prop: 'whatsapp', value: profileLang.whatsapp },
        { color: 'primary', icon: 'fab fa-linkedin-in', prop: 'linkedIn', value: this.model.linkedIn, isAnchor: true },
        { color: 'black', icon: 'fab fa-github', prop: 'github', value: this.model.github, isAnchor: true },
        { color: 'info', icon: 'fab fa-skype', prop: 'skype', value: this.model.skype },
        { color: 'grey', icon: 'far fa-comment-dots', prop: 'summary', value: profileLang.summary }
      )
    }
  }
}
</script>

<style>
</style>
