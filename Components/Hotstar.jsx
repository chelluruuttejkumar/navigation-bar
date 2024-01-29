import hstyle from "./hotstar.module.css"
import image from "./hotstar.png"
const Hotstar =()=>{
    return(
        <div>
             <section id={hstyle.nav}>
                <article>
                    <div className={hstyle.logo}>
                    <i class="fa-solid fa-bars"></i>
                    <img src={image}/>
                    </div>

                    <div className={hstyle.menu}>
                         <ol>
                            <li><a href="">TV</a></li>
                            <li><a href="">Movies</a></li>
                            <li><a href="">Sports</a></li>
                            <li><a href="">Disney+</a></li>
                            <li><a href="" className={hstyle.kids}>KiDS</a></li>
                         </ol>
                    </div>

                    <div className={hstyle.search}>
                    <div>
                    <input type="search" placeholder="Search"/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    </div>
                    
                    <div className={hstyle.profile}>
                        <div>
                        <button>SUBCRIBE</button>
                        </div>
                       <div>
                       <i class="fa-regular fa-circle-user"></i>
                       </div>
                    </div>
                </article>
             </section>
        </div>
    )
}
export default Hotstar