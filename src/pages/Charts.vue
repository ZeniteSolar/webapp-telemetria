<template>
    <v-row>
      <v-col cols="12">
        <v-card>
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
        name: 'XYZ MOTORS',
        data: []
      }],
      chartOptions: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        dataLabels: {
          position: 'top'
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
          min: 0
        },
        xaxis: {
          type: 'datetime',
        },
        tooltip: {
           x: {
             format: "dd MMM yyyy  - HH:mm:ss.SSS"
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

      let mod = this.$route.params.mod;
      let top = this.$route.params.top;
      let url = 'motor';
 
      if(this.$route.params.byteL == null){
        if(mod == null){
          url = 'motor';
        }else{
          let byte = this.$route.params.byte;
          url = '/motor/' + mod + '/' + top + '/' + byte;
        }
      }else{

          let byteL = this.$route.params.byteL;
          let byteH = this.$route.params.byteH;

          url = '/motor/' + mod + '/' + top + '/' + byteL + '/' + byteH;

      }
        


      this.$store.dispatch('loadData',{url: url}).then(() => {
        this.renderChart();
        // window.setTimeout(() => {
        //   this.appendData();
        // }, 1000);
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