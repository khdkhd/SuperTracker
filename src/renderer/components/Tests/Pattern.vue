<template>
	<div class="pattern-wrapper">
		<st-pattern :pattern="pattern"></st-pattern>
	</div>
</template>

<script>
import Pattern from '@/renderer/components/Pattern'
import {mapState} from 'vuex'

export default {
	computed: mapState(['pattern']),
	components: {
		'st-pattern': Pattern,
	},
	// mounted() {
	// 	setInterval(() => {
	// 		for (const track of this.tracks) {
	// 			const steps = track.steps
	// 			steps.push(steps.shift())
	// 		}
	// 	}, 100)
	// },
}
</script>

<style lang="scss">
	.pattern-wrapper {
		margin: 1rem auto;
		text-align: center;
	}
</style>
