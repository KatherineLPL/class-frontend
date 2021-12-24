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
      .get('http://127.0.0.1:3000/api/v1/logos')
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