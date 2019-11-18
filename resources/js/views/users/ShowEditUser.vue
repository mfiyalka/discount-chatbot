<template>
    <transition name="modal">
        <div class="modal-mask">

            <div class="modal fade show" style="display: block;" id="myModal">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content modal-container">
                        <div class="modal-card card">

                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Title -->
                                        <h2 class="card-header-title">

                                            <a href="#" class="avatar avatar-sm d-inline-block mr-2">
                                                <img :src="gravatarUrl(user.email)" alt="..." class="avatar-img rounded-circle">
                                            </a>

                                            <span v-if="!editing">
                                                Show User
                                            </span>

                                            <span v-if="editing">
                                                Edit User
                                            </span>

                                        </h2>

                                    </div>
                                    <div class="col-auto">

                                        <!-- Close -->
                                        <button type="button" class="close" @click="$emit('close')">
                                            <span aria-hidden="true">×</span>
                                        </button>

                                    </div>
                                </div>
                            </div>

                            <div class="card-body">

                                <form class="mb-4" @keydown="serverErrors.clear($event.target.name)">

                                    <div class="row">

                                        <!-- First name -->
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label for="fieldFirstName">
                                                    First name
                                                </label>
                                                <input
                                                    ref="firstName"
                                                    :readonly="!editing"
                                                    v-model.trim="firstName"
                                                    name="firstName"
                                                    :class="{ 'is-invalid': $v.firstName.$error || serverErrors.has('firstName') }"
                                                    @input="$v.firstName.$touch"
                                                    type="text"
                                                    id="fieldFirstName"
                                                    class="form-control">
                                                <div class="invalid-feedback">
                                                    {{ serverErrors.get('firstName') }}
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Last name -->
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label for="fieldLastName">
                                                    Last name
                                                </label>
                                                <input
                                                    :readonly="!editing"
                                                    v-model.trim="lastName"
                                                    name="lastName"
                                                    :class="{ 'is-invalid': $v.lastName.$error || serverErrors.has('lastName') }"
                                                    @input="$v.lastName.$touch"
                                                    type="text"
                                                    id="fieldLastName"
                                                    class="form-control">
                                                <div class="invalid-feedback">
                                                    {{ serverErrors.get('lastName') }}
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Email address -->
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="fieldEmail" class="mb-1">Email address</label>
                                                <input
                                                    :readonly="!editing"
                                                    v-model.trim="email"
                                                    name="email"
                                                    :class="{ 'is-invalid': $v.email.$error || serverErrors.has('email') }"
                                                    @input="$v.email.$touch"
                                                    type="email"
                                                    id="fieldEmail"
                                                    class="form-control">
                                                <div class="invalid-feedback">
                                                    {{ serverErrors.get('email') }}
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <!-- Password -->
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label for="fieldPassword">Password</label>
                                                <input
                                                    :readonly="!editing"
                                                    v-model.trim="password"
                                                    name="password"
                                                    :class="{ 'is-invalid': $v.password.$error || serverErrors.has('password') }"
                                                    @input="$v.password.$touch"
                                                    type="password"
                                                    id="fieldPassword"
                                                    class="form-control">
                                                <div class="invalid-feedback">
                                                    {{ serverErrors.get('password') }}
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Confirm password -->
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label for="fieldConfirmPassword">Confirm password</label>
                                                <input
                                                    :readonly="!editing"
                                                    v-model.trim="confirmPassword"
                                                    :class="{ 'is-invalid': $v.confirmPassword.$error }"
                                                    @input="$v.confirmPassword.$touch"
                                                    type="password"
                                                    id="fieldConfirmPassword"
                                                    class="form-control">
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <!-- Role -->
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label for="fieldRole" class="mb-1">Role</label>
                                                <select2 :disabled="!editing" :options="roleList" v-model="role" class="form-control" id="fieldRole"/>
                                            </div>
                                        </div>

                                        <!-- Status -->
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="mb-1">Status</label>
                                                <el-switch
                                                    :disabled="!editing"
                                                    style="display: block"
                                                    v-model="status"
                                                    active-color="#13ce66"
                                                    inactive-color="#ff4949"
                                                    active-text="Active"
                                                    inactive-text="Blocked">
                                                </el-switch>
                                            </div>
                                        </div>

                                    </div>

                                </form>

                            </div>

                            <div class="card-footer">
                                <button v-if="!editing" @click.prevent="toggleEdit" class="btn btn-primary">
                                    Edit
                                </button>

                                <button v-if="editing" @click.prevent="updateUser" :disabled="isValidateForm" class="btn btn-success">
                                    Save
                                </button>

                                <button class="btn btn-link text-muted" @click="$emit('close')">
                                    Close
                                </button>

                                <button v-if="!deleting" @click.prevent="toggleDelete" class="btn float-right btn-trash" title="Delete User">
                                    <span class="fe fe-trash-2"></span>
                                    <!-- кнопка недоступна для ролі не адмін і самому собі-->
                                </button>

                                <div v-if="deleting" class="pt-2 float-right">

                                    <span class="alert alert-secondary">

                                        Delete user?

                                        <button @click.prevent="deleteUser" class="btn btn-sm btn-danger">
                                            Delete
                                        </button>

                                        <button @click.prevent="toggleDelete" class="btn btn-sm btn-light">
                                            Cancel
                                        </button>
                                    </span>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import md5 from 'md5';
    import Select2 from '../../components/Select2';
    import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
    import Errors from '../../Errors';

    export default {
        name: "ShowEditUser",
        components: {
            Select2
        },
        props: {
            user: {}
        },
        data() {
            return {
                editing: false,
                deleting: false,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                status: true,
                role: 'operator',
                roleList: [
                    { id: 'admin', text: 'Admin' },
                    { id: 'operator', text: 'Operator' },
                    { id: 'manager', text: 'Manager' }
                ],
                serverErrors: new Errors(),
            }
        },
        validations: {
            firstName: {
                required,
                minLength: minLength(3),
            },
            lastName: {
                required,
                minLength: minLength(3),
            },
            email: {
                required,
                email,
            },
            password: {
                minLength: minLength(8)
            },
            confirmPassword: {
                sameAsPassword: sameAs('password')
            }
        },
        computed: {
            isValidateForm() {
                return this.$v.firstName.$invalid
                    || this.$v.lastName.$invalid
                    || this.$v.email.$invalid
                    || this.$v.password.$invalid
                    || this.$v.confirmPassword.$invalid
                    || this.serverErrors.any();
            },
            isChanges() {
                return this.user.name !== this.firstName
                    || this.user.surname !== this.lastName
                    || this.user.email !== this.email
                    || this.user.role !== this.role
                    || this.user.blocked !== !this.status;
            }
        },
        methods: {
            toggleEdit() {
                this.editing = !this.editing;
                this.$refs.firstName.focus();
            },
            toggleDelete() {
                this.deleting = !this.deleting;
            },
            gravatarUrl(email) {
                const hash = md5(email);
                return `https://www.gravatar.com/avatar/${hash}?d=monsterid`;
            },
            updateUser() {
                if (this.isChanges) {
                    this.$store.dispatch('editUser', {
                        id: this.user.id,
                        name: this.firstName,
                        surname: this.lastName,
                        email: this.email,
                        password: this.password,
                        role: this.role,
                        blocked: !this.status
                    })
                        .then(() => {
                            this.$message({
                                showClose: true,
                                message: 'Congrats, this is a success message.',
                                type: 'success',
                                duration: 5000
                            });
                            this.editing = !this.editing;
                        })
                        .catch((error) => {
                            this.serverErrors.record(error.response.data.errors);
                        });
                } else {
                    this.editing = !this.editing;
                }
            },
            deleteUser() {
                this.$store.dispatch('deleteUser', this.user.id)
                    .then(() => {
                        this.$message({
                            showClose: true,
                            message: 'Congrats, this is a success message.',
                            type: 'success',
                            duration: 5000
                        });
                        this.$emit('close');
                    })
                    .catch();
            }
        },
        mounted() {
            this.firstName = this.user.name;
            this.lastName = this.user.surname;
            this.email = this.user.email;
            this.role = this.user.role;
            this.status = !this.user.blocked;

            $("#fieldRole").select2({
                dropdownParent: $("#myModal"),
                minimumResultsForSearch: -1
            });
        }
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-container {
        transition: all .3s ease;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .btn-trash:hover {
        color: #F56C6C;
    }
</style>
