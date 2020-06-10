<template>
  <v-card
    tile
    color="secondary lighten-1"
    elevation="5"
  >
    <v-card-title :class="titleClass" class="justify-center font-weight-bold">
      <v-icon class="me-2" large>{{ icon }}</v-icon>
      <span v-if="breakpoint.mdAndUp">{{ title }}</span>
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
        if (this.breakpoint.mdAndUp) {
          return 'display-1'
        } else {
          return 'headline'
        }
      },
      subtitleClass() {
        if (this.breakpoint.mdAndUp) {
          return 'headline'
        } else {
          return 'subtitle-1'
        }
      },
      breakpoint() {
        return this.isHydrated ? 
          this.$vuetify.breakpoint : 
          { 
            mdAndUp: true, 
            smAndDown: false
          }
      }
    },
    data: () => ({
      isHydrated: false
    }),
    mounted() {
      this.isHydrated = true
    }
  }
</script>

<style lang="scss" scoped>

</style>