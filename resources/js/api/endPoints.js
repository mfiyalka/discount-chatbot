const endPoints = {
    fetchUsers(attributes) {
        return { url: `users?page=${attributes.page}&role=${attributes.role}&blocked=${attributes.status}&search=${attributes.search}` }
    },

    fetchUser(id) {
        return { url: `users/${id}` }
    },

    addUser: {
        url: 'users',
    },

    editUser(id) {
        return { url: `users/${id}` }
    },

    deleteUser(id) {
        return { url: `users/${id}` }
    },

    blockUser(id) {
        return { url: `users/${id}/blocked` }
    },
};

export default page => {
    return endPoints[page];
}
