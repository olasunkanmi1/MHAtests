import React from 'react'
import styled, { css } from 'styled-components/macro'
import { cardData } from '../data/CardData'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './card.css'

//styles
const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F0F0F0;
    padding: 1rem 8rem;

    h3 {
        width: 30%;
        color: #143861;
        font-size: 30px;
        font-weight: 300;
        text-align: center;
        padding: 3rem 0;

        @media screen and (max-width: 1210px) {
            width: 40%;
        }

        @media screen and (max-width: 975px) {
            width: 50%;
        }
        
        @media screen and (max-width: 670px) {
            width: 65%;
        }
        
        @media screen and (max-width: 540px) {
            width: 80%;
        }
        
        @media screen and (max-width: 420px) {
            width: 90%;
        }
        @media screen and (max-width: 320px) {
            width: 100%;
        }
        
        @media screen and (max-width: 300px) {
            font-size: 25px;
        }
    }

    @media screen and (max-width: 920px) {
        padding:  1rem 6rem;
    }
    
    @media screen and (max-width: 860px) {
        padding:  1rem 4rem;
    }
    
    @media screen and (max-width: 768px) {
        padding:  1rem 3rem;
    }
    
    @media screen and (max-width: 450px) {
        padding:  1rem 1.5rem;
    }
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    padding:  0rem 9rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-gap: 50px;
    }

    @media screen and (max-width: 1300px) {
        padding:  0rem 6rem;
    }
    
    @media screen and (max-width: 1180px) {
        padding:  0rem 3rem;
    }

    @media screen and (max-width: 1040px) {
        padding:  0rem 2rem;
    }
    
    @media screen and (max-width: 980px) {
        padding:  0rem 0rem;
    }

    @media screen and (max-width: 500px) {
        padding:  0rem 2rem;
    }
    
    @media screen and (max-width: 450px) {
        padding:  0rem 0rem;
    }
`

const Card = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 270px;
    color: #fff;
    padding: 1rem;
    border-radius: 10px;
    transition: .5s;
    position: relative;

    img {
        height: 70px;
        width: 60px;

        @media screen and (max-width: 590px) {
            height: 60px;
            width: 50px;
        }
    }

    h4 {
        font-size: 18px;
    }

    p {
        font-size: 15px;
        width: 80%;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        transition: .5s;
    }

    @media screen and (max-width: 855px) {
        height: 280px;
    }
    @media screen and (max-width: 768px) {
        height: 230px;
    }
    
    @media screen and (max-width: 590px) {
        height: 240px;
    }
    @media screen and (max-width: 570px) {
        height: 280px;
    }

    @media screen and (max-width: 500px) {
        height: 220px;
    }

    @media screen and (max-width: 450px) {
        height: 235px;
    }
`

const Icon = styled(AiOutlineArrowRight)`
    width: 25px;
    height: 20px;
    color: #3188A9;
`

const Brs = styled(Link)`
    text-align: center;
    padding: 3rem 0;
    color: #143861;
    transition: .5s;

    &:hover {
        color: #52BAA1;
    }
`

const Hafy = () => {
    return (
        <Container>
            <h3>Health Assesment for you from anywhere </h3>
            <Wrapper>
                {cardData.map((item, index) => (
                    <Card className="card" key={index} css={`background: ${item.color}`} >
                        <img src={item.image} alt="img" />
                        <h4>{item.title}</h4>
                        <p>{item.paragraph}</p>
                        <div className="arrow"><Icon /></div>
                    </Card>
                ))}
            </Wrapper>
            <Brs><h4>Browse more Tests</h4></Brs>
        </Container>
    )
}

export default Hafy
