import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)

  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo:"Front End",
    foto: "https://github.com/DI3906.png",
    nombre: "Diego Garcia",
    puesto: "Estudiante",
    fav: true
  },
  {
    id: uuid(),
    equipo:"Front End",
    foto: "https://github.com/DI3906.png",
    nombre: "Diego Garcia",
    puesto: "Estudiante",
    fav: false
  }
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e3"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      id: uuid(),
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
  const eliminarColaborador = (id) =>{
    console.log("eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaboradores) => colaboradores.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //actualizar color de equipo
  const actualizarColor = (color, id) =>{
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    
    actualizarEquipos(equiposActualizados)
  }

  //crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>
      {/* { mostrarFormulario === true ? <Formulario/> : <></> } */}
      { mostrarFormulario && 
        <Formulario 
          equipos={equipos.map((equipo)=> equipo.titulo)}
          registrarColaborador = {registrarColaborador}
          crearEquipo = {crearEquipo} 
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
          like={like}
          />
        )
      }

      <Footer/>

    </div>
  );
}

export default App;
