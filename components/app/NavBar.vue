<template>
  <v-app-bar
    dark
    color="primary"
    app
    clipped-left
    elevate-on-scroll
  >

    <!-- Used to center title on small devices -->
    <v-spacer v-if="breakpoint.smAndDown"></v-spacer>

    <!-- Title here -->
    <v-icon large class="mx-2">mdi-trending-up</v-icon>
    <v-toolbar-title class="font-weight-bold" style="font-size:30px;">
      FinancialSense
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- End icons only visible on md and up -->
    <div v-if="breakpoint.mdAndUp">
      <!-- End Icons Authenticated -->
      <!-- User Profile, settings, favourites -->
      <div v-if="loggedIn">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon large>
                mdi-heart
              </v-icon>
            </v-btn>
          </template>
          <span>Favourites</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon large>
                        mdi-cog
                    </v-icon>
                </v-btn>
            </template>
            <span>Settings</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon large>
                        mdi-account-circle
                    </v-icon>
                </v-btn>
            </template>
            <!-- TODO: 
              1. Replace tooltip with user name
              2. Avatar of user's initials
            -->
            <span>My Profile</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" @click="logout" to="/">
                    <v-icon large>
                        mdi-logout
                    </v-icon>
                </v-btn>
            </template>
            <span>Logout</span>
        </v-tooltip>
      </div>
      
      <!-- End Icons Unauthenticated -->
      <!-- Home, About, Login -->
      <div v-if="!loggedIn">
        <v-btn
          text
          v-for="(route, i) in unauthRoutes"
          :key="i"
          :to="route.to"
        >
          {{ route.title }}
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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
  methods: {
    ...mapMutations({
      setLoggedIn: 'setLoggedIn'
    }),
    logout() {
      this.setLoggedIn(false)
      location.reload()
    }
  },
  data: () => ({
    unauthRoutes: [
      { title: 'Home', to: '/' },
      //{ title: 'About', to: '/about' }, // TODO
      //{ title: 'Contact Us', to: '/contact' }, // TODO
      { title: 'Login', to: '/login' },
      { title: 'Register', to: '/register' }
    ],
    isHydrated: false
  }),
  mounted() {
    this.isHydrated = true
  }
}
</script>

<style lang="scss" scoped>

</style>