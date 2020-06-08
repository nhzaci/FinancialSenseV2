<template>
  <v-container class="fill-height" fluid>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12" sm="8" md="4">
        <v-card
          elevation="12"
          color="secondary"
        >
          <v-toolbar
            color="accent"
          >
            <v-toolbar-title>
              Login
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Username"
                name="username"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>
              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="accent"
              to="/dashboard"
              class="ma-3"
              tile
              @click="setLoggedIn(true)"
            >
              Login
            </v-btn>
            <v-spacer></v-spacer>
            <span>Need an account?</span>
            <v-btn
              color="contrast"
              to="/register"
              class="ma-3 primary--text"
              tile
            >
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      setLoggedIn: 'setLoggedIn'
    })
  }
}
</script>