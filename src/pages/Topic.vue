<template>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Listagem de Todas Informações de Módulos e Tópicos
          </v-card-title>
            <json-view :data="data" rootKey="Módulos" :maxDepth="2" />
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import Api from '@/services/api';
import { JSONView } from "vue-json-component";

export default {
  name: "Topics",
  components: {
    "json-view": JSONView 
  },
  mounted() {
    
    var mod_params = this.$route.params.mod;
    
    if( mod_params == null){
      Api().get('/m/ls-all').then((data)=>{
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
        { text: "Assinatura", value: "signature" },
        { text: "Nome", value: "name" },
        { text: "Descrição", value: "description" }
      ],
      data: [],
      type: [],
    };
  },
  methods : {
    getColor (signature) {
        if (signature > 400) return 'red'
        else if (signature > 200) return 'orange'
        else return 'green'
      }
  }
};
</script>