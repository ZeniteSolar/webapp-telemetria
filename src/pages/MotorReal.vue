<template>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Motor Duty Cycle
            <v-spacer></v-spacer>
          </v-card-title>
            <div>
              <apexchart type="area" height="350" :options="chartOptions" :series="series" ref="chart"></apexchart>
            </div>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'
import {mapState} from 'vuex'

export default {
  name: "Motor",
  components: { apexchart: VueApexCharts },
  data() {
    return {
      series: [{
        name: 'Duty',
        data: []
      }],
      chartOptions: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          }
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          labels: {},
          title: {
            text: 'Duty Cicle'
          },
        },
        xaxis: {
          type: 'datetime',
        },
        tooltip: {
           x: {
             format: "dd/MM/yyyy - HH:mm:ss.fff"
           },
          shared: false,
        }
      },
    }
  },
  computed: mapState({
    data: state => state.data
  }),
  methods: {
    init() {
      this.$store.dispatch('loadData',{url: '/motor/'}).then(() => {
        this.renderChart();
        window.setTimeout(() => {
          this.appendData();
        }, 1000);
      });
    },
    appendData() {
      this.$store.dispatch('appendData',{url: '/motor/'}).then(() => {
        this.renderChart();
        window.setTimeout(() => {
          this.appendData();
        }, 1000);
      });
    },
    renderChart() {
      this.$refs.chart.updateSeries([{data: this.data}])
    } 
  },
  mounted() {
    this.init();
  }
};

</script>