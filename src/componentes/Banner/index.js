import './style.css'

function Banner() {
    //JSX - como react lê e transforma em elementos no Dom
    return(
        <header className="banner">
        <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
    )

}

export default Banner