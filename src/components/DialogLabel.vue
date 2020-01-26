<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
         <v-fab-transition>
              <v-btn
                v-show="!hidden"
                color="pink"
                dark
                absolute
                top
                left
                fab
                @click="openDialog"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
      </template>
      <v-card>
        <form @submit.prevent="saveLabel">
        <v-card-title>
          <span class="headline">Novo Marcador</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="labelinfo.name" label="Nome do Marcador" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="labelinfo.date" label="Data e Hora" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Fechar</v-btn>
          <v-btn color="blue darken-1" text @click="saveLabel">Salvar</v-btn>
        </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Api from '@/services/api';
import moment from 'moment'; 

export default {
    name: "dialogLabel",
    components: {},
    data(){
        return{
            dialog: false,
            labelinfo: {
                name: '',
                date: ''
            }
        }
    },
    methods : {
        openDialog () {
            this.dialog = true;
            this.labelinfo.date = moment().format("YYYY-MM-DD HH:mm:ss.SSS");
        },
        saveLabel (){
            Api().post('/label/', this.labelinfo)
            .then( (response) => {
                alert("Savo com Sucesso" + response);
                this.dialog = false;
                Api().get('/label/').then((data)=>{
                    this.data = data.data;
                });
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>