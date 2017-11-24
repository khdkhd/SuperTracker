<template>
	<div>
		<span>foo</span>
		<spin-box :initValue="value0"></spin-box>
		<spin-box :min=-1 :initValue="value1"></spin-box>
		<button></button>
	</div>
</template>

<script>
import SpinBox from '@/renderer/components/SpinBox'

export default {
	name: 'ButtonGroup-test',
	data() {
		return {
			value0: 2,
			value1: 0,
			value2: 0,
			value3: 0,
			value4: 0,
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
