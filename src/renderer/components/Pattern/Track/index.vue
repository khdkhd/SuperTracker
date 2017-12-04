<template>
<div class="track" :class="{active: isActive}" @click="onClicked">
	<header>{{name}}</header>
	<ul>
		<st-track-step v-for="(step, index) in steps"
			:key="index"
			:step="step"
			:index="index">
		</st-track-step>
	</ul>
</div>
</template>

<script>
import Step from './Step'

export default {
	components: {
		'st-track-step': Step,
	},
	methods: {
		onClicked() {
			this.$store.commit('setActiveTrackIndex', this.index)
		},
	},
	props: {
		name: String,
		index: {
			type: Number,
			required: true,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		steps: {
			type: Array,
			required: true,
		},
	},
}
</script>
