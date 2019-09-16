<template>
  <q-page class="relative-position" v-if="CONFIG">
    <div id="my-container" class="absolute-center"></div>
    <div class="absolute-top text-center text-grey text-h5 q-mt-lg">
      <cite>"{{CONFIG.home.message}}"</cite>
    </div>
    <div class="absolute-center">
      <q-avatar size="200px">
        <q-img :src="CONFIG.home.image" />
      </q-avatar>
      <BtnMenu
        :offset="[50, -190]"
        icon="fas fa-award"
        :text="CONFIG.labels.menu.awards"
        clickable
        @click.native="openDrawer(0)"
      />
      <BtnMenu
        :offset="[145, -40]"
        icon="fas fa-graduation-cap"
        :text="CONFIG.labels.menu.education"
        clickable
        @click.native="openDrawer(1)"
      />
      <BtnMenu
        :offset="[60, 110]"
        icon="fab fa-github"
        :text="CONFIG.labels.menu.portfolio"
        clickable
        @click.native="openDrawer(2)"
      />
      <BtnMenu
        :offset="[-120, 110]"
        icon="fas fa-code"
        :text="CONFIG.labels.menu.coding"
        clickable
        @click.native="openDrawer(3)"
      />
      <BtnMenu
        :offset="[-190, -40]"
        icon="fas fa-address-card"
        :text="CONFIG.labels.menu.profile"
        clickable
        @click.native="openDrawer(4)"
      />
      <BtnMenu
        :offset="[-130, -190]"
        icon="fas fa-user-tie fa"
        :text="CONFIG.labels.menu.jobs"
        clickable
        @click.native="openDrawer(5)"
      />
    </div>
    <DrawerAwards ref="DrawerAwards" :CONFIG="CONFIG" />
    <DrawerEducation ref="DrawerEducation" :CONFIG="CONFIG" />
    <DrawerPortfolio ref="DrawerPortfolio" :CONFIG="CONFIG" />
    <DrawerCoding ref="DrawerCoding" :CONFIG="CONFIG" />
    <DrawerProfile ref="DrawerProfile" :CONFIG="CONFIG" />
    <DrawerJobs ref="DrawerJobs" :CONFIG="CONFIG" />
  </q-page>
</template>

<script>
import BtnMenu from '../components/home/BtnMenu'
import DrawerAwards from '../components/drawer/DrawerAwards'
import DrawerEducation from '../components/drawer/DrawerEducation'
import DrawerPortfolio from '../components/drawer/DrawerPortfolio'
import DrawerCoding from '../components/drawer/DrawerCoding'
import DrawerProfile from '../components/drawer/DrawerProfile'
import DrawerJobs from '../components/drawer/DrawerJobs'
export default {
  name: 'PageIndex',
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
    DrawerJobs
  },
  data () {
    return {
      chart: null,
      arrayDrawer: [],
      color: '#9c27b0'
    }
  },
  mounted () {
    this.arrayDrawer = [{
      name: 'Awards'
    }, {
      name: 'Education'
    }, {
      name: 'Portfolio'
    }, {
      name: 'Coding'
    }, {
      name: 'Profile'
    }, {
      name: 'Jobs'
    }]
    this.$Highcharts.setOptions({
      colors: [this.color]
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
  methods: {
    RenderPieChart (elementId, dataList) {
      const self = this
      this.chart = new this.$Highcharts.Chart({
        chart: {
          renderTo: elementId,
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          width: 650,
          height: 650
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
            data: dataList
          }]
      })
    },
    openDrawer (index, isColumnClick) {
      let drawer = this.arrayDrawer[index]
      if (!isColumnClick) { this.chart.series[0].data[index].firePointEvent('click') }
      this.$refs[`Drawer${drawer.name}`].open()
    }
  }
}
</script>

<style scoped>
</style>
