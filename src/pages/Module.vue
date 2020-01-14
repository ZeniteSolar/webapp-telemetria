<template>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Módulos
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
            multi-sort
           :footer-props="{itemsPerPageOptions: [10,25,50,-1]}"
          >
            <template v-slot:item="{ item }">
              <router-link tag="tr" :to="{ path: '/module/' + item.signature }">
                <td class="text-xs-right">{{ item.signature }}</td>
                <td class="text-xs-right">{{ item.name }}</td>
                <td class="text-xs-right">{{ item.description }}</td>
              </router-link>
            </template>
          </v-data-table>
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
        { text: "Assnatura", value: "signature" },
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