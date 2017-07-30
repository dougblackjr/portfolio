<template>
  <div class="card">
  	<a class="card-link" v-link="{ name: 'Project', params: { projectId: i } }">
  		<img v-bind:src="imgSrc">
  	</a>
  </div>
</template>

<!-- JS -->
<script>
export default {
  props: ['project'],
  data () {
    return {
      imgSrc: require(`../assets/sites/${this.project.image}`)
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
	    max-height: 100%
	}

	@media only screen and (min-width: $tablet-up) {
		width: 40%;

		img {
			margin-bottom: 3rem;
		}
	}

}
</style>