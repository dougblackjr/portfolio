<template>
	<div class="card" :style="{ backgroundImage: `url(${imgSrc})` }">
		<a class="card--link" v-link="">
			<h3 class="card--title">{{ project.name}}</h3>
		</a>
	</div>
</template>

<script>

export default {

	props: ['project'],

	data() {
		return {
			imgSrc: require('../sites/${this.project.thumb}')
		}
	}

}

</script>