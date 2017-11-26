<template>
<div class="track">
	<header>{{name}}</header>
	<ul>
		<step v-for="(step, index) in steps" :key="index" :step="step" :index="index"></step>
	</ul>
</div>
</template>

<script>
import '@/renderer/style/track.scss'
import Step from './Step'

export default {
	components: {
		Step,
	},
	props: {
		name: String,
		steps: {
			type: Array,
			required: true,
		},
	},
}
</script>
