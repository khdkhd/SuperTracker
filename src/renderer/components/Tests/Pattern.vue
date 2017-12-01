<template>
	<st-pattern :length="length" :tracks="tracks"></st-pattern>
</template>

<script>
import Pattern from '@/renderer/components/Pattern'
import { times } from 'ramda'
import random from 'lodash.random'

const length = 24
const trackCount = 8

function generateSteps(count) {
	return times(index => {
		const step = random(0, 1) === 0
			? { midi: random(-1, 127), velocity: random(0, 1, true) }
			: { }
		return Object.assign(step, {
			isActive: index === 0,
		})
	}, count)
}

export default {
	data() {
		return {
			length,
			tracks: times(index => ({
				name: `Track ${index.toFixed(0).padStart(2, '0')}`,
				steps: generateSteps(length),
				isActive: index === 0,
			}), trackCount),
		}
	},
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
	.track-wrapper {
		margin: 1rem auto;
		text-align: center;
	}
</style>
