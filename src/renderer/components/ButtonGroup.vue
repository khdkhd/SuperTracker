<template>
	<ul class="button-group">
		<li v-for="button of buttons">
			<button
				:id="button.id"
				@click="onButtonClicked"
				type="button"></button>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'transport',
	components: {
	},
	props: ['buttons'],
	methods: {
		onButtonClicked(ev) {
			this.$emit('click', ev.target.id, ev.target)
		},
	},
}
</script>

<style lang="scss" scoped>
.button-group {
	display: inline-block;
	list-style-type: none;
	padding: 0;
	li {
		display: inline-block;
		margin: 0 0;
		button {
			border-radius: 0;
			border-left-width: 0;
		}
		&:first-child button {
			border-left-width: $button-border-thickness;
			border-bottom-left-radius: $button-border-radius;
			border-top-left-radius: $button-border-radius;
		}
		&:last-child button {
			border-bottom-right-radius: $button-border-radius;
			border-top-right-radius: $button-border-radius;
		}
	}
}
</style>
