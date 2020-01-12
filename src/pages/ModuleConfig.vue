<template>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Informações
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
           :footer-props="{itemsPerPageOptions: [10,25,50,-1]}"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import Api from '@/services/api';

export default {
  name: "Tasks",
  components: {},
  mounted() {
    
    var mod_params = this.$route.params.mod;
    
    if( mod_params == null){
      Api().get('/module').then((data)=>{
        this.data = data.data;
      });
    }else{
      var base = "module"
      // var mod_params = this.$route.params.mod;
      var url = "/" + base + "/" + mod_params;
      Api().get(url).then((data)=>{
        this.data = data.data;
      })
    }
    
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Nome", value: "data_time" },
        { text: "Descrição", value: "mod" },
        { text: "Assinatura", value: "info" }
      ],
      data: [],
      type: [],
    };
  },
};
</script>