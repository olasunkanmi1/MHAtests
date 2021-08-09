import React from 'react'
import styled, { css } from 'styled-components/macro'
import image from '../images/about.png'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #143861;
    color: #fff;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Abt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 9rem 8rem;

    h1 {
        font-weight: 200;
        font-size: 30px;
    }

    p {
        font-size: 16px;
    }

    @media screen and (max-width: 1200px) {
        padding: 8rem 2rem 8rem 8rem;
    }
    
    @media screen and (max-width: 1115px) {
        padding: 7rem 2rem 8rem 8rem;
    }
    @media screen and (max-width: 1010px) {
        padding: 6rem  2rem 6rem 8rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 6rem  2rem 6rem 5rem;
    }
    @media screen and (max-width: 920px) {
        padding: 6rem  2rem 6rem 4.5rem;
    }
    @media screen and (max-width: 850px) {
        padding: 6rem 2rem 6rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 4rem 3rem;
        height: 300px;
    }

    @media screen and (max-width: 560px) {
        height: 340px;
    }

    @media screen and (max-width: 450px) {
        padding: 4rem 1.5rem;
    }
    @media screen and (max-width: 430px) {
        height: 360px;
    }
    @media screen and (max-width: 350px) {
        height: 400px;
    }
    @media screen and (max-width: 300px) {
        height: 440px;
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

    @media screen and (max-width: 768px) {
        height: 450px;
    }
    
    @media screen and (max-width: 525px) {
        height: 400px;
    }

    @media screen and (max-width: 450px) {
        height: 300px;
    }
`

const About = () => {
    return (
        <Container>
            <Abt>
                <h1>About our work</h1>
                <p>A total score between 150 and 299 shows that the risk of illness in an individual is moderate. However, this result indicates that such an individual still needs to see a physician to be very sure of his/her status and obtain adequate treatment as the need arises</p>
                <p>A total score between 150 and 299 shows that the risk of illness in an individual is moderate. However, this result indicates</p>
            </Abt>
            <Image>
                <img src={image} alt="img" />
            </Image>
        </Container>
    )
}

export default About
