import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Teste } from "../pages/Home";
export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Teste />}></Route>
            </Routes>
        </BrowserRouter>
    )
}