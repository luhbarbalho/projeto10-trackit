
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Login from './Login';
import Cadastro from './Cadastro';
import Habitos from './Habitos';
import Day from './Day';


export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="/habitos" element={<Habitos />}/>
                    <Route path="/hoje" element={<Day />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}