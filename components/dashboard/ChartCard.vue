<template>
  <v-card
    tile
    color="secondary"
    elevation="5"
  >
    <v-toolbar color="contrast" flat>
      <v-toolbar-title class="secondary--text font-weight-bold" :class="subtitleClass">
        {{ title }} Chart
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
            color="secondary"
          >
            Category
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list class="accent">
          <v-list-item
            v-for="(category, i) in categories"
            :key="i"
            @click="title = category"
          >
            {{ category }}
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-card-text class="ma-0 pa-0">
      <v-sheet
        color="accent"
      >
        <v-sparkline
          line-width="2"
          padding="16"
          smooth
          color="contrast"
          :value="value"
          :labels="label"
          :height="chartHeight"
        >
        </v-sparkline>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      value: [12, 44, 75, 200, 132, 100, 140, 210],
      label: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      title: 'Balance',
      categories: ['Balance', 'Income', 'Expense']
    }),
    computed: {
      titleClass() {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return 'display-1'
        } else {
          return 'headline'
        }
      },
      chartHeight() {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return '75'
        } else {
          return '150'
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