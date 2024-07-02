import './Footer.css'

export const Footer = () => {

    return(
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/' target='_blank'>
                            <img src="/imagens/fb.png" alt="Facebook logo"/>
                        </a>
                    </li>
                    <li>
                        <a href='https://x.com/' target='_blank'>
                            <img src="/imagens/tw.png" alt="X logo"/>
                        </a>
                    </li>
                    <li>
                        <a href='https://instagra.com/' target='_blank'>
                            <img src="/imagens/ig.png" alt="Instagram logo"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt="logo"/>
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )

}