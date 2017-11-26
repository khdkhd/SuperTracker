<template>
	<div class="track-wrapper" >
		<st-track v-for="(track,index) in tracks"
			:key="index"
			:class="{active: track.isActive}"
			:name="track.name"
			:steps="track.steps">
		</st-track>
	</div>
</template>

<script>
import Track from '@/renderer/components/Track'
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
	props: {
		length: {
			type: Number,
			default: 24,
		},
		trackCount: {
			type: Number,
			default: 8,
		},
	},
	data() {
		return {
			tracks: times(index => ({
				name: `Track ${index.toFixed(0).padStart(2, '0')}`,
				steps: generateSteps(this.length),
				isActive: index === 0,
			}), this.trackCount),
		}
	},
	components: {
		'st-track': Track,
	},
	methods: {
	},
	mounted() {
		setInterval(() => {
			for (const track of this.tracks) {
				const steps = track.steps
				steps.push(steps.shift())
			}
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
