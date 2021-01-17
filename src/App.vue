<template>
  <v-app>
    <app-navbar />
    <v-content class="ma-5">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { api } from "@/gateways/gallery-api";
import { eventBus } from "@/store/eventBus";
import Navbar from "@/components/Shared/NavBar";

export default {
  name: "App",

  components: {
    "app-navbar": Navbar
  },

  async created() {
    if (this.$store.state.token) {
      await this.getImages();
      eventBus.$emit("GLOBAL_DATA_FETCH_SUCCESS");
    }

    eventBus.$on("LOGIN_SUCCESS", async () => {
      eventBus.$emit("GLOBAL_DATA_FETCH_SUCCESS");
    });

    eventBus.$on("REFRESH_USERS", async () => {
      eventBus.$emit("REFRESH_USERS_SUCCESS");
    });

    eventBus.$on("REFRESH_IMAGES", async () => {
      await this.getImages();
      eventBus.$emit("REFRESH_IMAGES_SUCCESS");
    });
  },

  methods: {

    async getImages() {
      const { data } = await api.get("/images/all", {
        headers: {
        }
      });

      this.$store.dispatch("setImages", data);
    }
  }
};
</script>
