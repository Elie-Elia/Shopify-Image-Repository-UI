<template>
  <v-card hover tile router :to="'/images/' + data._id" class="py-3 px-5 mx-2">
    <v-row>
      <v-col cols="12" class="title">{{ data.title }} </v-col>
    </v-row>
    <v-row>
      <img :alt="data.description" :src="data.link" />
    </v-row>
    <v-row>
      <v-col cols="12" class="subtext grey--text text-truncate">{{
        data.description
      }}</v-col>
    </v-row>
    <v-row :v-if="data.tags.length > 0">
      <v-col cols="12">
        <v-chip-group column>
          <v-chip
            label
            v-for="(tag, index) in data.tags.filter(
              tag => tag.trim().length > 0
            )"
            :key="index"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        Created:
        {{
          new Date(data.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ImagesImage",

  props: ["data"]
};
</script>
