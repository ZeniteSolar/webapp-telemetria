<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Boat Infos
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
            items-per-page="100"
            :footer-props="{itemsPerPageOptions: [100,500,1000,-1]}"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Api from '@/services/api';

export default {
  name: "Tasks",
  components: {},
  mounted() {
    Api().get('/data').then((data)=>{
      this.data = data.data;
    })
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Data e Horário", value: "data_time" },
        { text: "Módulo", value: "mod" },
        { text: "Info", value: "info" },
        { text: "Time Completo", value: "ts_complete" }
      ],
      data: []
    };
  }
};
</script>