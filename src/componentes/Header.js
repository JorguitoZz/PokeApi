import { useNavigate } from "react-router-dom";
import Formulario from "./Form";
import styled from "styled-components";

const Cabecera = styled.header`
  background-color: #313131; /* o el color que desees */
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 30px 0px
`;



const Header = ({ setBusqueda, setBusquedaTipo, reset }) => {

    const navigate = useNavigate();

    const tiposPokemon = ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"];

    return(
        <Cabecera>

        <h2>Buscar</h2>
        <Formulario setBusqueda={setBusqueda} />

        <button onClick={() => reset()}>Resetear</button>
        <div>
          {tiposPokemon.map(tipo => (
            <button key={tipo} onClick={() => setBusquedaTipo(tipo)}>{tipo}</button>
          ))}

          <button onClick={() => navigate(-1)}>back</button>
      </div>
      </Cabecera>
    )

}

export default Header