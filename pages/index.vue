<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-row no-gutters align="center">
      <v-col cols="12" md="6"
        class="ma-0 pa-0"
      >
        <v-parallax
          :src="require('../assets/images/home/calculating.jpg')"
          height="600"
        ></v-parallax>
      </v-col>
      <v-col cols="12" md="6"
        class="ma-0 pa-0"
      >
        <v-card
          color="primary"
          class="pa-lg-5 ma-2 ma-lg-5"
          tile
          elevation="0"
        >
          <v-card-title class="justify-center font-weight-bold" :class="titleClass">
            FinancialSense
          </v-card-title>
          <v-card-subtitle class="text-center font-italic" :class="subtitleClass">
            Get a grip on your financials with us
          </v-card-subtitle>
          <v-card-text class="text-center font-light" :class="subtitleClass">
            We simplify the process of tracking expenses by allowing simple categorisation of expenses into wants and needs such that the user can define their expenses and be in control
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              tile
              color="contrast"
              large
              elevation="10"
              to="/register"
              class="mx-2 secondary--text"
            >
              START NOW
            </v-btn>
            <v-btn
              outlined
              tile
              color="contrast"
              large
              elevation="5"
              to="/login"
              class="mx-2"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      class="secondary"
    >
      <v-col
        cols="12"
      >
        <v-card
          tile
          class="pa-lg-5 ma-2 ma-lg-5"
          color="transparent"
          elevation="0"
        >
          <v-carousel
            cycle
            show-arrows-on-hover
            style="width:100%; height:500px"
          >
            <v-carousel-item
              v-for="(img, i) in carousel"
              :key=i
              :src="require('../assets/images/dashboard/' + img)"
            >
            </v-carousel-item>
          </v-carousel>
          <v-card-title :class="titleClass" class="justify-center">
            Why us?
          </v-card-title>
          <v-card-text :class="subtitleClass" class="text-center">
            Track your expenses with beautiful dashboards
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              tile
              color="contrast"
              large
              elevation="5"
              to="/register"
              class="mx-2 secondary--text"
            >
              START NOW
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    carousel: ['dashboard1.png', 'dashboard2.png'],
    isHydrated: false
  }),
  mounted() {
    this.isHydrated = true
  },
  computed: {
    breakpoint() {
      return this.isHydrated ? this.$vuetify.breakpoint : {mdAndUp: true}
    },
    titleClass() {
      if (this.breakpoint.mdAndUp) {
        return 'display-2'
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
    }
  }
}
</script>
