<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<!-- JS -->
<script>
export default {
  name: 'hello',
  data () {
    return {
      sites: {
        'aceshomeimprovementllc.com': 'aces.png'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
body {
  background-image: url(../assets/port-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
}
h1, h2 {
  font-weight: normal;
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
