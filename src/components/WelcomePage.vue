<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      We all love a good tech logo, here's a collection of cute, cool and funny tech logos that I spent exactly 20 minutes look for, to use in this sample project for class.
    </p>
    <h3>View by Categories</h3>
    <ul>
      <router-link style="margin-right:10px;" to="/cute">Cute Logos</router-link>
      <router-link style="margin-right:10px;" to="/cool">Cool Logos</router-link>
      <router-link style="margin-right:10px;" to="/funny">Funny Logos</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
