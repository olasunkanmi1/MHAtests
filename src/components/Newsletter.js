import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Button } from './Button'

//styles
const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 8rem;
    background: #F0F0F0;
    color: #1A2B48;
    
    div {
        width: 40%;

        h2 {
            font-weight: 400;
            font-size: 25px;
        }

        p {
            font-size: 18px;
            font-weight: 200;
            margin-top: 10px;

            @media screen and (max-width: 350px) {
                font-size: 15px;
            }
        }

        @media screen and (max-width: 700px) {
            width: 100%;
        }
    }

    @media screen and (max-width: 1000px) {
        padding: 2rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 2rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 2rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 3rem;
    }
    
    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: start;
    }

    @media screen and (max-width: 450px) {
        padding: 2rem 1.5rem;
    }
`

const Input = styled.section`
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 40px;
    background: #fff;
    border-radius: 10px;

    input {
        padding: 10px;
        font-size: 15px;
        width: 80%;
        outline: none;
        border:  none;
        background: transparent;
        border-radius: 10px;
        color: #000;
    }

    @media screen and (max-width: 700px) {
        width: 70%;
        margin-top: 1rem;
    }
    
    @media screen and (max-width: 600px) {
        width: 85%;
    }
    
    @media screen and (max-width: 430px) {
        width: 100%;
    }
`

const Newsletter = () => {
    return (
        <Container>
            <div>
                <h2>Get Updates & More</h2>
                <p>Thoughtful thoughts to your inbox</p>
            </div>
            <Input>
                <input type="email" placeholder="Email Address" />
                <Button>Subscribe</Button>
            </Input>
        </Container>
    )
}

export default Newsletter
