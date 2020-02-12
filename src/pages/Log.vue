<template>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-text-field
            label="Módulo"
            v-model="filter.mod"
          ></v-text-field>
          <v-text-field
            label="Tópico"
            v-model="filter.top"
          ></v-text-field>
          <v-text-field
            label="Hora Mínima"
            v-model="filter.min_time"
          ></v-text-field>
          <v-text-field
            label="Hora Máxima"
            v-model="filter.max_time"
          ></v-text-field>
          <v-text-field
            label="Limite"
            v-model="filter.limit"
          ></v-text-field>
          <v-btn class="ma-2" outlined color="teal" @click="updateLog">Filtrar</v-btn>
          
    
            <!-- <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field> -->
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="data"
            :search="search"
            dense
            multi-sort
           :footer-props="{itemsPerPageOptions: [100,500,1000,-1]}"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import Api from '@/services/api';



export default {
  name: "Data",
  components: {},
  data() {
    return {
      search: "",
      headers: [
        { text: "Data & Time", value: "date" },
        { text: "Módulo", value: "mod" },
        { text: "Tópico", value: "top" },
        { text: "Byte 1", value: "bytes[1]" },
        { text: "Byte 2", value: "bytes[2]" },
        { text: "Byte 3", value: "bytes[3]" },
        { text: "Byte 4", value: "bytes[4]" },
        { text: "Byte 5", value: "bytes[5]" },
        { text: "Byte 6", value: "bytes[6]" },
        { text: "Byte 7", value: "bytes[7]" }
      ],
      data: [],
      type: [],
      filter: {
        mod: "",
        top: "",
        min_time: "",
        max_time: "",
        limit: ""
      },
      breadcrumbs: [
        {
          text: 'Início',
          disabled: false,
          href: '/',
        },
        {
          text: 'All Data',
          disabled: false,
          href: 'module',
        }
      ],
    };
  },
  methods : {
    updateLog(){
      // this.data.data = [];
      // let params = "";

      

      let mod = ( this.filter.mod != "" ) ? "mod="+this.filter.mod : "";
      let top = ( this.filter.top != "" ) ? "top="+this.filter.top : "";
      let min_time = ( this.filter.min_time != "" ) ? "date>"+this.filter.min_time : "";
      let max_time = ( this.filter.max_time != "" ) ? "date<"+this.filter.max_time : "";
      let limit = ( this.filter.limit != "" ) ? "limit="+this.filter.limit : "";

    
      let url = "/data/" + "?" + mod + "&" + top + "&" + min_time + "&" + max_time + "&" + limit;

      // if( mod_params == null){
      //   url = "/data/";
      // }else{
      //   if (top_params == null){
      //     url = "/data/"+mod_params;
      //   }else{
      //     url = "/data/"+mod_params+"/"+top_params;
      //   }
      // }

      Api().get(url).then((data)=>{
          this.data = data.data;
      });

      

    } 
  },
  mounted() {
    this.updateLog();
  }
};
</script>