<template>
  <div class="card">
    <router-link :to="{ path: '/project', query: { projectId: project_id } }">
  		<img v-bind:src="imgSrc">
  	</router-link>
  </div>
</template>

<!-- JS -->
<script>
export default {
  props: ['project', 'project_id'],
  data () {
    return {
      imgSrc: require(`../assets/sites/${this.project.media[0]}`)
    }
  }
}
</script>

<!-- Styles -->
<style lang="scss">
// Set breakpoints
$tablet-up: 670px;
$tablet-landscape-up: 900px;
$desktop-up: 1200px;

.card {

	width: 90%;
	height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
	margin: 2rem;

	img {
	    flex-shrink: 0;
	    max-width: 100%;
	    max-height: 100%;
      box-shadow: 5px 5px 20px rgba(0,0,0,0.5);
	}

	@media only screen and (min-width: $tablet-up) {
		width: 40%;

		img {
			margin-bottom: 3rem;
		}
	}

}
</style>