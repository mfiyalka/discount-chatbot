<template>
    <div>
        <!-- HEADER -->
        <div class="header">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-end">
                        <div class="col">
                            <h1 class="header-title">
                                Dashboard
                            </h1>
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

                                    <!-- Label -->
                                    <label class="form-text text-muted" for="search">
                                        <small>Search</small>
                                    </label>

                                    <!-- Input -->
                                    <div class="input-group input-group-merge mb-3">
                                        <input type="text" id="search" class="form-control form-control-prepended" placeholder="">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <span class="fe fe-search"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Messenger -->
                                <div class="col-12 col-md-3">
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-text text-muted" for="selectMessenger">
                                            <small>Messenger</small>
                                        </label>

                                        <!-- Select -->
                                        <select class="form-control" data-toggle="select" id="selectMessenger">
                                            <option>All</option>
                                            <option>Telegram</option>
                                            <option>Viber</option>
                                        </select>

                                    </div>
                                </div>

                                <!-- Since: -->
                                <div class="col-12 col-md-2">
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-text text-muted" for="sinceDate">
                                            <small>Since:</small>
                                        </label>

                                        <!-- Input -->
                                        <input type="text" class="form-control" placeholder="Flatpickr example" id="sinceDate" data-toggle="flatpickr" data-options='{"defaultDate": ["2019-10-01"]}'>

                                    </div>
                                </div>

                                <!-- To: -->
                                <div class="col-12 col-md-2">
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-text text-muted" for="toDate">
                                            <small>To:</small>
                                        </label>

                                        <!-- Input -->
                                        <input type="text" class="form-control" placeholder="Flatpickr example" id="toDate" data-toggle="flatpickr" data-options='{"defaultDate": ["2019-10-16"]}'>

                                    </div>
                                </div>

                                <!-- Export: -->
                                <div class="col-12 col-md-2">
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-text text-muted" for="selectMessenger">
                                            <small>&nbsp;</small>
                                        </label>

                                        <!-- Button -->
                                        <button class="btn btn btn-white" style="border: 1px solid #D2DDEC;">
                                            <span class="fe fe-file-text"></span>
                                            Export
                                        </button>

                                    </div>
                                </div>
                            </div> <!-- / .row -->
                        </div>


                        <div class="table-responsive mb-0">
                            <table class="table table-sm table-nowrap card-table">
                                <thead>
                                <tr>
                                    <th>
                                        Customer
                                    </th>
                                    <th>
                                        Messenger
                                    </th>
                                    <th>
                                        Phone
                                    </th>
                                    <th>
                                        Card
                                    </th>
                                    <th>
                                        First seen
                                    </th>
                                    <th>
                                        Last seen
                                    </th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>

                                        <!-- Avatar -->
                                        <a href="profile-posts.htmL" class="avatar avatar-xs d-inline-block mr-2">
                                            <img src="assets/img/avatars/profiles/avatar-1.jpg" alt="..." class="avatar-img rounded-circle">
                                        </a>

                                        <!-- Title -->
                                        <span>Dianna Smiley</span>

                                    </td>
                                    <td>
                                        <span class="text-success" style="color: #4C87C8 !important;">●</span> Telegram
                                    </td>
                                    <td>
                                        +380956367597
                                    </td>
                                    <td>
                                        000000131285
                                    </td>
                                    <td>
                                        <time datetime="01.10.2019">01-10-2019 18:30</time>
                                    </td>
                                    <td>
                                        <time datetime="05.10.2019">05-10-2019 13:02</time>
                                    </td>
                                    <td>
                                        <a class="text-body" href="#"><span class="fe fe-eye"></span></a>
                                    </td>
                                </tr>
                                <tr style="border-left: 3px solid #ea4335;">
                                    <td>

                                        <!-- Avatar -->
                                        <a href="profile-posts.html" class="avatar avatar-xs d-inline-block mr-2">
                                            <span class="avatar-title rounded-circle">AH</span>
                                        </a>

                                        <!-- Title -->
                                        <span>Ab Hadley</span>

                                    </td>
                                    <td>
                                        <span class="text-success" style="color: #4C87C8 !important;">●</span> Telegram
                                    </td>
                                    <td>
                                        +380956367597
                                    </td>
                                    <td>
                                        000000131285
                                    </td>
                                    <td>
                                        <time datetime="01.10.2019">01-10-2019 18:30</time>
                                    </td>
                                    <td>
                                        <time datetime="05.10.2019">05-10-2019 13:02</time>
                                    </td>
                                    <td>
                                        <a class="text-body" href="#"><span class="fe fe-eye"></span></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <!-- Avatar -->
                                        <a href="profile-posts.html" class="avatar avatar-xs d-inline-block mr-2">
                                            <img src="assets/img/avatars/profiles/avatar-3.jpg" alt="..." class="avatar-img rounded-circle">
                                        </a>

                                        <!-- Title -->
                                        <span>Adolfo Hess</span>

                                    </td>
                                    <td>
                                        <span class="text-success" style="color: #715297 !important;">●</span> Viber
                                    </td>
                                    <td>
                                        +380956367597
                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <time datetime="01.10.2019">01-10-2019 18:30</time>
                                    </td>
                                    <td>
                                        <time datetime="05.10.2019">05-10-2019 13:02</time>
                                    </td>
                                    <td>
                                        <a class="text-body" href="#"><span class="fe fe-eye"></span></a>
                                    </td>
                                </tr>
                                <tr style="border-left: 3px solid #fbbc05">
                                    <td>

                                        <!-- Avatar -->
                                        <a href="profile-posts.html" class="avatar avatar-xs d-inline-block mr-2">
                                            <img src="assets/img/avatars/profiles/avatar-4.jpg" alt="..." class="avatar-img rounded-circle">
                                        </a>

                                        <!-- Title -->
                                        <span>Daniela Dewitt</span>

                                    </td>
                                    <td>
                                        <span class="text-success" style="color: #715297 !important;">●</span> Viber
                                    </td>
                                    <td>
                                        +380956367597
                                    </td>
                                    <td>
                                        000000131285
                                    </td>
                                    <td>
                                        <time datetime="01.10.2019">01-10-2019 18:30</time>
                                    </td>
                                    <td>
                                        <time datetime="05.10.2019">05-10-2019 13:02</time>
                                    </td>
                                    <td>
                                        <a class="text-body" href="#"><span class="fe fe-eye"></span></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <!-- Avatar -->
                                        <a href="profile-posts.html" class="avatar avatar-xs d-inline-block mr-2">
                                            <img src="assets/img/avatars/profiles/avatar-5.jpg" alt="..." class="avatar-img rounded-circle">
                                        </a>

                                        <!-- Title -->
                                        <span>Miyah Myles</span>

                                    </td>
                                    <td>
                                        <span class="text-success" style="color: #4C87C8 !important;">●</span> Telegram
                                    </td>
                                    <td>
                                        +380956367597
                                    </td>
                                    <td>
                                        000000131285
                                    </td>
                                    <td>
                                        <time datetime="01.10.2019">01-10-2019 18:30</time>
                                    </td>
                                    <td>
                                        <time datetime="05.10.2019">05-10-2019 13:02</time>
                                    </td>
                                    <td>
                                        <a class="text-body" href="#"><span class="fe fe-eye"></span></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="card-footer">

                            <div class="row">

                                <div class="col">
                                    <small>Showing 1 to 5 of 10 entries</small>
                                </div>

                                <div class="col-auto">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination pagination-sm">
                                            <li class="page-item"><a class="page-link" href="#!">Previous</a></li>
                                            <li class="page-item active"><a class="page-link" href="#!">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div> <!-- / .row -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Customers"
    }
</script>

<style scoped>

</style>
