<template>
  <v-app
    light
    app
  >
    <NavBar />

    <!-- TODO: If logged in and on desktop -->
    <NavDrawer v-if="breakpoint.mdAndUp && loggedIn" />
    <!-- TODO: If logged in for mobile -->
    <NavModal v-if="breakpoint.smAndDown" />

    <v-content height="100%" style="background: #1f4287">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import Modal from '@/components/app/Modal'
import NavBar from '@/components/app/NavBar'
import NavDrawer from '@/components/app/NavDrawer'

export default {
  computed: {
    ...mapState({
      loggedIn: state => state.loggedIn
    }),
    breakpoint() {
      return this.isHydrated ? 
        this.$vuetify.breakpoint : 
        { 
          mdAndUp: true, 
          smAndDown: false
        }
    }
  },
  components: {
    NavBar,
    NavDrawer,
    Modal
  },
  data: () => ({
    isHydrated: false
  }),
  mounted() {
    this.isHydrated = true
  }
}
</script>
