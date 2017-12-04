<template>
	<div class="pattern" >
		<st-beat-indexes :trackLength="pattern.trackLength"/>
		<st-track v-for="(track, index) in pattern.tracks"
			:key="index"
			:index="index"
			:isActive="isActiveTrack(index)"
			:name="track.name"
			:steps="track.steps">
		</st-track>
	</div>
</template>

<script>
import '@/renderer/style/pattern.scss'

import BeatIndexes from './BeatIndexes'
import Track from './Track'

export default {
	components: {
		'st-track': Track,
		'st-beat-indexes': BeatIndexes,
	},
	methods: {
		isActiveTrack(trackIndex) {
			return this.pattern.activeTrackIndex === trackIndex
		},
	},
	props: ['pattern'],
}
</script>
