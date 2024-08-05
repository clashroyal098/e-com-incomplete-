export default 
function Header(){
    return(
        <div>
            
    <header>
        <nav
        class="navbar navbar-expand-lg navbar-light  nav1-bg-col "
    >
        <div class="container">
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0 ">
                    <li class="nav-item">
                        <a href="#"><img Class="corp-logo" src="ecom-logo.png" alt="logo"/>
                        </a>
                    </li>
                    <li>
                        Deliver To <br/>  Location : Nepal
                    </li>
                   
                </ul>
                <form class="d-flex my-2 my-lg-0">
                    <input
                        class="nav"
                        type="text"
                        placeholder="some topic"
                    />
                    <button
                        class="btn btn-outline-success 0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
               
                <i class="fa-regular fa-user user"></i>
                <img src="data:image/png;base64,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"
                />
            </div>
            
        </div>
        </nav>
        <nav
            class="navbar navbar-expand-lg navbar-light  my-0 nav2-bg-col"
        >
            <div class="container">
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0 ">
                         <li class="nav-item dropdown">
                            <a
                                class="nav-lin dropdown-toggle"
                                href="#"
                                id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                            <img src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png"/>    
                            </a
                            >
                            <div
                               class="dropdown-menu"
                               aria-labelledby="dropdownId"
                            >
                            <a class="dropdown-item" href="e-com.html"
                                >
                                Home
                                </a
                            >
                            <a class="dropdown-item" href="news-national.html"
                                >
                                Clothes</a
                            >
                            <a class="dropdown-item" href="news-politics.html"
                                >
                                Books</a
                            >
                            <a class="dropdown-item" href="news-sports.html"
                                >
                                Plants</a
                            >
                            <a href="#"
                                ><button id="dropdown-close">Close</button></a
                            >
                           </div>
                    </li>
                        <li class="nav-item">
                            <a class="nav-lin " href="e-com.html" aria-current="page"
                                >Home
                                <span class="visually-hidden">(current)</span></a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-lin" href="news-national.html">Clothes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-lin" href="news-politics.html">Books</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-lin" href="news-sports.html">Plants</a>
                        </li>
                       
                    </ul>
                </div>
                
            </div>
        </nav>
     </header>
        </div>
    )
}