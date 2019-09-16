<template>
  <div v-if="model">
    <div class="q-py-md relative-position">
      <span class="text-h5" :style="getStyleColor()">{{model[CONFIG.lang()].title}}</span>
      <div class="q-ma-sm absolute-right" v-if="isDebug()">
        <q-btn icon="edit" round outline @click="showConfig('HomeMenu')" color="white"></q-btn>
      </div>
    </div>
    <div id="my-container" class="absolute-center"></div>
    <div class="absolute-center">
      <q-avatar size="200px">
        <q-img :src="model.picture" />
      </q-avatar>
      <BtnMenu
        v-for="(menu, index) in menus"
        :key="index"
        :offset="menu.offset"
        :icon="menu.icon"
        :text="model[CONFIG.lang()].menu[menu.module]"
        clickable
        @click.native="openDrawer(index)"
      />
    </div>
    <DrawerAwards ref="DrawerAwards" :CONFIG="CONFIG" />
    <DrawerEducation ref="DrawerEducation" :CONFIG="CONFIG" />
    <DrawerPortfolio ref="DrawerPortfolio" :CONFIG="CONFIG" />
    <DrawerCoding ref="DrawerCoding" :CONFIG="CONFIG" />
    <DrawerProfile ref="DrawerProfile" :CONFIG="CONFIG" />
    <DrawerJobs ref="DrawerJobs" :CONFIG="CONFIG" />

    <DialogConfig
      ref="DialogHomeMenuConfig"
      title="MENU"
      :CONFIG="CONFIG"
      :model="model"
      :save="(model) => saveConfig('home', model, () => initChart())"
    >
      <template v-slot:default="slotProps">
        <ConfigHomeMenu :lang="slotProps.lang" :model="slotProps.model" />
      </template>
    </DialogConfig>
  </div>
</template>

<script>
import BtnMenu from './BtnMenu'
import DrawerAwards from '../drawer/DrawerAwards'
import DrawerEducation from '../drawer/DrawerEducation'
import DrawerPortfolio from '../drawer/DrawerPortfolio'
import DrawerCoding from '../drawer/DrawerCoding'
import DrawerProfile from '../drawer/DrawerProfile'
import DrawerJobs from '../drawer/DrawerJobs'
import DialogConfig from '../utils/DialogConfig'
import ConfigHomeMenu from '../config/home/ConfigHomeMenu'
import GeneralMixins from '../../mixins/general.mixins'
export default {
  name: 'HomeMenu',
  props: {
    CONFIG: Object
  },
  components: {
    BtnMenu,
    DrawerAwards,
    DrawerEducation,
    DrawerPortfolio,
    DrawerCoding,
    DrawerProfile,
    DrawerJobs,
    DialogConfig,
    ConfigHomeMenu
  },
  mixins: [GeneralMixins],
  data () {
    return {
      chart: null,
      arrayDrawer: [],
      menus: [],
      model: null
    }
  },
  mounted () {
    this.model = JSON.parse(JSON.stringify(this.CONFIG.home))
    console.log('model', this.model)
    this.menus.push({
      offset: [-20, 210],
      icon: 'fas fa-award',
      module: 'awards'
    }, {
      offset: [-110, 60],
      icon: 'fas fa-graduation-cap',
      module: 'education'
    }, {
      offset: [-20, -90],
      icon: 'fab fa-git-alt',
      module: 'portfolio'
    }, {
      offset: [140, -90],
      icon: 'fas fa-code',
      module: 'coding'
    }, {
      offset: [240, 50],
      icon: 'fas fa-address-card',
      module: 'profile'
    }, {
      offset: [150, 210],
      icon: 'fas fa-user-tie fa',
      module: 'jobs'
    })
    this.arrayDrawer = ['Awards', 'Education', 'Portfolio', 'Coding', 'Profile', 'Jobs']
    setTimeout(() => {
      this.initChart()
    }, 200)
  },
  methods: {
    getStyleColor () {
      return { color: this.model.color }
    },
    initChart () {
      this.$Highcharts.setOptions({
        colors: [this.model.menuBgColor]
      })

      this.RenderPieChart('my-container', [
        ['', 15.6],
        ['', 15.6],
        ['', 15.6],
        ['', 15.6],
        ['', 15.6],
        ['', 15.6]
      ])
    },
    RenderPieChart (elementId, dataList) {
      const self = this
      this.chart = new this.$Highcharts.Chart({
        chart: {
          renderTo: elementId,
          backgroundColor: 'transparent',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          width: 550,
          height: 550
        },
        title: {
          text: ' '
        },
        tooltip: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
          pie: {
            size: 500,
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            }
          },
          series: {
            cursor: 'pointer',
            point: {
              events: {
                click: function () {
                  self.openDrawer(this.index, true)
                }
              }
            }
          }
        },
        series: [
          {
            type: 'pie',
            name: 'Browser share',
            data: dataList,
            color: '#ff0000'
          }
        ]
      })
    },
    openDrawer (index, isColumnClick) {
      let drawer = this.arrayDrawer[index]
      if (!isColumnClick) {
        this.chart.series[0].data[index].firePointEvent('click')
      }
      this.$refs[`Drawer${drawer}`].open()
    }
  }
}
</script>

<style>
</style>
