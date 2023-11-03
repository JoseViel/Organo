import './style.css'

const Time = (props) => {

    const corSecundaria = { backgroundColor: props.corSecundaria }
    const corPrimaria = { borderColor: props.corPrimaria}

    return (
        <section className='time' style={corSecundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
        </section>

    )

}

export default Time