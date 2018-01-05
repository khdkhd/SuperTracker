<template>
<div id="main-wrapper">
	<st-transport></st-transport>
	<div style="text-align: center">
		<!-- <st-visualisation></st-visualisation> -->
		<st-pattern :pattern="pattern" :transport="transport"></st-pattern>
	</div>
</div>
</template>

<script>
import Pattern from '@/renderer/components/Pattern'
import Transport from '@/renderer/components/Transport'
import Visualisation from '@/renderer/components/Visualisation'

import {mapState} from 'vuex'

export default {
	name: 'main',
	components: {
		'st-pattern': Pattern,
		'st-transport': Transport,
		'st-visualisation': Visualisation,
	},
	computed: mapState(['pattern', 'transport']),
	methods: {
	},
}
</script>
