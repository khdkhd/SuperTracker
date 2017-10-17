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
	height: 1.5rem;
	list-style-type: none;
	margin: 0;
	padding: 0;
	li {
		display: inline-block;
		height: 100%;
		margin: 0 0;
		button {
			background-color: $button-bg-color;
			color: inherit;
			display: inline-block;
			border: {
				color: $button-border-color;
				style: solid;
				width: $button-border-thickness;
			}
			border-right: none;
			font-family: FontAwesome;
			font-size: $button-font-size;
			height: 100%;
			min-width: $button-min-width;
			margin: 0;
			padding: 0;
			outline: none;
			text-align: center;
			text-shadow: none;
			transition: all 0.25s;
			&:hover {
				color: $blue;
				@include neon-glow;
			}
			&::after {
				content: '\f128';
			}
		}
		&:first-child button {
			border-bottom-left-radius: $button-group-border-radius;
			border-top-left-radius: $button-group-border-radius;
		}
		&:last-child button {
			border-bottom-right-radius: $button-group-border-radius;
			border-top-right-radius: $button-group-border-radius;
			border-right: 1px solid $button-border-color;
		}
	}
}
</style>
