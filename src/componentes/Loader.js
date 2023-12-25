import styled from "styled-components";



const StyledLoader = styled.div`
    width: 45px;
    aspect-ratio: 1;
    --c: no-repeat linear-gradient(#000 0 0);
    background: 
      var(--c) 0%   50%,
      var(--c) 50%  50%,
      var(--c) 100% 50%;
    background-size: 20% 100%;
    animation: l1 1s infinite linear;
  }
  @keyframes l1 {
    0%  {background-size: 20% 100%,20% 100%,20% 100%}
    33% {background-size: 20% 10% ,20% 100%,20% 100%}
    50% {background-size: 20% 100%,20% 10% ,20% 100%}
    66% {background-size: 20% 100%,20% 100%,20% 10% }
    100%{background-size: 20% 100%,20% 100%,20% 100%}
  }  
`;

const Center = styled.div`
    width:100%;
    height: 100%;
    margin-top: 100px; 
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    
`

const LoaderComponent = () => {
  return (
    <Center>
        <StyledLoader />
    </Center>
  );
}

export default LoaderComponent;
