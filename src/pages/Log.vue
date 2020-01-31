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

    let mod_params = this.$route.params.mod;
    let top_params = this.$route.params.top;
    let url = "/data/";

    if( mod_params == null){
      url = "/data/";
    }else{
      if (top_params == null){
        url = "/data/"+mod_params;
      }else{
        url = "/data/"+mod_params+"/"+top_params;
      }
    }

    Api().get(url).then((data)=>{
        this.data = data.data;
      });
    
  },
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