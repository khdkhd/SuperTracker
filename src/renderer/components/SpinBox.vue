<template>
	<div class="spin-box">
		<input
			ref="input"
			type="number"
			name=""
			:min="min"
			:max="max"
			:step="step"
			v-model.number="value">
		<div class="spinbox-arrow-wrapper">
			<button ref="up" class="spinbox-arrow" data-action="up" @click="onArrowClicked"/>
			<button ref="down" class="spinbox-arrow" data-action="down" @click="onArrowClicked"/>
		</div>
	</div>
</template>

<script>
import { clamp, defaultTo } from 'ramda'
import '@/renderer/style/spinbox.scss'

const defaultMin = 0
const defaultMax = 100
const defaultValue = 0
const defaultPrecision = 2
const defaultStep = 1

export default {
	name: 'spin-box',
	components: {
	},
	props: {
		max: {
			type: Number,
			default: defaultMax,
		},
		min: {
			type: Number,
			default: defaultMin,
		},
		precision: {
			type: Number,
			default: defaultPrecision,
		},
		step: {
			type: Number,
			default: defaultStep,
		},
	},
	data() {
		return {
			value: clamp(this.min, this.max, defaultTo(defaultValue, this.value)),
		}
	},
	methods: {
		onArrowClicked({ target }) {
			const sign = target === this.$refs.up ? 1 : -1
			const precision = defaultTo(defaultPrecision, this.precision)
			this.value = Number(clamp(this.min, this.max, this.value + sign*this.step).toFixed(precision))
			this.$emit('value-changed', this.value)
		},
	},
	computed: {
		initMax() {
			return defaultTo(defaultMax, Number(this.max))
		},
		initMin() {
			return defaultTo(defaultMin, Number(this.min))
		},
		initStep() {
			return defaultTo(defaultStep, Number(this.step))
		},
		initValue() {
			return clamp(
				Number(this.min),
				Number(this.max),
				defaultTo(defaultValue, Number(this.value))
			)
		},
	},
}
</script>
