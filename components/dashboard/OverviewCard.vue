<template>
  <v-card
    tile
    color="secondary lighten-1"
    elevation="5"
  >
    <v-card-title :class="titleClass" class="justify-center font-weight-bold">
      <v-icon class="me-2" large>{{ icon }}</v-icon>
      <span v-if="$vuetify.breakpoint.mdAndUp">{{ title }}</span>
    </v-card-title>
    <v-card-text :class="subtitleClass" class="text-center">
      {{ value }}
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: ['title', 'value', 'icon'],
    computed: {
      titleClass() {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return 'display-1'
        } else {
          return 'headline'
        }
      },
      subtitleClass() {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return 'headline'
        } else {
          return 'subtitle-1'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>