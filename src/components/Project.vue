<template>
  <div class="project">
    <header class="project-header">
      <h1 class="project-header__name">{{ projectData.name }}</h1>
      <a class="project-header__link" :href="properLink(projectData.url)" target="_blank">{{ projectData.url}}</a>
      <p><strong>Problem: </strong>{{ projectData.problem }}</p>
      <p><strong>Solution: </strong>{{ projectData.solution }}</p>
      <p><small>{{ projectData.keywords }}</small></p>
    </header>

    <section class="project-content" id="project-content">
      <div class="project-content__media" v-for="(url, i) in projectData.video">
        <iframe v-bind:src="(url)" frameborder="0" type="text/html" width="400" height="200"></iframe>
      </div>
      <div class="project-content__media" v-for="(image, i) in projectData.media">
        <img v-bind:src="getImage(image)" class="project-content__media">
      </div>
    </section>

    <footer class="cta">
      <h2>
        <router-link :to="{path : '/'}">Explore more projects</router-link>
      </h2>
      <h2>
        <a href="http://dougblackjr.com/#contact">Contact me to get started!</a>
      </h2>
    </footer>

  </div>
</template>

<script>
import sites from '../data/sites.json'
export default {
  data () {
    return {
      projectData: sites[this.$route.query.projectId]
    }
  },
  methods: {
    getImage (name) {
      // return '../assets/sites/' + name
      return require('../assets/sites/' + name)
    },
    properLink (url) {
      return 'http://' + url
    }
  }
}
</script>

<style scoped lang="scss">
// Set breakpoints
$tablet-up: 600px;
$tablet-landscape-up: 900px;
$desktop-up: 1200px;

.project {

  display: flex;
  flex-direction: column;

  &-header {
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

    &__link {
      font-size: 2rem;
    }

    small {
      font-size: 1rem;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    &__media {
      padding-bottom: 1rem;
    }

  }

  @media only screen and (min-width: $tablet-landscape-up) {

    &-content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;

      &__media {
        flex: 0 1 36%;
        padding: 1rem;
      }
    }
  }

  .cta {
    text-align: center;
  }
}

</style>
