<template>
	<ul class="button-group">
		<li v-for="button in buttons">
			<button
				:id="button.id"
				@click="onButtonClicked"
				type="button">
			</button>
		</li>
	</ul>
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
