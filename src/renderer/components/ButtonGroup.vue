<template>
	<div class="button-group">
		<button v-for="button in buttons"
			:id="button.id"
			@click="onButtonClicked"
			type="button">
		</button>
	</div>
</template>

<script>
import '@/renderer/style/button-group.scss'
export default {
	props: ['buttons'],
	methods: {
		onButtonClicked(ev) {
			this.$emit('clicked', ev.target.id, ev.target)
		},
	},
}
</script>
