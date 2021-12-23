<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/dbeaver_logo.png" style="max-width:250px;">
    <WelcomePage msg="Best Tech Logos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomePage from '@/components/WelcomePage.vue'

export default {
  name: 'Home',
  components: {
    WelcomePage
  }
}
</script>
