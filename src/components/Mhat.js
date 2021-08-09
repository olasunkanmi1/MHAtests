import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import image from '../images/image5.png'

//components
import { Button } from './Button'

//styles
const Container = styled.section`
    background: #143861;
    padding: 4rem 8rem 4rem;
    color: #fff;
    margin-top: 75px;

    @media screen and (max-width: 1000px) {
        padding: 4rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 4rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 4rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 4rem 1.5rem;
    }
`

const Wrapper = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
        

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: 300px auto;
            grid-gap: 0px;
            padding: 0;
        }

        @media screen and (max-width: 570px) {
            grid-template-rows: 330px auto;
        }
        @media screen and (max-width: 440px) {
            grid-template-rows: 360px auto;
        }
        @media screen and (max-width: 370px) {
            grid-template-rows: 410px auto;
        }
        
        @media screen and (max-width: 310px) {
            grid-template-rows: 430px auto;
        }
    
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 6rem 0;

    h1 {
        font-size: 50px;
        font-weight: 300;

        @media screen and (max-width: 768px) {
            font-size: 40px;
        }

        @media screen and (max-width: 310px) {
            font-size: 35px;
        }
    }

    p {
        font-size: 20px;
    }

    @media screen and (max-width: 1115px) {
        padding: 4rem 0;
    }

    @media screen and (max-width: 795px) {
        padding: 2rem 0;
    }

`

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 500px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    
    @media screen and (max-width: 500px) {
        height: 350px;
    }

`

const Mhat = () => {
    return (
        <Container>
            <Wrapper>
                <Info>
                    <h1>Mental Health Assessment Tests</h1>
                    <p>Consequat consectetur turpis tristique elementum amet mattis non. Vulputate nisl urna, sed quam nunc turpis dui. Sed mauris nec sed volutpat in sodales.</p>
                    <Button big="true" css={`padding: .5rem 1.5rem; max-width: 210px;`}>Get Started</Button>
                </Info>
                <Image>
                    <img src={image} alt="" />
                </Image>
            </Wrapper>
        </Container>
    )
}

export default Mhat
