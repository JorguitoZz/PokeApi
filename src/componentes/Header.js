import { useNavigate } from "react-router-dom";
import { Formulario, Button } from "./Form";
import styled from "styled-components";
import GetColor from "../GetColor";



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
  background-color: ${(props) => GetColor(props.tipo)};
`;

const Header = ({ setBusqueda, setBusquedaTipo, reset, clickTipo, setClickTipo }) => {


  const navigate = useNavigate();

  const tiposPokemon = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];
  

  return (
    <Cabecera>
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"/>
      <H2>Buscar</H2>
      <Formulario setBusqueda={setBusqueda} />
      <div>
        <Button onClick={() => {
          reset() 
          setClickTipo(false)
        }}>Resetear</Button>
        
        {tiposPokemon.map((tipo) => (
          <StyledButton
            key={tipo}
            onClick={() => {
              setBusquedaTipo(tipo)
              if (!clickTipo) {
                setClickTipo(true)
              }
            }}
            tipo={tipo}
          >
            {tipo}
          </StyledButton>
        ))}
        <Button onClick={() => navigate('/')}>back</Button>
      </div>
    </Cabecera>
  );
};

export default Header;
