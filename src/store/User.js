export const UserModule = {
    namespaced: true,

    state: {
        user: null
    },

    // mutations are functions that affect the state
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },

    // actions are function that you call thorought your application that call mutations
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    }
}