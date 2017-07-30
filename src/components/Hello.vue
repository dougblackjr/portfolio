<template>
  <div class="frontpage">
    <div class="frontpage-content">
      <h1>Hi, I'm Doug</h1>
      <h2>Full Stack Web Developer</h2>
      <ul class="frontpage-content__links">
        <li><a target="_blank" href="http://linkedin.com/in/dougblackjr2">Linkedin</a></li>
        <li><a target="_blank" href="http://www.twitter.com/dougblackjr">Twitter</a></li>
        <li><a target="_blank" href="http://dougblackjr.com#contact">Email</a></li>
      </ul>
      <p>I make machines serve their human masters, typically with web and mobile applications! Skilled in: PHP, ExpressionEngine, Laravel, Wordpress, Vue.js, Javascript, Ionic/Angular, and various others. If you have a problem, I can solve it.</p>
    </div>
    <div class="cards">
      <card v-for='(site, i) in sites' :project="site"></card>
    </div>
    <div class="cta">
      <h2>
        <a href="http://dougblackjr.com/#contact">Contact me to get started!</a>
      </h2>
    </div>
  </div>
</template>

<!-- JS -->
<script>
import card from './Card.vue'
import sites from '../data/sites.json'

export default {
  name: 'hello',
  components: {
    'card': card
  },
  data () {
    return {
      sites
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Set breakpoints
$tablet-up: 600px;
$tablet-landscape-up: 900px;
$desktop-up: 1200px;

.frontpage {

  display: flex;
  flex-direction: column;

  &-content {
    align-self: center;
    padding: 0 1rem;
    text-align: center;

    @media only screen and (min-width: $tablet-up) {
      max-width: 60%;
    }

    h1 {
      margin-bottom: 0;
    }

    h2 {
      margin-top: 0;
    }

    p {
      font-size: 2rem;
      color: white;
    }

    &__links {
      
      padding: 0;

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        list-style: none;
        display: inline-block;
        padding: 0 1rem;
      }
    }
  }
}

.cards {
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: $tablet-up) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}

.cta {
  text-align: center;
}
</style>
