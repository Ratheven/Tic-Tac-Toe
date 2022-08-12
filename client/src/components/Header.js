import styled from "styled-components"

const Header = ({winner, xIsNext})=> {
    return (
        <>
        <ContainerGame>
            Tic-Tac-Toe
        </ContainerGame>
        <ContainerPlayer>    
            <X xIsNext={xIsNext}>
                Player X
            </X>
            <O xIsNext={xIsNext}>
                Player O
            </O>
        </ContainerPlayer>
        </>
    )
}
const ContainerPlayer = styled.div`
display: flex;
justify-content: space-between;
`
const X = styled.p`
border-bottom: ${({xIsNext})=> (xIsNext? "5px solid blue": "0.01px solid blue")};
`
const O = styled.p`
border-bottom: ${({xIsNext})=>(!xIsNext? "5px solid red": "0.01px solid red")};
`
const ContainerGame = styled.div`
display: flex;
justify-content: center;
`
export default Header