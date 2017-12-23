import {clamp, times} from 'ramda'

const defaultTrackCount = 8
const defaultTrackLength = 64

function generateTrack(index, length) {
	return {
		name: `Track ${index.toFixed(0).padStart(2, '0')}`,
		steps: times(index => ({}), length),
	}
}

const state = {
	trackLength: defaultTrackLength,
	tracks: times(trackIndex => {
		return generateTrack(trackIndex, defaultTrackLength)
	}, defaultTrackCount),
}

const mutations = {
	decrementTrackLength(state) {
		const length = clamp(1, 512, state.trackLength - 1)
		if (state.trackLength !== length) {
			state.trackLength = length
			for (const track of state.tracks) {
				track.steps.pop()
			}
		}
	},
	incrementTrackLength(state) {
		const length = clamp(1, 512, state.trackLength + 1)
		if (state.trackLength !== length) {
			state.trackLength = length
			for (const track of state.tracks) {
				track.steps.push({})
			}
		}
	},
}

const actions = {
}

export default {
	state,
	mutations,
	actions,
}
