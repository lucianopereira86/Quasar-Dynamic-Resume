var Highcharts = require('highcharts')

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts)

export default async ({ Vue }) => {
  Vue.prototype.$Highcharts = Highcharts
}
