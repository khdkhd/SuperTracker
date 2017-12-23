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
			this.$store.commit('setCurrentTrackIndex', this.index)
		},
	},
	computed: {
		isActive() {
			return this.$store.state.cursor.currentTrackIndex === this.index
		},
	},
	props: {
		name: String,
		index: {
			type: Number,
			required: true,
		},
		steps: {
			type: Array,
			required: true,
		},
	},
}
</script>
