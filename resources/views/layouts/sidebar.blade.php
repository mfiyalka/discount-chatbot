<nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light">
    <div class="container-fluid">

        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Brand -->
        <a class="navbar-brand" href="#">
            <img src="./assets/img/logo.svg" class="navbar-brand-img
              mx-auto" alt="...">
        </a>

        <!-- Language (xs) -->
        <div class="navbar-user d-md-none">
            <div class="row">
                <div class="col text-center">
                    <a href="#" class="text-body mr-3">
                        EN
                    </a>
                    <a href="#" class="text-muted">
                        UA
                    </a>
                </div>
            </div>
        </div>

        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidebarCollapse">

            <!-- Divider -->
            <hr class="navbar-divider my-3">

            <!-- Navigation -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        <i class="fe fe-home"></i> Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fe fe-users"></i> Customers
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fe fe-star"></i> Ratings & Reviews
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#sidebarDashboards" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                        <i class="fe fe-home"></i> Newsletters
                    </a>
                    <div class="collapse" id="sidebarDashboards">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="#" class="nav-link ">
                                    Telegram
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Viber
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">
                        <i class="fe fe-message-square"></i> Contact centre
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">
                        <i class="fe fe-settings"></i> Users
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">
                        <i class="fe fe-file-text"></i> Text
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">
                        <i class="fe fe-book-open"></i> Manual
                    </a>
                </li>
            </ul>

            <!-- Divider -->
            <hr class="navbar-divider my-3">

            <!-- Navigation -->
            <ul class="navbar-nav mb-md-4">
                <li class="nav-item">
                    <a class="nav-link " href="#">
                        <i class="fe fe-log-out"></i> Logout (mfiyalka)
                    </a>
                </li>
            </ul>

            <!-- Push content down -->
            <div class="mt-auto"></div>

            <!-- Language (md) -->
            <div class="navbar-user d-none d-md-flex">
                <div class="row">
                    <div class="col text-center">
                        <a href="#!" class="text-body mr-3">
                            EN
                        </a>
                        <a href="#!" class="text-muted">
                            UA
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
