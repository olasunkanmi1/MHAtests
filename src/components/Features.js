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

    svg {
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
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.87207 55.5957L40.9784 73.4609L73.4607 57.2198L39.3543 6.87227L6.87207 55.5957Z" stroke="url(#paint0_linear)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.87207 23.1134L40.9784 73.4609L73.4607 23.1134L39.3543 6.87227L6.87207 23.1134Z" stroke="url(#paint1_linear)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.87207 23.1135L73.4607 57.2199" stroke="url(#paint2_linear)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.87207 55.5958L73.4607 23.1135" stroke="url(#paint3_linear)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M39.3544 11.7447C42.0453 11.7447 44.2268 9.56326 44.2268 6.87234C44.2268 4.18142 42.0453 2 39.3544 2C36.6635 2 34.4821 4.18142 34.4821 6.87234C34.4821 9.56326 36.6635 11.7447 39.3544 11.7447Z" fill="#FFFDFD" stroke="url(#paint4_linear)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M40.9784 78.3333C43.6693 78.3333 45.8508 76.1518 45.8508 73.4609C45.8508 70.77 43.6693 68.5886 40.9784 68.5886C38.2875 68.5886 36.1061 70.77 36.1061 73.4609C36.1061 76.1518 38.2875 78.3333 40.9784 78.3333Z" fill="#FFFDFD" stroke="url(#paint5_linear)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.87234 62.0922C9.56326 62.0922 11.7447 59.9108 11.7447 57.2199C11.7447 54.529 9.56326 52.3475 6.87234 52.3475C4.18142 52.3475 2 54.529 2 57.2199C2 59.9108 4.18142 62.0922 6.87234 62.0922Z" fill="#FFFDFD" stroke="url(#paint6_linear)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.87234 27.9857C9.56326 27.9857 11.7447 25.8043 11.7447 23.1134C11.7447 20.4225 9.56326 18.241 6.87234 18.241C4.18142 18.241 2 20.4225 2 23.1134C2 25.8043 4.18142 27.9857 6.87234 27.9857Z" fill="#FFFDFD" stroke="url(#paint7_linear)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M73.4609 62.0922C76.1518 62.0922 78.3332 59.9108 78.3332 57.2199C78.3332 54.529 76.1518 52.3475 73.4609 52.3475C70.77 52.3475 68.5886 54.529 68.5886 57.2199C68.5886 59.9108 70.77 62.0922 73.4609 62.0922Z" fill="#FFFDFD" stroke="url(#paint8_linear)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M73.4609 27.9857C76.1518 27.9857 78.3332 25.8043 78.3332 23.1134C78.3332 20.4225 76.1518 18.241 73.4609 18.241C70.77 18.241 68.5886 20.4225 68.5886 23.1134C68.5886 25.8043 70.77 27.9857 73.4609 27.9857Z" fill="#FFFDFD" stroke="url(#paint9_linear)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M39.3544 44.227C42.0453 44.227 44.2268 42.0455 44.2268 39.3546C44.2268 36.6637 42.0453 34.4823 39.3544 34.4823C36.6635 34.4823 34.4821 36.6637 34.4821 39.3546C34.4821 42.0455 36.6635 44.227 39.3544 44.227Z" fill="#FFFDFD" stroke="url(#paint10_linear)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear" x1="40.1664" y1="6.87227" x2="40.1664" y2="73.4609" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FC09D"/>
                            <stop offset="1" stop-color="#00ACF5"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="40.1664" y1="6.87227" x2="40.1664" y2="73.4609" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FC09D"/>
                            <stop offset="1" stop-color="#00ACF5"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="40.1664" y1="23.1135" x2="40.1664" y2="57.2199" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FC09D"/>
                            <stop offset="1" stop-color="#00ACF5"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear" x1="40.1664" y1="23.1135" x2="40.1664" y2="55.5958" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FC09D"/>
                            <stop offset="1" stop-color="#00ACF5"/>
                            </linearGradient>
                            <linearGradient id="paint4_linear" x1="39.3544" y1="2" x2="39.3544" y2="11.7447" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FC09D"/>
                            <stop offset="1" stop-color="#00ACF5"/>
                            </linearGradient>
                            <linearGradient id="paint5_linear" x1="40.9784" y1="68.5886" x2="40.9784" y2="78.3333" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FC09D"/>
                            <stop offset="1" stop-color="#00ACF5"/>
                            </linearGradient>
                            <linearGradient id="paint6_linear" x1="6.87234" y1="52.3475" x2="6.87234" y2="62.0922" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FC09D"/>
                            <stop offset="1" stop-color="#00ACF5"/>
                            </linearGradient>
                            <linearGradient id="paint7_linear" x1="6.87234" y1="18.241" x2="6.87234" y2="27.9857" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FC09D"/>
                            <stop offset="1" stop-color="#00ACF5"/>
                            </linearGradient>
                            <linearGradient id="paint8_linear" x1="73.4609" y1="52.3475" x2="73.4609" y2="62.0922" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FC09D"/>
                            <stop offset="1" stop-color="#00ACF5"/>
                            </linearGradient>
                            <linearGradient id="paint9_linear" x1="73.4609" y1="18.241" x2="73.4609" y2="27.9857" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FC09D"/>
                            <stop offset="1" stop-color="#00ACF5"/>
                            </linearGradient>
                            <linearGradient id="paint10_linear" x1="39.3544" y1="34.4823" x2="39.3544" y2="44.227" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FC09D"/>
                            <stop offset="1" stop-color="#00ACF5"/>
                            </linearGradient>
                            </defs>
                        </svg>

                        <h3>{item.title}</h3>
                        <p>{item.paragraph}</p>
                    </Card>
                ))}
            </Wrapper>
        </Container>
    )
}

export default Features
