<template>
	<div class="spin-box">
		<input
			ref="input"
			type="number"
			name=""
			@input="onValueChanged"
			:min="min"
			:max="max"
			:step="step"
			:value="initValue">
		<div class="spinbox-arrow-wrapper">
			<button ref="up" class="spinbox-arrow" data-action="up" @click="onArrowClicked"/>
			<button ref="down" class="spinbox-arrow" data-action="down" @click="onArrowClicked"/>
		</div>
	</div>
</template>

<script>
import { clamp, defaultTo } from 'ramda'
import '@/renderer/style/spinbox.scss'

const defaultMin = -Infinity
const defaultMax = Infinity
const defaultVal = 0
const defaultPrecision = 2

export default {
	name: 'spin-box',
	components: {
	},
	props: ['min', 'max', 'precision', 'step', 'value'],
	methods: {
		currentValue() {
			return Number(this.$refs.input.value)
		},
		onValueChanged(ev) {
			this.$emit('value-changed', Number(ev.target.value))
		},
		onArrowClicked({ target }) {
			const sign = target === this.$refs.up ? 1 : -1
			const incr = sign*Number(this.step)
			const precision = defaultTo(defaultPrecision, this.precision)
			const value = Number((this.currentValue() + incr).toFixed(precision))
			this.$refs.input.value = value
			this.$emit('value-changed', value)
		},
	},
	computed: {
		initValue() {
			return clamp(
				Number(defaultTo(defaultMin, this.min)),
				Number(defaultTo(defaultMax, this.max)),
				Number(defaultTo(defaultVal, this.value))
			)
		},
	},
}
</script>
