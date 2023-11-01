import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const NovoColaborador = (colaborador) => {
      console.log(colaborador)
      setColaboradores([colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario ColaboradorCadastrado={colaborador => NovoColaborador(colaborador)}/>
    </div>
  );
}

export default App;
