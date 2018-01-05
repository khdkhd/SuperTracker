<template>
	<div class="pattern" :class="{playing: transport.playing}">
		<st-beat-indexes :trackLength="pattern.trackLength"/>
		<st-track v-for="(track, index) in pattern.tracks"
			:key="index"
			:index="index"
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
	props: ['pattern', 'transport'],
}
</script>
