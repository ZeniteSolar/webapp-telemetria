<template>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Log de Dados
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
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
  mounted() {
    
    var mod_params = this.$route.params.mod;
    
    if( mod_params == null){
      Api().get('/data/').then((data)=>{
        this.data = data.data;
      });
    }else{
      var url = "/data/"+mod_params;
      Api().get(url).then((data)=>{
        this.data = data.data;
      })
    }
    
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Data & Time", value: "data_time" },
        { text: "Tópico", value: "mod" },
        { text: "Byte 0 - Módulo", value: "byte[0]" },
        { text: "Byte 1", value: "byte[1]" },
        { text: "Byte 2", value: "byte[2]" },
        { text: "Byte 3", value: "byte[3]" },
        { text: "Byte 4", value: "byte[4]" },
        { text: "Byte 5", value: "byte[5]" },
        { text: "Byte 6", value: "byte[6]" },
        { text: "Byte 7", value: "byte[7]" },
        { text: "Payload (Hex)", value: "info" },
      ],
      data: [],
      type: [],
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
};
</script>