import { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

export default function HabitosZerado() {
    //*ZeroHabitos é usado apenas para decidir se o cliente já tem algum hábito ou não
    const [ zeroHabitos, setZeroHabitos ] = useState( false );
                //TODO: mudar estado para true quando for iniciar real
    function passar () {
        setZeroHabitos( false )
    }
    
    const [ dia, setDia ] = useState([])
    console.log(dia);
    
    return (
        <>
            <ScreenZeroHabito>
                <Header />
                <MeusHabitos>
                            <h2>Meus Hábitos</h2>
                            <Button onClick={passar}>
                                +
                            </Button>
                </MeusHabitos>
                {zeroHabitos === true
                ? 
                    <>
                        <div></div>
                    </>
                :
                    <AddHabito>
                        <NomeHabito type="text" placeholder="nome do hábito"></NomeHabito>
                        <DiasSemana>
                            <ButtonDia active={dia === 0} onClick={ () => setDia(0) } >D</ButtonDia>
                            <ButtonDia active={dia === 1} onClick={ () => setDia(1) } >S</ButtonDia>
                            <ButtonDia active={dia === 2} onClick={ () => setDia(2) } >T</ButtonDia>
                            <ButtonDia active={dia === 3} onClick={ () => setDia(3) } >Q</ButtonDia>
                            <ButtonDia active={dia === 4} onClick={ () => setDia(4) } >Q</ButtonDia>
                            <ButtonDia active={dia === 5} onClick={ () => setDia(5) } >S</ButtonDia>
                            <ButtonDia active={dia === 6} onClick={ () => setDia(6) } >S</ButtonDia>
                        </DiasSemana>
                        
                        <SalvaCancela>
                            <Cancelar>
                                Cancelar
                            </Cancelar>
                            <Salvar>
                                Salvar
                            </Salvar>
                        </SalvaCancela>

                    </AddHabito>
                }
                
                <Mensagem>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </Mensagem>
                <Footer />
                
            </ScreenZeroHabito>
        </>
    );
}


const ScreenZeroHabito = styled.div `
    width: 100vw;
    height: 100vh;
    padding-top: 110px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #E5E5E5;
`

const MeusHabitos = styled.div `
    width: 340px;
    height: 50px;
    margin-bottom: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h2 {
        font-family: 'Lexend Deca';
        color: #126BA5;
        font-size: 23px;
    }
`

const Button = styled.button `
    width: 40px;
    height: 35px;
    font-size: 27px;
    color: #ffffff;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    padding-bottom: 10px;

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
`

const ButtonDia = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border: 0.8px solid #D4D4D4;
    background-color: #FFFFFF;
    color: #DBDBDB;
    font-size: 20px;
    border-radius: 5px;
    padding: 2px;
`

const Mensagem = styled.div `
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    width: 340px;
`

const AddHabito = styled.div`
    width: 340px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 29px; 
    border-radius: 5px;
    padding: 10px;
    background-color: #FFFFFF;
`

const NomeHabito = styled.input `
width: 300px;
height: 45px;
border-radius: 5px;
border: 1px solid #D4D4D4;
font-size: 20px;
margin-top: 5px;
box-sizing: border-box;
padding-left: 11px;

    &:focus {
        outline: none;
    }
    
    &::placeholder {
        color: #DBDBDB
    }
`

const DiasSemana = styled.div `
    width: 303px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 3px;
`

const Dia = styled.div `
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    font-size: 20px;
    line-height: 25px;
    color: #DBDBDB;
    background-color: #FFFFFF;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
`

const SalvaCancela = styled.div `
    width: 303px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 25px;
    font-size: 16px;
`

const Cancelar = styled.div `
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 23px;
    color: #52B6FF;
    background-color: #ffffff;
    border: none;

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
`

const Salvar = styled.div `
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
`