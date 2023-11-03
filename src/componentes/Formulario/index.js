import './style.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react'

const Formulario = (props) =>{

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const save = (evento) => {
        evento.preventDefault()
        props.ColaboradorCadastrado({
            nome,
            descricao,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o cargo do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome"
                    valor={nome}
                    alterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label="Descrição" 
                    placeholder="Digite a descrição"
                    valor={descricao}
                    alterado={valor => setDescricao(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    alterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card 
                </Botao>
            </form>
        </section>
    )

}

export default Formulario