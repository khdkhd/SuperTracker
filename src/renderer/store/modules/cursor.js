import {clamp, isNil} from 'ramda'

const state = {
	currentTrackIndex: 0,
	currentBeatIndex: 0,
}

const mutations = {
	setCurrentBeatIndex(state, index) {
		state.currentBeatIndex = isNil(index)
			? 0
			: clamp(0, this.state.pattern.trackLength - 1, index)
	},
	setCurrentTrackIndex(state, index) {
		state.currentTrackIndex = isNil(index)
			? 0
			: clamp(0, this.state.pattern.tracks.length - 1, index)
	},
	nextBeat(state) {
		this.commit(
			'setCurrentBeatIndex',
			(state.currentBeatIndex + 1)%this.state.pattern.trackLength
		)
	},
	previousBeat(state) {
		const trackLength = this.state.pattern.trackLength
		this.commit(
			'setCurrentBeatIndex',
			(state.currentBeatIndex - 1 + trackLength)%trackLength
		)
	},
	nextTrack(state) {
		this.commit(
			'setCurrentTrackIndex',
			(state.currentTrackIndex + 1)%this.state.pattern.tracks.length
		)
	},
	previousTrack(state) {
		const trackCount = this.state.pattern.tracks.length
		this.commit(
			'setCurrentTrackIndex',
			(state.currentTrackIndex - 1 + trackCount)%trackCount
		)
	},
}

const actions = {
}

export default {
	state,
	mutations,
	actions,
}
