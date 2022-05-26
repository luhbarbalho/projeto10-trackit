
import styled from 'styled-components';

export default function HabitosZerado() {
    
    return (
        <>
                <Footers>
                    <p>Hábitos</p>
                    <Bola></Bola>
                    <p>Histórico</p>
                </Footers>
        </>
    );
}

const Footers = styled.div `
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    padding: 0 30px;
    color: #52B6FF;
    background-color: #ffffff;
    box-shadow: 0 5px 5px 1px #00000026;
    cursor: pointer;
    position: fixed;
    font-size: 20px;
    
        p:hover {
            filter: brightness(1.2);
            cursor: pointer;
        }
`   

const Bola = styled.div `
    width: 91px;
    height: 91px;
    background-color: #95619F;
    border-radius: 50%;
    margin-bottom: 10px;
    position: absolute;
    bottom: 0;
`