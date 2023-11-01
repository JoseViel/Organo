import './style.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () =>{

    const times = [
        'Backend',
        'Frontend',
        'UI/UX',
        'Devops',
        'Engenheiro de Software',
        'QA',
        'Mobile'
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o cargo do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome"/>
                <CampoTexto label="Cargo" placeholder="Digite a descrição"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
                <Botao>
                    Criar Card 
                </Botao>
            </form>
        </section>
    )

}

export default Formulario