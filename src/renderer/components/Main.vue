<template>
<div id="main-wrapper">
	<transport></transport>
	<!-- <visualisation></visualisation>
	<tracks></tracks> -->
</div>
</template>

<script>
import Tracks from '@/renderer/components/Tracks'
import Transport from '@/renderer/components/Transport'
import Visualisation from '@/renderer/components/Visualisation'

export default {
	name: 'main',
	data() {
		return {
		}
	},
	components: {
		Tracks,
		Transport,
		Visualisation,
	},
	methods: {
	},
}
</script>
