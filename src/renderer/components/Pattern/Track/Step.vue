<template>
<li :class="{active: step.isActive}">
	<span class="pitch">{{pitch}}</span>&nbsp;&nbsp;<span class="velocity">{{velocity}}</span>
</li>
</template>

<script>
import {isNil} from 'ramda'

const NoteNames = [
	'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',
]

function xor(a, b) {
	return (a || b) && !(a && b)
}

export default {
	components: {
	},
	props: {
		index: {
			type: Number,
			required: true,
		},
		step: {
			type: Object,
			required: true,
			validator({midi, velocity}) {
				return !xor(isNil(midi), isNil(velocity))
			},
		},
	},
	computed: {
		pitch() {
			const {midi} = this.step
			if (!isNil(midi)) {
				if (midi >= 0) {
					const noteName = NoteNames[((midi%12) + 12)%12].padEnd(2, '-')
					const octave = (Math.floor(midi/12)).toFixed(0).padStart(2, '0')
					return `${noteName}${octave}`
				}
				return 'OFF '
			}
			return '....'
		},
		velocity() {
			const {velocity, midi} = this.step
			if (!isNil(velocity)) {
				return midi >= 0
					? `${Math.round(velocity*80).toFixed(0)}`.padStart(2, '0')
					: '  '
			}
			return '..'
		},
	},
}
</script>
