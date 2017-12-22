<template>
<div class="beat-indexes">
	<header>
		{{trackLength}}
		<st-button-group
			:buttons="buttons"
			@clicked="onButtonClicked">
		</st-button-group>
	</header>
	<ul><li v-for="index in indexes" :key="index">{{index|format}}</li></ul>
</div>
</template>

<script>
import ButtonGroup from '@/renderer/components/ButtonGroup'
import {identity, times} from 'ramda'

export default {
	components: {
		'st-button-group': ButtonGroup,
	},
	computed: {
		indexes() {
			return times(identity, this.trackLength)
		},
	},
	methods: {
		onButtonClicked(action) {
			const mutation = action === 'down'
				? 'decrementTrackLength'
				: 'incrementTrackLength'
			this.$store.commit(mutation)
		},
	},
	data() {
		return {
			buttons: [{
				id: 'down',
			}, {
				id: 'up',
			}],
		}
	},
	props: ['trackLength'],
	filters: {
		format(index) {
			return index.toFixed(0).padStart(2, '0')
		},
	},
}
</script>
