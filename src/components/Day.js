import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

export default function Day() {

    return (
        <>
            <ScreenEachDay>
                <Header />
                <MeusHabitos>
                            <h2>Segunda, 17/05</h2>
                            <p>Nenhum hábito concluído ainda</p>
                </MeusHabitos>
                <AddHabito>
                    <EachHabito>
                        <h3>Ler 1 capítulo de livro</h3>
                        <p>Sequência atual: 3 dias <br/>
                        Seu recorde: 5 dias</p>
                    </EachHabito>
                    
                    <Button>
                        {/* <ion-icon name="checkbox"></ion-icon> */}
                    </Button>

                </AddHabito>
                <Footer />
            </ScreenEachDay>
        </>
    );
}

const ScreenEachDay = styled.div `
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
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    
    h2 {
        font-family: 'Lexend Deca';
        color: #126BA5;
        font-size: 23px;
        margin-bottom: 5px;
    }
    
    p {
        color: #BABABA;
    }
`

const AddHabito = styled.div`
    width: 340px;
    height: 94px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 29px; 
    border-radius: 5px;
    padding: 10px;
    background-color: #FFFFFF;
`

const EachHabito = styled.div`
    width: auto;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    
    h3 {
        font-size: 20px;
    }
    p {
        font-size: 12px;
    }
`

const Button = styled.button `
width: 69px;
height: 69px;
font-size: 27px;
background-color: #EBEBEB;
border: none;
border-radius: 5px;
padding-bottom: 10px;
border: 1px solid #E7E7E7;

&:hover {
    filter: brightness(1.2);
    cursor: pointer;
}
`