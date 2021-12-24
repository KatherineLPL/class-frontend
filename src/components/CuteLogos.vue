<template>
  <div>
    <h1>Cute Logos</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      data: null
    }
  },
  mounted () {
    axios
      .get('https://tech-logos.herokuapp.com/api/v1/logos')
      .then(response => {
        this.data = response
        console.log(response);
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  } 
}
</script>

<style scoped lang="scss">

</style>