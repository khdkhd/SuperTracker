<template>
	<div>
		<span>foo</span>
		<button-group id="action" :buttons="buttons" @click="onClick"></button-group>
		<span>foo</span>
	</div>
</template>

<script>
import ButtonGroup from '@/renderer/components/ButtonGroup'
import random from 'lodash.random'
import {times} from 'ramda'

const letters = 'abcdefghijklmnopqrstuvwxyz'
function generateId() {
	return times(() => letters[random(0, letters.length - 1)], 4).join('')
}

export default {
	name: 'ButtonGroup-test',
	data() {
		return {
			buttons: [{
				id: generateId(),
			}],
		}
	},
	components: {
		ButtonGroup,
	},
	methods: {
		onClick(...args) {
			if (this.buttons.length < 16) {
				this.buttons.push({
					id: generateId(),
				})
			}
		},
	},
}
</script>
