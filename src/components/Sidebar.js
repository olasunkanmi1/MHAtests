import React from 'react'
import styled, { css } from 'styled-components/macro'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    z-index: 9;
    padding: 1rem 8rem;
    position: fixed;
    top: 0;
    right: 0;
    transition: .5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

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

const Close = styled(AiOutlineClose)`
    color: #2FC09D;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
`
const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 4rem;
`

const SidebarMenuLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #000;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 5px;
    text-decoration: none;
    margin-bottom: 10px;
    width: 100%;
    height: 30px;
    transition: .3s;

    &:hover {
        color: #2FC09D;
    }
`

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <Container isOpen={isOpen} onClick={toggle} id="home">
            <Close onClick={toggle} />
            <SidebarMenu>
                {menuData.map((item, index) => (
                    <SidebarMenuLink to={item.link} key={index}>
                        {item.icon} {item.title}
                    </SidebarMenuLink>
                ))}
            <Button css={`max-width: 100%; font-weight: bold;`} >Get Started</Button>
            </SidebarMenu>
        </Container>
    )
}

export default Sidebar
