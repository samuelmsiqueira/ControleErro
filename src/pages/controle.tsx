import React, {useState} from "react";
import * as Style from "../styles/pages/controle"
export function Controle(){
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // codigo para colocar depois que finalizar o estilo de todas as divs

    // const [isCadastroVisible, setIsCadastroVisible] = useState(false);
    // const [isErrosVisible, setIsErrosVisible] = useState(false);
    // const [isContratosVisible, setIsContratosVisible] = useState(false);

    // const toggleCadastroVisibility = () => {
    //     setIsCadastroVisible(!isCadastroVisible);
    //     // Se a div de cadastro estiver sendo exibida, oculta as outras
    //     if (isCadastroVisible) {
    //         setIsErrosVisible(false);
    //         setIsContratosVisible(false);
    //     }
    // };

    // const toggleErrosVisibility = () => {
    //     setIsErrosVisible(!isErrosVisible);
    //     // Se a div de erros estiver sendo exibida, oculta as outras
    //     if (isErrosVisible) {
    //         setIsCadastroVisible(false);
    //         setIsContratosVisible(false);
    //     }
    // };

    // const toggleContratosVisibility = () => {
    //     setIsContratosVisible(!isContratosVisible);
    //     // Se a div de contratos estiver sendo exibida, oculta as outras
    //     if (isContratosVisible) {
    //         setIsCadastroVisible(false);
    //         setIsErrosVisible(false);
    //     }
    // };
    return(
        <Style.Controle isVisible={isVisible}>
            <div>
                <button onClick={toggleVisibility}>Cadastrar Novo Cliente</button>
                <button>Controle de Erros</button>
                <button>Contratos Clientes</button>
            </div>
            <h2>Controle Erros</h2>
            <div id="boxInfo">
                {/* 
                    - Criar função para buscar os dados no banco de dado e exibir as informações 
                 */}

                 <div id="cadastroCliente" className={isVisible ? 'visible' : 'hidden'}>
                    <form action="" method="get">
                        <input type="text" placeholder="Nome Fantasia" />
                        <input type="text" placeholder="Nome Proprietario" />
                        <input type="text" placeholder="CNPJ" />
                        <input type="text" placeholder="Endereço" />
                        <input type="number" placeholder="Numero" />
                        <button type="submit">Cadastrar</button>
                    </form>
                 </div>
            </div>
        </Style.Controle>
    )
}