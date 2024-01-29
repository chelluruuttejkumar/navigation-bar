import pic from "./myntra.png"
const Myntra=()=>{
    return(
       
            <section>
                <article>
                <div className="logo">
                    <img src={pic} height="65%" width="35%" />
                </div>
                <div className="menu">
                    <ol>

                    <li><a href="https://www.myntra.com/shop/men">MEN</a></li>
                        <li><a href="">WOMEN</a></li>
                        <li><a href="">KIDS</a></li>
                        <li><a href="">HOME&LIVING</a></li>
                        <li><a href="">STUDIO</a></li>
                        <li><a href="">BEAUTY <sup>NEW</sup></a></li>
                    </ol>
                </div>
                <div className="search">

                    <div>
                    <i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="search for products,brands and more" />
                        
                    </div>
                </div>
                
                <div className="profile">
                <div>
                    <i class="fa-solid fa-user"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>
                </article>
            </section>
        
    )
}
export default Myntra