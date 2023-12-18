import { useNavigate } from "react-router-dom";
import { Formulario, Button } from "./Form";
import styled from "styled-components";

const Cabecera = styled.header`
  background-color: #313131;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
  gap: 20px
`;

const H2 = styled.h2`
  font-size: 30px;
`;

const StyledButton = styled.button`
  margin: 3px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  color: #fff;
  background-color: ${(props) => getColor(props.tipo)};
`;

const getColor = (tipo) => {
  switch (tipo) {
    case "Normal":
      return "#A8A77A";
    case "Fire":
      return "#EE8130";
    case "Water":
      return "#6390F0";
    case "Electric":
      return "#F7D02C";
    case "Grass":
      return "#7AC74C";
    case "Ice":
      return "#96D9D6";
    case "Fighting":
      return "#C22E28";
    case "Poison":
      return "#A33EA1";
    case "Ground":
      return "#E2BF65";
    case "Flying":
      return "#A98FF3";
    case "Psychic":
      return "#F95587";
    case "Bug":
      return "#A6B91A";
    case "Rock":
      return "#B6A136";
    case "Ghost":
      return "#735797";
    case "Dragon":
      return "#6F35FC";
    case "Dark":
      return "#705746";
    case "Steel":
      return "#B7B7CE";
    case "Fairy":
      return "#D685AD";
    default:
      return "#ccc"; // Color por defecto o para tipos no especificados
  }
};

const Header = ({ setBusqueda, setBusquedaTipo, reset }) => {
  const navigate = useNavigate();

  const tiposPokemon = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

  return (
    <Cabecera>
      <H2>Buscar</H2>
      <Formulario setBusqueda={setBusqueda} />
      <div>
        <Button onClick={() => reset()}>Resetear</Button>
        {tiposPokemon.map((tipo) => (
          <StyledButton
            key={tipo}
            onClick={() => setBusquedaTipo(tipo)}
            tipo={tipo}
          >
            {tipo}
          </StyledButton>
        ))}
        <Button onClick={() => navigate(-1)}>back</Button>
      </div>
    </Cabecera>
  );
};

export default Header;
