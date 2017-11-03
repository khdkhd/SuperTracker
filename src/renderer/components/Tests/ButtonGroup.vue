<template>
	<div>
		<span>foo</span>
		<button-group id="action" :buttons="buttons"></button-group>
		<span>foo</span>
	</div>
</template>

<script>
import ButtonGroup from '@/renderer/components/ButtonGroup'

export default {
	name: 'ButtonGroup-test',
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
	components: {
		ButtonGroup,
	},
	methods: {
	},
}
</script>
