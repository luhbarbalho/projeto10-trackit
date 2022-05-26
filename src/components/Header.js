import styled from 'styled-components';

export default function Header() {
    
    return (
        <>
            <Headers>
                <h1>TrackIt</h1>
                <div></div>
            </Headers>
        </>
    );
}

const Headers = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 30px;
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: #126BA5;
    box-shadow: 0 5px 5px 1px #00000026;
    
    div {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        background-color: #f0bfc5;
    }

    h1 {
        color: #FFFFFF;
        font-family: 'Playball';
        font-size: 39px;
    }
`