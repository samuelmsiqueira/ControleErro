import styled from "styled-components"
//import { theme } from "../../styles/theme"
export const Menu = styled.div`
    /* width: 306.42px; */
    width: 18%;
    height:100vh;
    background-color:${({ theme }) => theme.colors.tertiary[300]};
    border-radius: 0px 30px 30px 0px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    span{
        display:flex;
        align-items:center;
        justify-content: center;
        width: 100%;
        height: 30%
    }
    div{
        width: 90%;
        height: 30%;
        ul{
            height: 100%;
            padding: 0;
            font-size: 24px;
            list-style: none;
            li{
                    margin-bottom: 10px;
                a{
                    color:${({ theme }) => theme.colors.tertiary[100]};
                    border-bottom: 3px ${({ theme }) => theme.colors.tertiary[400]} solid;
                }
            }
        }
    }
    #Engrenagem{
        display:flex;
        align-items: flex-end;
        justify-content: end;
    }
  `

