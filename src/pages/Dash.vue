<template>
    <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          align="start"
          justify="start"
          class="grey lighten-5"
          style="height: 300px;"
        >
          <v-card
            class="ma-3 pa-6"
            outlined
            tile
          >
          Teste
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

// import VueApexCharts from 'vue-apexcharts'
import {mapState} from 'vuex'

export default {
  name: "Dash",
  
  // components: { apexchart: VueApexCharts },
  
  components: {},
  
  data() {
    return {
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