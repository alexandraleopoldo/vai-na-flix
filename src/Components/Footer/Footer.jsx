import "./FooterStyle.scss";

function Footer() {
    return(
        <footer>
           <div className="rodape-contact-help">
            <ul>
           
                <li className="ocultar">Todos os direitos reservados</li>
                <li><a href="https://help.netflix.com/pt/contactus">Contato</a></li>
                <li><a href="https://help.netflix.com/pt">Ajuda</a></li>
            </ul>
           </div>
           <div className="redes-sociais">
            <ul>
                <li><a href="https://www.instagram.com/netflixbrasil/" target="blank"><img src="https://i.pinimg.com/originals/8a/3b/05/8a3b055d7e3cc52a0f0053535f0339ea.jpg" alt="" /></a></li>
                <li><a href="https://www.facebook.com/netflixbrasil/?locale=pt_BR"><img src="https://i.pinimg.com/736x/f1/ef/e0/f1efe080194b6d5e2843f3118634551e.jpg" alt="" /></a></li>
            </ul>
           </div>
        </footer>
    )
}
export default Footer