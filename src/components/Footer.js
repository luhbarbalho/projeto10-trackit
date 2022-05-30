import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';

export default function HabitosZerado() {


    const percentage = 66;
    
    return (
        <>
                <Footers>
                    <p>Hábitos</p>
                    <Bola>
                        <CircularProgressbar
                        value={percentage}
                        text='Hoje'
                        background={ true }
                        backgroundPadding={ 6 }
                        styles={{
                            root: {
                                verticalAlign: "middle"
                            },
                            
                            path: {
                                stroke: `#ffffff`,
                                strokeLinecap: 'round',
                            },
                            
                            text: {
                                fill: '#ffffff',
                                fontSize: '18px',
                            },
                            
                            background: {
                                fill: '#52B6FF',
                            },
                            
                        }}
                        />
                    </Bola>
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
    bottom: 0;
    /* / */
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
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin-bottom: 35px;
`