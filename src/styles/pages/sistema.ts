import styled from "styled-components"
//import { theme } from "../../styles/theme"
export const Sistema = styled.div`
width:100%;
height:100vh;
display: flex;
justify-content: space-around;
align-items: center;
div{
    background-color: ${({theme}) => theme.colors.tertiary[1100]};
}
div:nth-child(1){
    width: 31%;
    height: 97vh;
    border-radius:30px;
    .Sistemas{
        background: rgba(246, 238, 224, 0.59);
        box-shadow: -5px 10px 19.9px -2px rgba(246, 238, 224, 0.6);
        width: 90%;
        height: 15%;
        border-radius:30px;
        margin: 20px auto;
    }
}
div:nth-child(2){
    width: 45%;
    height: 97vh;
    border-radius: 30px;
}
#seta{
    top:10px;
    position:absolute;
    width: 200px;
    height: 200px;
    clip-path: polygon(43% 30%, 43% 69%, 0 50%);

}
`
