import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

const state = {
    token: localStorage.getItem('access_token') || null,
};

const mutations = {
    retrieveToken(state, token) {
        state.token = token;
    },
    destroyToken(state) {
        state.token = null;
    }
};

const actions = {
    retrieveToken(context, credentials) {

        return new Promise((resolve, reject) => {

            axios.post('/login', {
                username: credentials.username,
                password: credentials.password
            })
                .then(response => {
                    const token = response.data.access_token;
                    localStorage.setItem('access_token', token);
                    context.commit('retrieveToken', token);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });

        });
    },

    destroyToken(context) {

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

        if (context.getters.loggedIn) {

            return new Promise((resolve, reject) => {

                axios.post('/logout')
                    .then(response => {
                        localStorage.removeItem('access_token');
                        context.commit('destroyToken');
                        resolve(response);
                    })
                    .catch(error => {
                        localStorage.removeItem('access_token');
                        context.commit('destroyToken');
                        //console.log(error);
                        reject(error);
                    });

            });

        }
    }
};

const getters = {
    loggedIn (state) {
        return state.token !== null;
    }
};

const authModule = {
    state,
    mutations,
    actions,
    getters
};

export default authModule;
