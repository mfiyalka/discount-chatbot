import ApiUser from "../../../api/user";

const state = {
    users: [],
    pagination: {
        currentPage: 1,
        perPage: 0,
        pageCount: 0,
        total: 0,
        from: 0,
        to: 0
    },
};

const mutations = {
    SET_USERS(state, response) {
        if (response.status === 200) {
            state.users = response.data;
        }
    },
    ADD_USER(state, response) {
        if (response.status === 201) {
            state.users.data.unshift(response.data.data);
            state.users.data.pop();
            state.pagination.total = state.pagination.total + 1;
            state.pagination.pageCount = Math.ceil(state.pagination.total / state.pagination.perPage);
        }
    },
    UPDATE_USER(state, response) {
        if (response.status === 200) {
            let index = state.users.data.findIndex(item => item.id === response.data.data.id);
            state.users.data[index] = response.data.data;
        }
    },
    DELETE_USER(state, userID) {
        let index = state.users.data.findIndex(item => item.id === userID);
        state.users.data.splice(index, 1);

        state.pagination.total = state.pagination.total - 1;
        state.pagination.pageCount = Math.ceil(state.pagination.total / state.pagination.perPage);
    },
    SET_PAGINATION(state, pagination) {
        state.pagination.pageCount = pagination.pageCount;
        state.pagination.perPage = pagination.perPage;
        state.pagination.total = pagination.total;
        state.pagination.currentPage = pagination.currentPage;
        state.pagination.from = pagination.from;
        state.pagination.to = pagination.to;
    },
};

const actions = {
    fetchUsers(context, attributes) {
        ApiUser.getUsers(attributes)
            .then(response => {
                let pagination = {};
                pagination.pageCount = Math.ceil(response.data.meta.total / response.data.meta.per_page);
                pagination.perPage = response.data.meta.per_page;
                pagination.total = response.data.meta.total;
                pagination.currentPage = attributes.page;
                pagination.from = response.data.meta.from;
                pagination.to = response.data.meta.to;

                context.commit('SET_USERS', response);
                context.commit('SET_PAGINATION', pagination);
            })
            .catch()
    },

    addUser({commit}, userInfo) {
        return new Promise((resolve, reject) => {
            ApiUser.addUser(userInfo)
                .then(response => {
                    commit('ADD_USER', response);
                    resolve();
                })
                .catch(error => {
                    reject(error);
                })
        });
    },

    editUser({commit}, userInfo) {
        return new Promise((resolve, reject) => {
            ApiUser.editUser(userInfo)
                .then(response => {
                    commit('UPDATE_USER', response);
                    resolve();
                })
                .catch(error => {
                    reject(error);
                })
        });
    },

    deleteUser({commit}, userID) {
        return new Promise((resolve, reject) => {
            ApiUser.deleteUser(userID)
                .then(() => {
                    commit('DELETE_USER', userID);
                    resolve();
                })
                .catch(error => {
                    reject(error);
                })
        });
    }
};

const getters = {
    getUsers: state => state.users,
    paginationUsers: state => state.pagination,
};

const userModule = {
    state,
    mutations,
    actions,
    getters
};

export default userModule;
