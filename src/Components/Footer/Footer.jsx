import "./FooterStyle.scss";

function Footer() {
    return(
        <footer>
           <div className="rodape-contact-help">
            <ul>
                <li><a href="https://help.netflix.com/pt/contactus">Contato</a></li>
                <li><a href="https://help.netflix.com/pt">Ajuda</a></li>
            </ul>
           </div>
           <div className="redes-sociais">
            <ul>
                <li><a href="https://www.instagram.com/netflixbrasil/" target="blank"><img src="https://i.pinimg.com/originals/8a/3b/05/8a3b055d7e3cc52a0f0053535f0339ea.jpg" alt="" /></a></li>
                <li></li>
            </ul>
           </div>
        </footer>
    )
}
export default Footer