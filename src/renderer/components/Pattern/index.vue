<template>
	<div class="pattern" >
		<beat-indexes :indexes="indexes"/>
		<st-track v-for="(track, index) in tracks"
			:key="index"
			:class="{active: track.isActive}"
			:name="track.name"
			:steps="track.steps">
		</st-track>
	</div>
</template>

<script>
import '@/renderer/style/pattern.scss'
import BeatIndexes from './BeatIndexes'
import Track from './Track'

import {identity, times} from 'ramda'

export default {
	components: {
		'st-track': Track,
		'beat-indexes': BeatIndexes,
	},
	methods: {
	},
	props: ['tracks', 'length'],
	computed: {
		indexes() {
			return times(identity, this.length)
		},
	},
}
</script>

<style lang="scss">
</style>
