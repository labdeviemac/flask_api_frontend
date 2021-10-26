const getNavbar = () => {
    return `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#" class="navbar-brand">
                Flask Application
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content"
                aria-controls="navbar-content" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-content">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a href="index.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="list.html" class="nav-link">List Data</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Update Specific Data</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Delete Data</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
}