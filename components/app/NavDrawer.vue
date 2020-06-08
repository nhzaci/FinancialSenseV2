<template>
  <v-navigation-drawer
    expand-on-hover
    permanent
    clipped
    app
    class="accent"
  >

    <v-list nav>
      <v-list-item
        v-for="route in routes"
        :key="route.title"
        nuxt
        :to="route.path"
      >
        <v-icon>{{ route.icon }}</v-icon>
        <v-list-item-title class="mx-2">
          {{ route.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        routes: state => state.navDrawer.routes
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>