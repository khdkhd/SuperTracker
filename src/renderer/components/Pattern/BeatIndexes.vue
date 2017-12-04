<template>
<div class="beat-indexes">
	<header>{{indexes.length}}</header>
	<ul><li v-for="index in indexes" :key="index">{{index|format}}</li></ul>
</div>
</template>

<script>
import {identity, times} from 'ramda'
export default {
	computed: {
		indexes() {
			return times(identity, this.trackLength)
		},
	},
	props: ['trackLength'],
	filters: {
		format(index) {
			return index.toFixed(0).padStart(2, '0')
		},
	},
}
</script>
