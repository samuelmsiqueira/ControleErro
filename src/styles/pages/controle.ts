import styled from "styled-components";

export const Controle = styled.div`
    width: 100%;
    height: 100vh;
    div:nth-child(1){
        border: solid 2px  ${({theme}) => theme.tertiary[200]};
    }
`