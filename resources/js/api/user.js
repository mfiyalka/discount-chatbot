import endPoints from "./endPoints";

export default {
    getUsers(attributes) {
        const urlData = endPoints('fetchUsers')(attributes);
        return new Promise((resolve, reject) => {
            axios
                .get(urlData.url)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                })
        });
    },

    getUser(userInfo) {
        const urlData = endPoints('fetchUser');
    },

    addUser(userInfo) {
        const urlData = endPoints('addUser');
        return new Promise((resolve, reject) => {
            axios
                .post(urlData.url, userInfo)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        });
    },

    editUser(userInfo) {
        const urlData = endPoints('editUser')(userInfo.id);
        return new Promise((resolve, reject) => {
            axios
                .put(urlData.url, userInfo)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        });
    },

    deleteUser(userID) {
        const urlData = endPoints('deleteUser')(userID);
        return new Promise((resolve, reject) => {
            axios
                .delete(urlData.url)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        });
    },

    blockUser(userInfo) {

    },

    getGravatar(id) {

    }

};
