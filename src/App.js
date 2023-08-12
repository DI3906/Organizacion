import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)

  const [colaboradores, actualizarColaboradores] = useState([{
    equipo:"Front End",
    foto: "https://github.com/DI3906.png",
    nombre: "Diego Garcia",
    puesto: "Estudiante"
  },
  {
    equipo:"Front End",
    foto: "https://github.com/DI3906.png",
    nombre: "Diego Garcia",
    puesto: "Estudiante"
  }
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e3"
    },
    {
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf"
    },
  ])

  //Ternario --> Condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo Colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //elimiar colaborador
  const eliminarColaborador = () =>{
    console.log("eliminar colaborador")
  }

  //actualizar color de equipo
  const actualizarColor = (color, titulo) =>{
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color
      }
      return equipo
    })
    
    actualizarEquipos(equiposActualizados)
  }

  return (
    <div>
      <Header/>
      {/* { mostrarFormulario === true ? <Formulario/> : <></> } */}
      { mostrarFormulario && 
        <Formulario 
          equipos={equipos.map((equipo)=> equipo.titulo)}
          registrarColaborador={registrarColaborador} 
        /> 
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map( (equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          />
        )
      }

      <Footer/>

    </div>
  );
}

export default App;
