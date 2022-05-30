import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Logo from '../assets/TrackItLogo2.png';
import { Oval } from  'react-loader-spinner'

export default function Cadastro( props ) {
    
    const [ emailForm, setEmailForm ] = useState("");
    const [ senhaForm, setSenhaForm ] = useState("");
    const [ nomeForm, setNomeForm ] = useState("");
    const [ fotoForm, setFotoForm ] = useState("");
    const [ disabled, setDisabled ] = useState( false );
    const navigate = useNavigate();

//TODO: colocar o spinner para mostrar q está loading na tela de cadastro

    //* SUBMIT FORM PARA CADASTRO
    
    function SubmitCadastro ( event ) {

        event.preventDefault();

        const body = {
            email: emailForm,
            name: nomeForm,
	        image: fotoForm,
            password: senhaForm,
        }

        const sendForm = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, body)
        
        .then(response => {
            console.log(response.data);
            props.setSpinnerLoading(!props.spinnerLoading);
            navigate(`/`);
        })
        .catch(error => {
            props.setSpinnerLoading(props.spinnerLoading); //será que se ficar girando no erro a pessoa fica irritada?
            console.log(error)
        })
    }

    //* BLOQUEANDO OS INPUTS APÓS O CLICAR EM CADASTRAR

    function blockInputs() {
        setDisabled(!disabled);
        props.setSpinnerLoading(!props.spinnerLoading); 
    }


    return (
        <>
            <ScreenCadastro>
                <MainTitle>
                    <ImgLogo src={Logo} alt='Logo'/>
                    <h1>TrackIt</h1>
                </MainTitle>
                <Form onSubmit={SubmitCadastro}>
                    
                    <Input
                        type="email"
                        placeholder="email"
                        onChange={(e) => setEmailForm(e.target.value)}
                        value={emailForm}
                        disabled={disabled}
                        required
                    />

                    <Input
                        type="text"
                        id="senha"
                        placeholder="senha"
                        onChange={(e) => setSenhaForm(e.target.value)}
                        value={senhaForm}
                        disabled={disabled}
                        required
                    /> 

                    <Input 
                        type="text"
                        id="nome"
                        placeholder="nome"
                        onChange={(e) => setNomeForm(e.target.value)}
                        value={nomeForm}
                        disabled={disabled}
                        required
                    />

                    <Input 
                        type="url" 
                        id="foto" 
                        placeholder="foto" 
                        onChange={(e) => setFotoForm(e.target.value)} 
                        value={fotoForm}
                        disabled={disabled}
                        required
                    />

                    <Button
                        type="submit"
                        name="Entrar"
                        onClick={blockInputs}>
                        
                        {props.spinnerLoading ? <Oval color="#ffffff" height={25} width={25} /> : "Cadastrar"}

                    </Button>

                </Form>
                <Link to="/">
                    <FacaLogIn>
                        <p>Já tem uma conta? Faça login!</p>
                    </FacaLogIn>
                </Link>
            </ScreenCadastro>
        </>
    );
}


    //* BLOQUEANDO OS INPUTS APÓS O CLICAR EM LOGIN

const ScreenCadastro = styled.div `
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
    height: 250px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    color: white;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
`

const FacaLogIn = styled.div`
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