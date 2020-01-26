<template>
    <v-row>
      <v-col cols="12">

        <v-card>
          <v-card-title>
            Marcadores
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
           :footer-props="{itemsPerPageOptions: [25,50,100,-1]}"
          ></v-data-table>

          <DialogLabel />

        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import Api from '@/services/api';
import DialogLabel from "../components/DialogLabel";

export default {
  name: "Data",
  components: { DialogLabel : DialogLabel },
  mounted() {
      Api().get('/label/').then((data)=>{
        this.data = data.data;
      });
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Data", value: "date" },
        { text: "Hora", value: "time" },
        { text: "Nome", value: "name" }
      ],
      data: [],
      type: []
    };
  },
};
</script>