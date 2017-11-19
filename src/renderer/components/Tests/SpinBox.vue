<template>
	<div>
		<span>foo</span>
		<spin-box min=0 max=4 step=.01 value=2 @value-changed="onValueChanged"></spin-box>
		<button></button>
	</div>
</template>

<script>
import SpinBox from '@/renderer/components/SpinBox'

export default {
	name: 'ButtonGroup-test',
	data() {
		return {
		}
	},
	components: {
		SpinBox,
	},
	methods: {
		onValueChanged(value) {
			console.log(value)
		},
	},
}
</script>
