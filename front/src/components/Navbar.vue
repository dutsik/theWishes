<template>
  <b-navbar toggleable="md" type="dark" variant="dark"  v-if="isAuthenticated">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
        theWishes
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#" disabled>{{ completedTasks.length }} / {{ activeTasks.length }} / {{ tasks.length }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">




        <b-nav-item :to="{ name: 'Profile'}">
          <fa icon="user" class="mr" /> Profile
        </b-nav-item>
        <b-nav-item @click="logout">
          Logout
        </b-nav-item>


        <!--<b-nav-item-dropdown right>-->
          <!--&lt;!&ndash; Using button-content slot &ndash;&gt;-->
          <!--<template slot="button-content">-->
            <!--<em>User</em>-->
          <!--</template>-->
          <!--<b-dropdown-item href="#">Profile</b-dropdown-item>-->
          <!--<b-dropdown-item href="#">Signout</b-dropdown-item>-->
        <!--</b-nav-item-dropdown>-->
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>

import { mapGetters } from 'vuex'
import axios from 'axios'


export default {
  name: 'navbar',

  computed: {
    ...mapGetters([
                 'isAuthenticated',
                 'completedTasks',
                 'activeTasks'
               ]),

    tasks() {
      return this.$store.state.tasks.all
    },
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
