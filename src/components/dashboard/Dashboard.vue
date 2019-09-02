<template>
  <q-dialog v-model="show" maximized>
    <q-layout style="height:100%" class="bg-white">
      <DrawerTitle icon="dashboard" text="Dashboard" :LANG="LANG" />
      <div class="row q-pa-md items-center">
        <div class="col-2">
          <q-toggle
            class="text-subtitle2"
            left-label
            v-model="langSwitch.value"
            :label="langSwitch.text"
          />
        </div>
        <div class="col-2">
          <span class="text-subtitle2">{{langDefault.text}}</span>
          <q-radio v-model="langDefault.value" :val="myLang" :label="myLang" />
          <q-radio v-model="langDefault.value" val="EN" label="EN" />
        </div>
        <div class="col-7 text-right q-pr-md">
          <q-avatar @click="lang = 'BR'" class="cursor-pointer q-mr-md relative-position">
            <q-img :src="LANG.home.flag.BR" />
            <div class="selected" v-if="lang === 'BR'"></div>
          </q-avatar>
          <q-avatar @click="lang = 'EN'" class="cursor-pointer">
            <q-img :src="LANG.home.flag.EN" />
            <div class="selected" v-if="lang === 'EN'"></div>
          </q-avatar>
        </div>
        <div class="col-1 text-center">
          <q-btn color="primary" :label="LANG.dashboard.save" @click="save()"></q-btn>
        </div>
      </div>
      <DashboardTab :lang="lang" />
    </q-layout>
  </q-dialog>
</template>

<script>
import DrawerTitle from '../drawer/DrawerTitle'
import DashboardTab from './DashboardTab'
export default {
  props: {
    LANG: Object
  },
  components: {
    DrawerTitle,
    DashboardTab
  },
  data () {
    return {
      show: false,
      lang: 'BR',
      myLang: this.getMyLanguage(),
      langSwitch: {},
      langDefault: {}
    }
  },
  methods: {
    open () {
      this.langSwitch = { ...this.LANG.dashboard.languages.switch }
      this.langDefault = { ...this.LANG.dashboard.languages.default }
      this.show = true
    },
    getMyLanguage () {
      return this.$LANG.get('BR').dashboard.languages.default.value
    },
    save () {
      // console.log('$fs', this.$fs)
      // let text = `export default { ${this.langSwitch} }`
      // this.$fs.writeFileSync('../../teste.js', text)
      // this.$axios({
      //   url: '/statics/teste.txt',
      //   method: 'GET'
      // })
      //   .then(result => {
      //     console.log('result', result)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      this.$axios({
        url: '/statics/teste.txt',
        method: 'POST',
        data: 'teste2'
      })
        .then(result => {
          console.log('result', result)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.selected {
  position: absolute;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  border: 5px solid limegreen;
}
</style>
