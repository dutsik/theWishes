<template>
  <!--<div class="login">-->
    <!--<h2>{{'auth.welcome' | translate}}</h2>-->
    <!--<form @submit.prevent="login" name="login">-->


      <!--<h3>Войти</h3>-->
      <!--<div class="form-group">-->
        <!--<label for="email">Email</label><br>-->
        <!--<input v-model="email" autofocus="autofocus" autocomplete="email" class="form-control" type="email" value="" name="email" id="email">-->
      <!--</div>-->

      <!--<div class="form-group">-->
        <!--<label for="password">Пароль</label><br>-->
        <!--<input v-model="password"  autocomplete="off" class="form-control" type="password" name="password" id="password">-->
      <!--</div>-->

      <!--<div class="checkbox" style="width:150px">-->
        <!--<input name="user[remember_me]" type="hidden" value="0"><input type="checkbox" value="1" name="user[remember_me]" id="user_remember_me">-->
        <!--<label for="user_remember_me">Запомнить меня</label>-->
      <!--</div>-->

      <!--<div class="actions">-->
        <!--<input type="submit" name="commit" value="Войти" class="button right" data-disable-with="Обрабатывается">-->
      <!--</div>-->
      <!--<br>-->
      <!--<router-link class='link' :to="{name: 'signup'}">{{'auth.createAccount' | translate}}</router-link>-->
    <!--</form>-->
  <!--</div>-->

  <div class="signup">
    <h2>{{'auth.createNewAccount' | translate}}</h2>
    <form  @submit.prevent="signup"  name="signup">
      <div class="form-group">
        <label  for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
          <input v-model="user.email" type="text" id="email" class="form-control"  required="required"/>
        </div>
      <div class="form-group">
        <label for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
          <input v-model="user.password" type="password" id="password" class="form-control"  required="required"/>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit">
          {{'auth.signUp' | translate}}
        </button>
        <router-link class='link' :to="{name: 'login'}">{{'auth.alreadyJoined' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'signup',
    data () {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      signup: function () {
        console.log(this)
        const { user } = this
        this.$store.dispatch('signup', { user }).then(() => {
          this.$router.push('/')
        })
      }
    }

  }
</script>


