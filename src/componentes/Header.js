import { useNavigate } from "react-router-dom";
import Formulario from "./Form";
import styled from "styled-components";



const Header = ({ setBusqueda, setBusquedaTipo, reset }) => {

    const navigate = useNavigate();

    const tiposPokemon = ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"];

    const Cabecera = styled.header`
      background: #313131
    `

    return(
        <Header>

        <h2>Buscar</h2>
        <Formulario setBusqueda={setBusqueda} />

        <button onClick={() => reset()}>Resetear</button>

        {tiposPokemon.map(tipo => (
          <button key={tipo} onClick={() => setBusquedaTipo(tipo)}>{tipo}</button>
        ))}

        <button onClick={() => navigate(-1)}>back</button>
      </Header>
    )

}

export default Header