<!-- TODO: Implement logout functionality + conditional sign up and login buttons -->
<template>
  <nav>
    <v-app-bar app class="background">
      <v-app-bar-nav-icon
        v-if="mobileView"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-btn icon router to="/" color="white" class="ml-3">
        <v-icon x-large>$vuetify.icons.shopify-logo</v-icon>
      </v-btn>

      <v-toolbar-title class="black--text">
        <span class="font-weight-light display-1">Shopify Application</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="!mobileView">
        <v-btn
          text
          tile
          router
          to="/"
          min-height="115%"
          class="offset-y primary--text"
          >home</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/submit"
          min-height="115%"
          v-if="$store.state.isLoggedIn"
          class="offset-y primary--text"
          >submit</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/images"
          min-height="115%"
          v-if="$store.state.isLoggedIn"
          class="offset-y primary--text"
          >images</v-btn
        >
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-list-item-group active-class="offset-y primary--text">
          <v-list-item to="/">
            <v-list-item-title class="offset-y primary--text"
              >HOME</v-list-item-title
            >
          </v-list-item>

          <v-list-item v-if="$store.state.isLoggedIn" to="/submit">
            <v-list-item-title class="offset-y primary--text"
              >SUBMIT</v-list-item-title
            >
          </v-list-item>

          <v-list-item v-if="$store.state.isLoggedIn" to="/images">
            <v-list-item-title class="offset-y primary--text"
              >IMAGES</v-list-item-title
            >
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      drawer: false,
    };
  },

  watch: {
    group() {
      this.drawer = false;
    }
  },

  computed: {
    mobileView() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },

};
</script>
