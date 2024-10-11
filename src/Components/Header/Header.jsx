import "./HeaderStyle.scss";

function Header() {
    return(
       <header>
            <div className="logo-nav">
            <img src="https://ampost.com.br/wp-content/uploads/2024/04/melhores-series-da-netflix-para-maratonar.jpg" alt="Netflix Logo" />
            <nav>
               <ul>
                 <li>Início</li>
                 <li>Séries</li>
                 <li>Filmes</li>
                 <li>Mais Recentes</li>
                 <li>Minha Lista</li>
               </ul>
            </nav>
            </div>
            <div className="trocar-perfil">
                <a href="#"><p>Infantil</p></a>
                <a href="#"><img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="" /></a>
            </div>
       </header>
    )
}
export default Header