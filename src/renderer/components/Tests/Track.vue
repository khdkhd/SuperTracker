<template>
	<st-track
		:class="{active: track.isActive}"
		:name="track.name"
		:steps="track.steps">
	</st-track>
</template>

<script>
import '@/renderer/style/pattern.scss'
import Track from '@/renderer/components/Pattern/Track'
import { times } from 'ramda'
import random from 'lodash.random'

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
			track: {
				name: 'Foobar',
				steps: generateSteps(24),
				isActive: true,
			},
		}
	},
	components: {
		'st-track': Track,
	},
	mounted() {
		setInterval(() => {
			const steps = this.track.steps
			steps.push(steps.shift())
		}, 100)
	},
}
</script>


<style lang="scss">
	.track-wrapper {
		margin: 1rem auto;
		text-align: center;
	}
</style>
