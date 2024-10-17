import "./HeaderStyle.scss";

function Header() {
    return(
       <header>
            <div className="logo-nav">
            <img src="./img/aleflix.png" alt="Netflix Logo" />
            <nav>
               <ul>
                 <li>Início</li>
                 <li className="ocultar">Séries</li>
                 <li className="ocultar">Filmes</li>
                 <li>Mais Recentes</li>
                 <li>Minha Lista</li>
                 <li className="ocultar">Infantil</li>
               </ul>
            </nav>
            </div>
            <div className="trocar-perfil">
                
                <a href="#"><img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="" /></a>
            </div>
       </header>
    )
}
export default Header