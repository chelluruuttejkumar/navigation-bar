import style from"./godaddy.module.css"
import image2 from "./godad.png"
const Godaddy=()=>{
    return(
      

    <div>
        <section id={style.nav}>
            <article>
                <div className={style.logo}>
                <img src={image2}/>
                </div>
                <div className={style.menu}>
                    <ol>
                        <li><a href="">Domains</a></li>
                        <li><a href="">Hosting</a></li>
                        <li><a href="">Security</a></li>
                        <li><a href="">Email & Marketing</a></li>
                        <li><a href="">For Web Professionals</a></li>
                    </ol>
                </div>
                
                <div className={style.profile}>
                    <ol>
                        <li><a>882-529-6516</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">Sign In</a></li>
                        <li><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
                    </ol>
                </div>
            </article>
        </section>
    </div>
  )
}
export default Godaddy


