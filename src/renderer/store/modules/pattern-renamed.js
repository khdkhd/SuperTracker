import {clamp, isNil, times} from 'ramda'

const defaultTrackCount = 8
const defaultTrackLength = 64

function generateTrack(index, length) {
	return {
		name: `Track ${index.toFixed(0).padStart(2, '0')}`,
		steps: times(index => ({isActive: false}), length),
	}
}

const state = {
	activeTrackIndex: 0,
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
				track.steps.push({isActive: false})
			}
		}
	},
	setActiveTrackIndex(state, index) {
		state.activeTrackIndex = isNil(index)
			? 0
			: clamp(0, state.tracks.length - 1, index)
	},
}

const actions = {
}

export default {
	state,
	mutations,
	actions,
}
