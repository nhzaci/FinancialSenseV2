<template>
  <v-container fluid>

    <!-- First row for balance -->
    <v-row align="center" justify="center" class="accent mx-lg-5 mx-1 px-lg-5">
      <v-col cols="4" md="3" class="pa-1">
        <OverviewCard title="Balance" value="1234.12" icon="mdi-currency-usd" />
      </v-col>
      <v-col cols="4" md="3" class="pa-1">
        <OverviewCard title="Income" value="1234.12" icon="mdi-trending-up" />
      </v-col>
      <v-col cols="4" md="3" class="pa-1">
        <OverviewCard title="Expense" value="1234.12" icon="mdi-trending-down" />
      </v-col>
      <v-col cols="12" md="3" justify="center" align="center">
        <v-sheet 
          color="accent"
          class="pa-5"
          tile
          elevation="5"
        >
          <v-progress-circular
            :value="40"
            :size="ringSize"
            color="contrast"
            :width="ringWidth"
            :rotate="135"
          >
            <span :class="titleClass" class="font-weight-bold">40%</span>
          </v-progress-circular>
          <p class="mt-2 contrast--text">of your goal of saving 250,000</p>
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <ChartCard title="Balance" icon="mdi-currency-usd" amount="1234.12"/>
      </v-col>
      <v-col cols="12" class="ma-0 pa-0 mt-4">
        <v-expansion-panels
          popout
          hover
          focusable
        >
          <v-expansion-panel
            class="secondary accent--text"
            v-for="(month, i) in months"
            :key="i"
          >
            <v-expansion-panel-header :class="subtitleClass">
              Summary for {{ month }}
              <template v-slot:actions>
                  <v-icon color="green">mdi-plus</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row align="center" justify="center" class="mt-3">
                <v-col cols="4" class="pa-1">
                  <OverviewCard title="Balance" value="1234.12" icon="mdi-currency-usd" />
                </v-col>
                <v-col cols="4" class="pa-1">
                  <OverviewCard title="Income" value="1234.12" icon="mdi-trending-up" />
                </v-col>
                <v-col cols="4" class="pa-1">
                  <OverviewCard title="Expense" value="1234.12" icon="mdi-trending-down" />
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ChartCard from '@/components/dashboard/ChartCard'
  import OverviewCard from '@/components/dashboard/OverviewCard'

  export default {
    components: {
      ChartCard,
      OverviewCard
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
      },
      ringWidth() {
        if (this.breakpoint.mdAndUp) {
          return '20'
        } else {
          return '10'
        }
      },
      ringSize() {
        if (this.breakpoint.mdAndUp) {
          return '150'
        } else {
          return '100'
        }
      }
    },
    data: () => ({
      months: ['Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020'],
      isHydrated: false
    }),
    mounted() {
      this.isHydrated = true
    }
  }
</script>

<style lang="scss" scoped>

</style>