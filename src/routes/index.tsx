import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Principal } from "../pages";
import { Sistemas } from "../pages/sistemas";
import { Controle } from "../pages/controle";
import { Menu } from "../components/Menu";
export function AppRoutes(){
    return(
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={<Principal />}></Route>
                <Route path="/Sistemas" element={<Sistemas />}></Route>
                <Route path="/Controle" element={<Controle />}></Route>
            </Routes>
        </BrowserRouter>
    )
}