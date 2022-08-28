import React from 'react'
import styled from 'styled-components'
import { products } from '../data'
import { mobile } from '../Responsive'

const Container = styled.div`
    /* width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px; */
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    ${mobile({
        textAlign:"center"
    })}
`

const Title = styled.h1` `

const CardContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin-top: 20px;
    margin: 10px auto;
    gap: 10px;
    ${mobile({
        gridTemplateColumns:"1fr",
        width:"100%"
    })}
`

const Card = styled.div`
    /* display: grid;
    grid-auto-columns: 100px;
    grid-auto-flow: column; */
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
    padding: 10px 15px; 
    background: linear-gradient(to right,white 0%, white 70%,${props => props.color} 70%,${props => props.color} 100%);
    cursor: pointer;
    margin: 10px;
`

const CardContent = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 600;
    /* width: 200px;
    height: 120px;
    padding: 5px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2; */
`
const CardQuantity = styled.p`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 500; 
    border: 1px solid black;
    border-radius: 5px;
    /* font-size: 100;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4; */
    
`

const ImageCard = styled.img`
    height: 120px;
    width: 120px;
    /* grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4; */
`

const Products = () => {


    return (
        <Container>
            <TitleContainer>
                <Title>
                    Trekking Gear on rent
                </Title>
            </TitleContainer>
            <CardContainer key={products.id}>
                {products.map((item) =>
                        <Card color={item.id % 2 === 0 ? 'blue' : 'yellow'}>
                            <CardContent>
                                {item.title}
                                <CardQuantity>
                                    {item.quantity}
                                </CardQuantity>
                            </CardContent>
                            <ImageCard src={item.img} />
                        </Card>
                )}
            </CardContainer>
        </Container>
    )
}

export default Products