
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Login from './Login';
import Cadastro from './Cadastro';
import HabitosZerado from './HabitosZerado';


export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="/habitos" element={<HabitosZerado />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}