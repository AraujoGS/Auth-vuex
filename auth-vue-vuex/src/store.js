import Vuex from 'vuex';
import Vue from 'vue';
import http from '@/http';

Vue.use(Vuex);

const estado = {
    token: null,
    usuario: {}
}

const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
        state.token = token;
        state.usuario = usuario;

    },
    DESLOGAR_USUARIO(state) {
        state.token = null;
        state.usuario = {};
    }
}

const actions = {
    login({ commit }, usuario) {
        return new Promise((resolve, reject) => {
            http.post('auth/login', usuario)
                .then(response => {
                    commit('DEFINIR_USUARIO_LOGADO', {
                        token: response.data.access_token,
                        usuario: response.data.user
                    });
                    resolve();
                })
                .catch(erro => reject(erro));
        })
    }
}

const getters = {
    usuarioLogado: state =>{
        return Boolean(state.token);
    }
}

export default new Vuex.Store({
    state: estado,
    mutations,
    actions,
    getters
})