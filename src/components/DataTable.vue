<template>
    <div>
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
           :footer-props="{itemsPerPageOptions: [100,500,1000,-1]}"
          ></v-data-table>
        </v-card>
    </div>
</template>

<script>
export default {
  name: "DataTable",
  data() {
    return {
      search: "",
      headers: [
        { text: "Data e Horário", value: "data_time" },
        { text: "Módulo", value: "mod" },
        { text: "Info", value: "info" },
        { text: "Signature", value: "byte[0]" },
        { text: "Byte 1", value: "byte[1]" },
        { text: "Byte 2", value: "byte[2]" },
        { text: "Byte 3", value: "byte[3]" },
        { text: "Byte 4", value: "byte[4]" },
        { text: "Byte 5", value: "byte[5]" },
        { text: "Byte 6", value: "byte[6]" },
        { text: "Byte 7", value: "byte[7]" },
        { text: "Time Completo", value: "ts_complete" }
      ],
      data: []
    }
  }
};
</script>