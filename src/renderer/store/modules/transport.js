const state = {
	playing: false,
}

const mutations = {
	play(state) {
		state.playing = true
	},
	stop(state) {
		state.playing = false
	},
	loop(state) {
	},
	edit() {
	},
}

const actions = {
}

export default {
	state,
	mutations,
	actions,
}
