
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Start from './Start';
import Cadastro from './Cadastro';



export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}