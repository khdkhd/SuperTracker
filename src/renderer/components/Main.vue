<template>
<div id="main-wrapper">
	<st-transport></st-transport>
	<div style="text-align: center">
		<!-- <st-visualisation></st-visualisation> -->
		<st-pattern :length="length" :tracks="tracks"></st-pattern>
	</div>
</div>
</template>

<script>
import Pattern from '@/renderer/components/Pattern'
import Transport from '@/renderer/components/Transport'
import Visualisation from '@/renderer/components/Visualisation'

import {times} from 'ramda'

const length = 64
const trackCount = 8

export default {
	name: 'main',
	data() {
		return {
			length,
			tracks: times(index => ({
				name: `Track ${index.toFixed(0).padStart(2, '0')}`,
				steps: times(index => ({isActive: false}), length),
				isActive: index === 0,
			}), trackCount),
		}
	},
	components: {
		'st-pattern': Pattern,
		'st-transport': Transport,
		'st-visualisation': Visualisation,
	},
	methods: {
	},
}
</script>
