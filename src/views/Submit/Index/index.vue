<!-- TODO: implement Announcement card for Home view -->
<template>
  <v-container>
    <v-card class="pa-2">
      <v-container>
        <v-row>
          <v-card-title>Submit a New Image</v-card-title>
        </v-row>
        <v-row class="my-5 py-5">
          <v-col cols="0" sm="3"></v-col>

          <v-col cols="12" sm="6" class="my-5 py-5">
            <v-form v-model="isFormValid">
              <v-text-field
                type="title"
                name="title"
                class="mb-3"
                label="Title"
                width="50%"
                @keyup.enter="submit"
                v-model="image.title"
                :rules="[rules.required]"
                required
              ></v-text-field>

              <v-text-field
                type="description"
                name="description"
                class="mb-3"
                label="Description"
                width="50%"
                v-model="image.description"
                :rules="[rules.required]"
                @keyup.enter="submit"
                required
              ></v-text-field>

              <v-file-input
                accept="image/*"
                label="File input"
                v-model="image.file"
                :rules="[rules.required]"
              ></v-file-input>

              <v-select
                v-model="image.tags"
                :items="options"
                item-text="name"
                item-value="name"
                chips
                label="Tags (Optional)"
              ></v-select>

            </v-form>

            <div class="primary--text" v-html="error"></div>

            <v-btn
              block
              class="offset-y white--text"
              @click="submit"
              color="primary"
              type="submit"
              :loading="loading"
              :disabled="!isFormValid"
              >Submit
            </v-btn>
          </v-col>

          <v-col cols="0" sm="3"></v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { api } from "@/gateways/gallery-api";
import { eventBus } from "@/store/eventBus";

export default {
  name: "Upload",
  data() {
    return {
      error: "",
      loading: false,
      image: {
        title: "",
        description: "",
        isPublic: "",
        file: "",
        tags: []
      },
      options: [
        { name: "food" },
        { name: "travel" },
        { name: "coffee" },
        { name: "friends" },
        { name: "school" },
        { name: "sports" }
      ],
      rules: {
        required: value => !!value || "Required"
      },
      isFormValid: false
    };
  },

  created() {
    this.tags = this.$store.tags;
  },

  methods: {
    async submit() {
      this.loading = true;
      try {
        let formData = new FormData();
        formData.append("image", this.image.file);
        formData.append("title", this.image.title);
        formData.append("description", this.image.description);
        formData.append("tags", this.image.tags);
        await api.post("images", formData, {
          headers: {
            Authorization: this.$store.state.token,
            "Content-Type": "multipart/form-data"
          }
        });
        eventBus.$emit("REFRESH_IMAGES");
        eventBus.$on("REFRESH_IMAGES_SUCCESS", () => {
          this.$router.push("/images", () => {});
        });
      } catch (err) {
        this.error = err.response.data.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
}
</style>
