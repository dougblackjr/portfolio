<template>
  <div class="project">
    <header class="project-header">
      <h1 class="project-header__name">{{ projectData.name }}</h1>
      <a class="project-header__link" :href="properLink(projectData.url)" target="_blank">{{ projectData.url}}</a>
      <h3 class="project-header__keywords">{{ projectData.keywords }}</h3>
      <p>{{ projectData.description }}</p>
    </header>

    <section class="project-content">
      <div class="project-content__desktopimage">
        <img v-bind:src="getImage(projectData.image)">
      </div>
      <div class="project-content__mobileimage">
        <img v-bind:src="getImage(projectData.mobileimage)">
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
  }

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    &__desktopimage {
      
      padding-bottom: 2rem;

      img {
        width: 80%;
      }
    }
    @media only screen and (min-width: $tablet-landscape-up) {
      flex-direction: row;
      justify-content: space-around;

      &__desktopimage {

        width: 40%;

        img {
          width: 100%;
        }
      }

      &__mobileimage {
        width: 40%;

        img {
          // width: 100%;
        }
      }
    }

  }

  .cta {
    text-align: center;
  }
}

</style>
