import styled from "styled-components"
//import { theme } from "../../styles/theme"
export const Home = styled.div`
width: 70%;
height: 90vh;
margin: auto;
display:flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
div{
        background-color: ${({theme}) => theme.colors.tertiary[1100]};
        width: 45%;
        height: 45%;
        border-radius: 30px;
        box-shadow: inset -10px 10px 4px rgba(0, 0, 0, 0.25);
}
`
