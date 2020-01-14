<template>
  <v-app id="inspire">
    <v-navigation-drawer temporary v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <Menu />
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Zenite App</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        
      <router-view></router-view>

      </v-container>
    </v-content>

    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey darken-2">Create contact</v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col class="align-center justify-space-between" cols="12">
              <v-row align="center" class="mr-0">
                <v-avatar size="40px" class="mx-3">
                  <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt />
                </v-avatar>
                <v-text-field placeholder="Name" />
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field prepend-icon="business" placeholder="Company" />
            </v-col>
            <v-col cols="6">
              <v-text-field placeholder="Job title" />
            </v-col>
            <v-col cols="12">
              <v-text-field prepend-icon="mail" placeholder="Email" />
            </v-col>
            <v-col cols="12">
              <v-text-field type="tel" prepend-icon="phone" placeholder="(000) 000 - 0000" />
            </v-col>
            <v-col cols="12">
              <v-text-field prepend-icon="notes" placeholder="Notes" />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text color="primary">More</v-btn>
          <v-spacer />
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import Menu from "./components/Menu";

export default {
  name: "App",
  components: { Menu: Menu },
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: false,
    items: [
      { icon: "mdi-lock", text: "Login Page", link: "/login" },
      {
        icon: "mdi-sailing",
        text: "All Data Boat List",
        link: "/boat-all-data"
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Boat Modules",
        model: false,
        children: [{ icon: "mdi-battery-80", text: "Bombas de Porão" }]
      }
      // {
      //   icon: "mdi-chevron-up",
      //   "icon-alt": "mdi-chevron-down",
      //   text: "More",
      //   model: false,
      //   children: [
      //     { text: "Import" },
      //     { text: "Export" },
      //     { text: "Print" },
      //     { text: "Undo changes" },
      //     { text: "Other contacts" }
      //   ]
      // },
      // { icon: "mdi-settings", text: "Settings" },
      // { icon: "mdi-message", text: "Send feedback" },
      // { icon: "mdi-help-circle", text: "Help" },
      // { icon: "mdi-cellphone-link", text: "App downloads" },
      // { icon: "mdi-keyboard", text: "Go to the old version" }
    ]
  })
};
</script>
