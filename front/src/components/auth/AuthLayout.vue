<template>
  <div class="container">
    <div class=" justify-content-center main row">
      <div class="auth-content col-lg-6 col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout'
  }
</script>

