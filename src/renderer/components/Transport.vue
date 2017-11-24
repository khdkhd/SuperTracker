<template>
<div id="transport">
	<ul>
		<li><button-group id="action" :buttons="buttons"></button-group></li>
		<li class="separator"></li>
		<li>
			<spin-box
				ref="tempo"
				min=30
				max=300
				step=.01
				value=120
				@value-changed="onTempoValueChanged">
			</spin-box>
		</li>
	</ul>
</div>
</template>

<script>
import ButtonGroup from '@/renderer/components/ButtonGroup'
import SpinBox from '@/renderer/components/SpinBox'
export default {
	name: 'transport',
	components: {
		ButtonGroup,
		SpinBox,
	},
	data() {
		return {
			buttons: [
				{
					id: 'play',
				},
				{
					id: 'loop',
				},
				{
					id: 'stop',
				},
				{
					id: 'edit',
				},
			],
		}
	},
	methods: {
		onTempoValueChanged(tempo) {
			console.log(tempo)
		},
	},
}
</script>

<style lang="scss">
$transport-bar-height: 1.5rem;
$item-separator-color: lighten($app-bg-color, 10);
$item-spacing: .03125rem;
$item-spacing: 0;
$item-margin: 0;
$item-margin: .25rem;

#transport {
	#action button {
		&#play::after {
			content: '\f04b';
		}
		&#stop::after {
			content: '\f04d';
		}
		&#loop::after {
			content: '\f01e';
		}
		&#edit::after {
			content: '\f111';
		}
		&#pattern-follow-mode::after {
			content: '\f175';
		}
	}
	ul {
		height: $transport-bar-height;
		list-style-type: none;
		margin: 0;
		padding: 0;
		li {
			display: inline-block;
			line-height: $transport-bar-height;
			height: 100%;
			margin: $item-spacing 0;
			&.separator {
				border: none;
				border-left: 1px solid $item-separator-color;
				vertical-align: middle;
				&::after {
					content: ' ';
				}
			}
		}
	}
}
</style>
