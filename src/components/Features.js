import React from 'react'
import styled, { css } from 'styled-components/macro'
import { featuresData } from '../data/FeaturesData'

//styles
const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding:  3rem 8rem;
    color: #063D66;

    h1 {
        font-size: 30px;
        font-weight: 500;
    }

    h5 {
        margin-top: 1rem;
        width: 50%;
        font-weight: 200;
        font-size: 17px;

        @media screen and (max-width: 950px) {
            width: 70%;
        }

        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }

    @media screen and (max-width: 1000px) {
        padding: 3rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 3rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 3rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 3rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 3rem 1.5rem;
    }
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    
    @media screen and (max-width: 850px) {
        grid-gap: 30px;
    }
    
    @media screen and (max-width: 710px) {
        grid-gap: 15px;
    }
    
    @media screen and (max-width: 675px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    img {
        width: 50px;
    }

    h3 {
        padding: 1rem 0;
        font-weight: 300;
        font-size: 23px;
    }
`
const Features = () => {
    return (
        <Container>
            <h1>Features</h1>
            <h5>onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</h5>
            <Wrapper>
            {featuresData.map((item, index) => (
                    <Card key={index} >
                        <img src={item.image} alt="img" />
                        <h3>{item.title}</h3>
                        <p>{item.paragraph}</p>
                    </Card>
                ))}
            </Wrapper>
        </Container>
    )
}

export default Features
