<template>
  <div class="frontpage">
    <h1>Hi, I'm Doug</h1>
    <h2>Full Stack Web Developer</h2>
    <p>I make machines serve their human masters, typically with web and mobile applications! Skilled in: PHP, ExpressionEngine, Laravel, Wordpress, Vue.js, Javascript, Ionic/Angular, and various others. If you have a problem, I can solve it.</p>
    <div v-for='site in sites'>
      <h3>{{site.name}}</h3>
      <h3>{{site.url}}</h3>
    </div>
    <h2><a href="http://dougblackjr.com/#contact">Contact me to get started!</a></h2>
  </div>
</template>

<!-- JS -->
<script>
import card from 'Card.vue'
import siteslist from '../data/sites.js'

export default {
  name: 'hello',
  components: {
    'card': card
  },
  data () {
    return {
      sites: siteslist
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
