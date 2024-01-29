import astyle from "./amazon.module.css"
import img from "./amazon.png"
import ind from "./india.webp"
import img2 from "./cars1.jpeg"
import img3 from "./cars2.jpg"
import img1 from "./cars3.jpg"
import { Carousel } from "bootstrap"
import SideBarRow from './../SideBarRow/SideBarRow';
const Amazon=()=>{
    return(
<div>
        <section>
        <article>
            <div className={astyle.logo}>
                <img src={img} alt="" height="90%" width="60%" />
            </div>
            <div className={astyle.add}>
            <i class="fa-solid fa-location-dot"></i> 
           <h6>Select your address</h6>
           </div>

           <div className={astyle.search}>
            <div>
                        <h2>All <i class="fa-solid fa-caret-down"></i></h2>
                        <input type="text"  placeholder="" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
            </div>

            <div className={astyle.nation}>
            <img src={ind} alt="" height="30%" width="20%" />
            <h6>EN <select name="" id=""></select></h6>
            </div>

            <div className={astyle.list}>
                <h6>Hello,sign in account&lists</h6> <br /><br />
                <select name="" id=""></select>
            </div>

            <div className={astyle.order}>
                <h6>Returns&orders</h6>
            </div>

            <div className={astyle.cart}>
            <i class="fa-solid fa-cart-plus"><sub><b>Cart</b></sub>  </i> 
            </div>
           
           </article>    
    </section>
        <article>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <i class="fa-solid fa-bars"></i>
    <a class="navbar-brand" href="#">all</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Amazon mini tv</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">sell</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Best sellers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">mobiles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Today deals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">customer service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Electrioncs</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            prime
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><h6>free music</h6></a></li>
            <li><a class="dropdown-item" href="#"><h6>lastest movie</h6></a></li>
            <li><a class="dropdown-item" href="#"><h6>free delievery</h6></a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Home&kitchen</a>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
        </article>
<nav className={astyle.slides}>
<div>
<div class>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src={img3} class="d-block w-100" alt="..." height="300px" width="100%"/ >
        </div>
        <div class="carousel-item">
            <img src={img1} class="d-block w-100" alt="..." height="300px" width="100%"/>
        </div>
        <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..." height="300px" width="100%"/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button >

</div>
</div>
</div>
<div className='sidebar'>
            <SideBarRow title='Home' />
            <SideBarRow title='Trending' />
            <SideBarRow title='Subscription' />
            <hr />
            <SideBarRow title='Library' />
            <SideBarRow title='History' />
            <SideBarRow title='Your videos' />
            <SideBarRow title='Watch later' />
            <SideBarRow title='Liked vides' />
            <hr />
        </div>
</nav>

</div>   
    
    )
}
export default Amazon