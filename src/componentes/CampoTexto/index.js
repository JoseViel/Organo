import './style.css'

const CampoTexto = (props) => {

    const typing = (evento) => {
        props.alterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
        <input value={props.valor} onChange={typing} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto