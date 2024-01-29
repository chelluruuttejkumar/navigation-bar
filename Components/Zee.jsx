import style from "./zee.module.css"
const Zee=()=>{
    return(
        <section>
            <article>
                <div className={style.logo}>
                <img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.58" title="ZEE5 Logo" alt="ZEE5 Logo">
                </img>
                </div>
                <div className={style.menu}>
                    <ol>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Web Series</li>
                        <li>News</li>
                        </ol>
                </div>
                <div className={style.cube}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grid" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-grid fa-lg"><path fill="currentColor" d="M0 72C0 49.9 17.9 32 40 32H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V72zM0 232c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V232zM128 392v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40zM160 72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V72zM288 232v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM160 392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392zM448 72v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM320 232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V232zM448 392v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40z" class=""></path></svg>
                </div>
                <div className={style.search}>
                    <input type="text" placeholder="Search for Movies,Shows,Channels etc."/>
                </div>
                <div className={style.lang}>
                    <h1>A<sup>A</sup></h1>
                </div>
                <div className={style.login}>
                    <h3>LOGIN</h3>
                </div>
                <div className={style.plan}>
                <i class="fa-solid fa-crown"></i>
                <h3> BUY PLAN </h3>
                </div>
                <div className={style.home}>
                <i class="fa-solid fa-bars"></i>
                </div>
            </article>
        </section>
    )
}
export default Zee