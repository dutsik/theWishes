<template>

  <!--<nav class="bg-indigo">-->
    <!--<div class="container mx-auto px-4 py-4">-->
      <!--<div class="flex justify-between">-->
        <!--<div>-->
          <!--<router-link class="text-white no-underline font-bold text-3xl hover:underline" to="/" exact>-->
            <!--theWishes-->
          <!--</router-link>-->
        <!--</div>-->

        <!--<div>-->
          <!--<router-link class="text-white no-underline hover:underline ml-4" :to="{ name: 'Profile'}" exact>-->
            <!--<fa icon="user" class="mr" />-->
            <!--Profile-->
          <!--</router-link>-->

          <!--<button @click="logout" class="text-grey-light ml-4 border border-white py-2 px-4 rounded hover:bg-white hover:text-indigo">-->
            <!--Logout-->
          <!--</button>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</nav>-->
  <b-navbar toggleable="md" type="dark" variant="dark"  v-if="isAuthenticated">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
        theWishes
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <!--<b-navbar-nav>-->
        <!--<b-nav-item href="#">Link</b-nav-item>-->
        <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
      <!--</b-navbar-nav>-->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <!--<b-nav-form>-->
          <!--<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>-->
          <!--<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
        <!--</b-nav-form>-->

        <!--<b-nav-item-dropdown text="Lang" right>-->
          <!--<b-dropdown-item href="#">EN</b-dropdown-item>-->
          <!--<b-dropdown-item href="#">ES</b-dropdown-item>-->
          <!--<b-dropdown-item href="#">RU</b-dropdown-item>-->
          <!--<b-dropdown-item href="#">FA</b-dropdown-item>-->
        <!--</b-nav-item-dropdown>-->



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

  computed: mapGetters([
    'isAuthenticated'
  ]),

  methods: {
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
