
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './GlobalStyles';
import Login from './Login';
import Cadastro from './Cadastro';
import Habitos from './Habitos';
import Day from './Day';


export default function App() {
    
    const [ spinnerLoading, setSpinnerLoading ] = useState( false );
    
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login spinnerLoading={spinnerLoading} setSpinnerLoading={setSpinnerLoading}/>}/>
                    <Route path="/cadastro" element={<Cadastro spinnerLoading={spinnerLoading} setSpinnerLoading={setSpinnerLoading} />}/>
                    <Route path="/habitos" element={<Habitos />}/>
                    <Route path="/hoje" element={<Day />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}