import styled from "styled-components";
interface ControleProps {
    isVisible: boolean; // Definindo a propriedade isVisible
  }

export const Controle = styled.div<ControleProps>`
    width: calc(100% - 20px);
    padding: 10px;
    height: calc(100vh - 20px);
    div:nth-child(1){
        border: solid 5px ${({theme}) => theme.colors.tertiary[1200]};
        border-radius: 30px 30px 0 0;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            width:20%;
            height: 30%;
            background-color: ${({theme}) => theme.colors.tertiary[1200]};
            margin: auto 10px;
        }
    }
    h2{
        height:10%;
        margin:0;
        font-weight: 200;
        font-size: 50px;
        line-height: 60px;
        color: #D94052;
        text-shadow: -4px 4px 4px #932404;
    }
    div:nth-child(3){
        width: 100%;
        height: 68%;
        background-color: ${({theme}) => theme.colors.tertiary[300]};
        border-radius: 0 0 30px 30px;
        div{
            border: none;
            width: 100%;
            height: 100%;
        }
        #cadastroCliente{
            display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
            form{
                padding-top: 20px;
                width: 100%;
                height: calc(100% - 20px);
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                input{
                    border: solid 2px ${({theme}) => theme.colors.tertiary[200]};
                    width: 70%;
                    height: 10%;
                    background: ${({theme}) => theme.colors.tertiary[200]};
                    border-radius: 30px;
                    margin-top: 5px;
                }
                button{
                    height: 15%;
                    width: 30%;
                    margin: auto;
                    border-radius: 50px;
                    background-color: ${({theme}) => theme.colors.tertiary[1000]};
                }
            }
        }
    }
`