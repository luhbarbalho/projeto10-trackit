import { useState } from 'react';
import { Link, useParams  } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Logo from '../assets/TrackItLogo2.png';

export default function Start() {
    const params = useParams();
    console.log(params)
    
    const [infoCliente, setInfoCliente] = useState([]);
    const [emailForm, setEmailForm] = useState("");
    const [senhaForm, setSenhaForm] = useState("");



    function SubmitLogIn (event) {
        event.preventDefault();
        console.log(senhaForm)

        const sendForm = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`,
        {
            email: emailForm,
            password: senhaForm,
        });

        sendForm.then(response => {
            setInfoCliente([...response.data]);
            console.log("alo", infoCliente)
             //TODO: ver para onde vai levar essa info, usar navigate?
        })  
    }

    return (
        <>
            <ScreenLogIn>
                <MainTitle>
                    <ImgLogo src={Logo} alt='Logo'/>
                    <h1>TrackIt</h1>
                </MainTitle>
                <Form onSubmit={SubmitLogIn}>
                    
                    {emailForm}
                    <Input type="email" placeholder="email" onChange={(e) => setEmailForm(e.target.value)} value={emailForm} required />
                    {senhaForm}
                    <Input type="password" id="senha" placeholder="senha" onChange={(e) => setSenhaForm(e.target.value)} value={senhaForm} required />
                        
                    <Button type="submit" name="Entrar">Entrar</Button>

                </Form>
                <Link to="/cadastro">
                        <CadastreSe>
                            <p>Não tem uma conta? Cadastre-se!</p>
                        </CadastreSe>
                    </Link>
            </ScreenLogIn>
        </>
    );
}

const ScreenLogIn = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /** *overflow-x: hidden; */
`

const MainTitle = styled.div `
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        font-size: 69px;
        font-family: 'Playball', cursive;
        letter-spacing: 0.04em;
        line-height: 86px;
        font-weight: 400;
        color: #126BA5;
    }
`

const ImgLogo = styled.img`
    width: 155px;
`


const Form = styled.form`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0 25px 0;
`

const Input = styled.input`
    height: 45px;
    width: 292px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    color: #293845;
    font-size: 18px;
    margin-bottom: 6px;
    padding-left: 11px;

    :focus {
        outline: none;
    }

    ::placeholder {
        color: #DBDBDB;
        font-size: 19px;
        padding: 4px;
    }
`

const Button = styled.button`
    height: 42px;
    width: 308px;
    font-size: 21px;
    color: white;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
`

const CadastreSe = styled.div`
    text-decoration: none;
    width: 303px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
    
    p {
        text-decoration-line: underline;
        font-size: 14px;
    }
    
    :active {
        color: #52B6FF;
    }
`
