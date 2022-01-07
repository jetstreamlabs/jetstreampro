export default {
	namespaced: true,

	state: () => ({
		visible: false,
		message: [],
	}),

	getters: {
		getVisible(state) {
			return state.visible
		},
	},

	mutations: {
		setVisible(state, visible) {
			state.visible = visible
		},
	},

	actions: {
		fire({ commit }) {
			commit('setVisible', true)
		},

		dismiss({ commit }) {
			commit('setVisible', false)
		},
	},
}
