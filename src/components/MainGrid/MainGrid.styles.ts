import styled from 'styled-components';

export const StyledMainGrid = styled('div') <{ size: number }>`
display: grid;
grid-template-columns: ${props => {
        switch (props.size) {
            case 12:
                return `repeat(4, 1fr)`;
            case 20:
                return `repeat(5, 1fr)`;
            case 30:
                return `repeat(6, 1fr)`;
            default:
                return `repeat(5, 1fr)`;
        }
    }};
grid-template-rows: ${props => {
        switch (props.size) {
            case 12:
                return `repeat(3, 1fr)`;
            case 20:
                return `repeat(4, 1fr)`;
            case 30:
                return `repeat(5, 1fr)`;
            default:
                return `repeat(4, 1fr)`;
        }
    }};
gap: 5px;
height: calc(.8 * 100vh);
width: 100vh;
margin-top: 1rem;

@media screen and (orientation: portrait){
height: calc(.8 * 95vw);
width: 95vw;
}
`

export const GameStats = styled('div') <{ gameOver: boolean }>`
position: absolute;
top: 10rem;
left: 50%;
transform: translateX(-50%);
display: flex;
height: 7rem;
width: 20rem;
align-items: center;
justify-content: space-between;
flex-direction: column;
font-size: 3rem;
color: white;
text-shadow: 1px 1px 5px rgba(0,0,0,.25);

p:last-child {
    font-size: 2rem;
}
`