import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    width: 90vw;
    height: 120px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    flex-wrap: wrap;
    background-color: rgb(214, 229, 255);
    border-radius: 25px;
    ${mobile({
        display:"flex",
        flexDirection:"column",
        height: "400px",
        marginTop:"50px"
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 50px;
    border-right: 2px solid black;
    ${mobile({
        borderBottom:"1px solid black",
        borderRight:"none",
    })}
`

const IconContainer = styled.div`
    display: flex;
`

const Title = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin: 10px 20px;
    text-align: center;
    ${mobile({
        fontSize:"15px"
    })}
`

const Image = styled.img`
    width: 80px;
    ${mobile({
       width:"80%"
    })}
`


const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    border-right: 2px solid black;
    ${mobile({
        borderBottom:"1px solid black",
        borderRight:"none"
    })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
`



const Promotion = () => {
    return (
        <Container>
            <Left>
                <IconContainer>
                    <Image src="https://i.ibb.co/7vSKn2h/thumps-up.png" />
                </IconContainer>
                <Title>
                    Excellent Quality Products.
                </Title>
            </Left>
            <Center>
                <IconContainer>
                    <Image src="https://i.ibb.co/YWL2FrZ/Gift.png" />
                </IconContainer>
                <Title>
                    Delivery Date & Return Date is FREE!!
                </Title>
            </Center>
            <Right>
                <IconContainer type="pay">
                    <Image src="https://i.ibb.co/Y8RHfpH/Pay.png" />
                </IconContainer>
                <Title>
                    Pay on Delivery
                </Title>
            </Right>
        </Container>
    )
}

export default Promotion