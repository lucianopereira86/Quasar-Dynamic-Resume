<template>
  <div>
    <div id="my-container" class="absolute-center"></div>
    <div class="absolute-center">
      <q-avatar size="200px">
        <q-img :src="LANG.home.image" />
      </q-avatar>
      <BtnMenu
        :offset="[50, -190]"
        icon="fas fa-award"
        :text="LANG.labels.menu.awards"
        clickable
        @click.native="openDrawer(0)"
      />
      <BtnMenu
        :offset="[145, -40]"
        icon="fas fa-graduation-cap"
        :text="LANG.labels.menu.education"
        clickable
        @click.native="openDrawer(1)"
      />
      <BtnMenu
        :offset="[60, 110]"
        icon="fab fa-git-alt"
        :text="LANG.labels.menu.portfolio"
        clickable
        @click.native="openDrawer(2)"
      />
      <BtnMenu
        :offset="[-120, 110]"
        icon="fas fa-code"
        :text="LANG.labels.menu.coding"
        clickable
        @click.native="openDrawer(3)"
      />
      <BtnMenu
        :offset="[-190, -40]"
        icon="fas fa-address-card"
        :text="LANG.labels.menu.profile"
        clickable
        @click.native="openDrawer(4)"
      />
      <BtnMenu
        :offset="[-130, -190]"
        icon="fas fa-user-tie fa"
        :text="LANG.labels.menu.jobs"
        clickable
        @click.native="openDrawer(5)"
      />
    </div>
    <DrawerAwards ref="DrawerAwards" :LANG="LANG" />
    <DrawerEducation ref="DrawerEducation" :LANG="LANG" />
    <DrawerPortfolio ref="DrawerPortfolio" :LANG="LANG" />
    <DrawerCoding ref="DrawerCoding" :LANG="LANG" />
    <DrawerProfile ref="DrawerProfile" :LANG="LANG" />
    <DrawerJobs ref="DrawerJobs" :LANG="LANG" />
  </div>
</template>

<script>
import BtnMenu from './BtnMenu'
import DrawerAwards from './DrawerAwards'
import DrawerEducation from './DrawerEducation'
import DrawerPortfolio from './DrawerPortfolio'
import DrawerCoding from './DrawerCoding'
import DrawerProfile from './DrawerProfile'
import DrawerJobs from './DrawerJobs'
export default {
  props: {
    LANG: Object
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
      arrayDrawer: []
    }
  },
  mounted () {
    this.arrayDrawer = [
      {
        name: 'Awards'
      },
      {
        name: 'Education'
      },
      {
        name: 'Portfolio'
      },
      {
        name: 'Coding'
      },
      {
        name: 'Profile'
      },
      {
        name: 'Jobs'
      }
    ]
    this.$Highcharts.setOptions({
      colors: [this.LANG.home.menuBgColor]
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
          }
        ]
      })
    },
    openDrawer (index, isColumnClick) {
      let drawer = this.arrayDrawer[index]
      if (!isColumnClick) {
        this.chart.series[0].data[index].firePointEvent('click')
      }
      this.$refs[`Drawer${drawer.name}`].open()
    }
  }
}
</script>

<style>
</style>
