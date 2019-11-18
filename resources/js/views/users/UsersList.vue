<template>
    <div>
        <!-- HEADER -->
        <div class="header">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-end">
                        <div class="col">
                            <h1 class="header-title">
                                Users
                            </h1>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-primary lift" @click="showModalCreateUser = true">
                                Create User
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12">

                    <div class="card">

                        <div class="card-header">
                            <div class="row">

                                <!-- Search -->
                                <div class="col-12 col-md-3">
                                    <label class="form-text text-muted" for="search">
                                        <small>Search</small>
                                    </label>
                                    <div class="input-group input-group-merge mb-3">
                                        <el-input
                                            id="search"
                                            placeholder="Type something"
                                            prefix-icon="el-icon-search"
                                            v-model="search">
                                        </el-input>
                                    </div>
                                </div>

                                <!-- Role -->
                                <div class="col-6 col-md-2">
                                    <div class="form-group">
                                        <label class="form-text text-muted" for="selectRole">
                                            <small>Role</small>
                                        </label>
                                        <el-select v-model="roleSelected" placeholder="Select" id="selectRole" @change="getUsers(1)">
                                            <el-option label="All" value="all"></el-option>
                                            <el-option
                                                v-for="item in roleOptions"
                                                :key="item.id"
                                                :label="item.text"
                                                :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </div>

                                <!-- Status -->
                                <div class="col-6 col-md-2">
                                    <div class="form-group">
                                        <label class="form-text text-muted" for="selectStatus">
                                            <small>Status</small>
                                        </label>
                                        <el-select v-model="statusSelected" placeholder="Select" id="selectStatus" @change="getUsers(1)">
                                            <el-option
                                                v-for="item in statusOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="table-responsive mb-0">
                            <table class="table table-sm table-nowrap card-table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th>Customer</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(user, index) in userList.data" :key="user.email">
                                    <td>{{ index++ + pagination.from }}</td>
                                    <td @click="openUser(user)" class="pointer">
                                        <a href="#" class="avatar avatar-sm d-inline-block mr-2">
                                            <img :src="gravatarUrl(user.email)" alt="..." class="avatar-img rounded-circle">
                                        </a>
                                        <span>{{ user.fullName }}</span>
                                    </td>
                                    <td>{{ user.email }}</td>
                                    <td style="text-transform: capitalize;">{{ user.role }}</td>
                                    <td>
                                        <span v-if="user.blocked" class="badge badge-pill badge-danger">Blocked</span>
                                        <span v-if="!user.blocked" class="badge badge-pill badge-success">Active</span>
                                    </td>
                                    <td>
<!--                                        <button class="btn action-button" @click="openUser(user)"><span class="fe fe-eye"></span></button>-->
<!--                                        <button class="btn action-button"><span class="fe fe-edit"></span></button>-->
<!--                                        <button class="btn action-button"><span class="fe fe-trash-2"></span></button>-->
<!--                                        <a class="text-body" href="#"><span class="fe fe-eye"></span></a>-->
<!--                                        <a class="text-body ml-2" href="#"><span class="fe fe-edit"></span></a>-->
<!--                                        <a class="text-body ml-2" href="#"><span class="fe fe-trash-2"></span></a>-->
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="card-footer">
                            <div class="row">
                                <div class="col">
                                    <small>Showing {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total }} entries</small>
                                </div>
                                <div class="col-auto">
                                    <nav aria-label="Page navigation example">
                                        <paginate
                                            v-model="pagination.currentPage"
                                            :click-handler="getUsers"
                                            :prev-text="'&lsaquo;&lsaquo;'"
                                            :next-text="'&rsaquo;&rsaquo;'"
                                            :page-count="pagination.pageCount"
                                            :margin-pages="2"
                                            :page-range="5"
                                            :container-class="'pagination pagination-sm'"
                                            :page-class="'page-item'"
                                            :page-link-class="'page-link'"
                                            :prev-class="'page-item'"
                                            :prev-link-class="'page-link'"
                                            :next-class="'page-item'"
                                            :next-link-class="'page-link'"
                                            :break-view-class="'break-view'"
                                            :break-view-link-class="'break-view-link'"
                                            :first-last-button="false"
                                        ></paginate>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
<!--        <spinner></spinner>-->
        <create-user v-if="showModalCreateUser" @close="showModalCreateUser = false"/>
        <show-edit-user v-if="showModalShowUser" :user="currentUser" @close="showModalShowUser = false"/>
    </div>
</template>

<script>
    import roles from '../../helpers/users/roles';
    import statuses from "../../helpers/users/statuses";
    import md5 from 'md5';
    import Paginate from 'vuejs-paginate';
    import CreateUser from "./CreateUser";
    import ShowEditUser from "./ShowEditUser";
    import Spinner from "../../components/Spinner";

    export default {
        name: "UsersList",
        components: {
            Paginate,
            CreateUser,
            ShowEditUser,
            Spinner
        },
        data() {
            return {
                roleSelected: 'all',
                roleOptions: roles,
                statusSelected: 'all',
                statusOptions: statuses,
                search: ' ',
                showModalCreateUser: false,
                showModalShowUser: false,
                currentUser: {},

                spinner: false
            }
        },
        computed: {
            userList() {
                return this.$store.getters.getUsers;
            },
            pagination() {
                return this.$store.getters.paginationUsers;
            }
        },
        mounted() {
            this.$store.dispatch('fetchUsers',  {
                page: 1,
                role: 'all',
                status: 'all',
                search: ''
            });
        },
        methods: {
            gravatarUrl(email) {
                const hash = md5(email);
                return `https://www.gravatar.com/avatar/${hash}?d=monsterid`;
            },
            getUsers(page) {
                this.$store.dispatch('fetchUsers', {
                    page: page,
                    role: this.roleSelected,
                    status: this.statusSelected,
                    search: this.search
                });
            },
            openUser(user) {
                this.currentUser = user;
                this.showModalShowUser = true;
            }
        },
        watch: {
            search() {
                const searchLength = this.search.trim().length;
                if (searchLength >= 3 || searchLength === 0) {
                    this.getUsers(1);
                }
            }
        }
    }
</script>

<style scoped>
    .action-button {
        padding: 0.1875rem !important;
    }
    .action-button:hover {
        color: #409EFF;
    }
    .pointer:hover {
        cursor: pointer;
    }
</style>
