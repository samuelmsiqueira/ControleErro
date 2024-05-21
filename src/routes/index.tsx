import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Principal } from "../pages";
import { Menu } from "../components/Menu";
export function AppRoutes(){
    return(
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={<Principal />}></Route>
            </Routes>
        </BrowserRouter>
    )
}