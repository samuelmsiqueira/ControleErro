//import styled from "styled-components"
import * as Styles from "./style"
import logo from "../../assets/Logo.png"
import Engrenagem from "../../assets/Engrenagem.png"
export function Menu(){
    return(
     <Styles.Menu>
        <span>
            <img src={logo} alt="" />
        </span>

        <div>
            <ul>
                <li><a href="">Sistemas</a></li>
                <li><a href="">Controle Financeiro</a></li>
                <li><a href="">Relátorios</a></li>
                <li><a href="">Modulos</a></li>
            </ul>
        </div>
        <div id="Engrenagem">
            <a href=""><img src={Engrenagem} alt="" /></a>
        </div>
     </Styles.Menu>
    )
}

