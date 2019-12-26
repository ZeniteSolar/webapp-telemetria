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
          <v-data-table :headers="headers" :items="data" :search="search"></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Api from "@/service/api";

export default {
  name: "Tasks",
  data() {
    return {
      search: "",
      headers: [
        { text: "Código", value: "code" },
        { text: "Simbolo", value: "symbol" },
        { text: "Valor", value: "rate" },
        { text: "Descrição", value: "description" },
        { text: "Float", value: "rate_float" }
      ],
      data: [
        {
          code: "USD",
          symbol: "&#36;",
          rate: "7,207.3117",
          description: "United States Dollar",
          rate_float: 7207.3117
        },
        {
          code: "GBP",
          symbol: "&pound;",
          rate: "5,544.5849",
          description: "British Pound Sterling",
          rate_float: 5544.5849
        },
        {
          code: "EUR",
          symbol: "&euro;",
          rate: "6,494.8761",
          description: "Euro",
          rate_float: 6494.8761
        }
      ]
    };
  }
};
</script>