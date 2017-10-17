<template>
	<button-group id="action" :buttons="buttons"></button-group>
</template>

<script>
import ButtonGroup from '@/renderer/components/ButtonGroup'

export default {
	name: 'main',
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
