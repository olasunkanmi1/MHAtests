import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import logo from '../images/logo2.png'

//styles
const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 3rem 8rem;

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
        flex-direction: column;
    }

    @media screen and (max-width: 450px) {
        padding: 3rem 1.5rem;
    }
`

const Logo = styled.div`
    width: 40%;

    img {
        height: 35px;
    }

    @media screen and (max-width: 1300px) {
        width: 30%;
    }

    @media screen and (max-width: 870px) {
        width: 20%;
    }
`

const Wrapper = styled.div`
    display: flex;
    width: 50%;

    div {
        display: flex;
        flex-direction: column;
        margin-right:  40px;

        &:last-child {
            margin-right:  0;

            @media screen and (max-width: 700px) {
                width: 45%;
            }

            @media screen and (max-width: 500px) {
                margin-top: 30px;
                width: 100%;
            }
        }

        p, a {
            color: #6A8BA3;
            margin-bottom: 7px;
            transition: .5s;

            &:hover {
                color: #143861;
            }
        }

        @media screen and (max-width: 870px) {
            margin-right:  30px;
        }

        @media screen and (max-width: 768px) {
            width: 33.3%;
            margin-right:  15px;
        }

        @media screen and (max-width: 500px) {
            width: 100%;
        }
    }

    h4 {
        color: #2FC09D;
        margin-bottom: 1rem;
        font-weight: 500;
        font-size: 17px;
    }

    @media screen and (max-width: 1300px) {
        width: 70%;
    }

    @media screen and (max-width: 870px) {
        width: 80%;
        padding-left: 30px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 30px 0 0 0;
    }

    @media screen and (max-width: 500px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

const Cr = styled.div`
    background: #F0F0F0;
    color: #2FC09D;
    padding: 1rem 8rem;

    @media screen and (max-width: 1000px) {
        padding: 1rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 1rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 1rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 1rem 1.5rem;
    }
`

const Footer = () => {
    return (<>
        <Container>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <Wrapper>
                <div>
                    <h4>Company</h4>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Features</a>
                    <a href="/">Tests</a>
                    <a href="/">Contact</a>
                </div>

                <div>
                    <h4>Legal</h4>
                    <a href="/">Terms and Conditions</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Cookie Policy</a>
                </div>

                <div>
                    <h4>Contacts</h4>
                    <p>27B Olabanji Olajide Street, Lekki Phase 1, Lagos NG.</p>
                    <a href="tel:2348033043863">(+234) 803 304 3863</a>
                    <a href="mailto:hello@howbodi.com">hello@howbodi.com</a>
                </div>
            </Wrapper>
        </Container>
        <Cr>&copy; 2020 How Bodi</Cr>
        </>
    )
}

export default Footer
