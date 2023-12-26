import styled from "styled-components";

const Loading = styled.div`
  width: 45px;
  margin: 50px auto;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background: 
    var(--c) 0%   50%,
    var(--c) 50%  50%,
    var(--c) 100% 50%;
  background-size: 20% 100%;
  animation: l1 1s infinite linear;

  @keyframes l1 {
    0% {background-size: 20% 100%,20% 100%,20% 100%}
    33% {background-size: 20% 10% ,20% 100%,20% 100%}
    50% {background-size: 20% 100%,20% 10% ,20% 100%}
    66% {background-size: 20% 100%,20% 100%,20% 10% }
    100% {background-size: 20% 100%,20% 100%,20% 100%}
  }
`;

const Loader = () =>{
    return(
        <Loading />
    )
}

export default Loader