<template>
  <div class="card" :style="{ backgroundImage: `url(${imgSrc})` }">
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
$tablet-up: 600px;
$tablet-landscape-up: 900px;
$desktop-up: 1200px;

.card {
	width: 90%;
	height: 200px;
	background-size: cover;
	padding: 2rem;
	margin: 2rem 0;

	@media only screen and (min-width: $tablet-up) {
		width: 45%;
	}

	@media only screen and (min-width: $desktop-up) {
		width: 30%
	}
}
</style>