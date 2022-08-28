import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    display: grid;
    grid-template-columns: repeat(3,1fr);
    align-items: center;
    justify-content: center;
    /* width: 100vw; */
    height: 120px;
    background-color: #05054e;
    /* margin-top: 100px; */
    margin: auto;
    ${mobile({
        display:"none"
    })}
`

const Title = styled.h2`
      max-width: 500px;
      display: flex;
      justify-content: space-between;
      color: white;
      padding: 0px 50px;
      text-align: left;
      /* margin-right: 50px; */
      /* margin-top: 10px; */
      margin: auto;
`

const Button = styled.button`
    font-size: 20px;
    width: 50%;
    background-color: rgb(215, 223, 35);
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

const Footer = () => {
    return (
        <Container>
            <Title>Traveling via Delhi,
                Dehradun or Chandigarh?</Title>
            <Title>Rent while you transit
                & save even more!</Title>
            <Title>Save upto
                20%<Button>Know More</Button></Title>
        </Container>
    )
}

export default Footer