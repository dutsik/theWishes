<template>
  <div class="login">
    <h2>{{'auth.welcome' | translate}}</h2>
    <form @submit.prevent="login" name="login">


        <h3>Войти</h3>
        <div class="form-group">
          <label for="email">Email</label><br>
          <input v-model="email" autofocus="autofocus" autocomplete="email" class="form-control" type="email" value="" name="email" id="email">
        </div>

        <div class="form-group">
          <label for="password">Пароль</label><br>
          <input v-model="password"  autocomplete="off" class="form-control" type="password" name="password" id="password">
        </div>

        <div class="checkbox" style="width:150px">
          <input name="user[remember_me]" type="hidden" value="0"><input type="checkbox" value="1" name="user[remember_me]" id="user_remember_me">
          <label for="user_remember_me">Запомнить меня</label>
        </div>

      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
          <input type="submit" name="commit" value="Войти" class="btn btn-primary float-right" data-disable-with="Обрабатывается">

        <router-link class='link' :to="{name: 'signup'}">{{'auth.createAccount' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        const { email, password } = this
        this.$store.dispatch('login', { email, password }).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>


