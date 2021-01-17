import Vue from "vue";
import Vuetify from "vuetify/lib";
import Logo from "@/components/Shared/Logo";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#077905",
        secondary: "#828282",
        background: "#ffffff",
        success: "#329D00",
        incomplete: "#F89D13",
        failure: "#8F1D14"
      }
    }
  },
  icons: {
    values: {
      "shopify-logo": {
        component: Logo
      }
    }
  }
});
