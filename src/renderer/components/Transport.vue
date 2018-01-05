<template>
<ul id="transport">
	<li>
		<button-group
			id="action"
			ref="action"
			:buttons="buttons"
			@clicked="onActionButtonClicked">
		</button-group>
	</li>
	<li class="separator"></li>
	<li>
		<!-- <span>BPM</span> -->
		<spin-box
			id="tempo"
			ref="tempo"
			:min="tempoMin"
			:max="tempoMax"
			:step="tempoStep"
			@value-changed="onTempoValueChanged">
		</spin-box>
	</li>
</ul>
</template>

<script>
import ButtonGroup from '@/renderer/components/ButtonGroup'
import SpinBox from '@/renderer/components/SpinBox'

import '@/renderer/style/transport.scss'

export default {
	name: 'transport',
	components: {
		ButtonGroup,
		SpinBox,
	},
	data() {
		return {
			tempoMax: 300,
			tempoMin: 30,
			tempoStep: 0.01,
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
		onActionButtonClicked(actionId) {
			this.$store.commit(actionId)
		},
		onTempoValueChanged(tempoValue) {
			// console.log(tempoValue)
		},
	},
}
</script>
