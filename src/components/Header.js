import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import logo from '../images/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
import { menuData } from '../data/MenuData'

//components
import { Button } from './Button'
import Sidebar from './Sidebar'

//styles
const Container = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    width: 100%;
    padding: 1rem 8rem;
    z-index: 10;
    position: fixed;
    top: 0;
    background: #fff;

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

const Logo = styled(Link)`
    img {
        height: 40px;
    }
`

const MenuBars = styled(AiOutlineMenu)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 30px;
        width: 30px;
        color: #142861;
        cursor: pointer;
    }
`

const MenuItems = styled(Link)`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const MenuLinks = styled(Link)`
    display: flex;
    font-size: 17px;
    color: #000;
    margin-right: 35px;
    transition: .3s;

    &:hover {
        color: #2FC09D;
    }

    @media screen and (max-width: 1100px) {
        margin-right: 25px;
    }

    @media screen and (max-width: 920px) {
        margin-right: 20px;
    }

    @media screen and (max-width: 850px) {
        margin-right: 15px;
    }
`

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }

    return (
        <>
        <Container toggle={toggle}>
            <Logo to="/">
                <img src={logo} alt="logo" />
            </Logo>
            <MenuBars onClick={toggle} />
            <MenuItems>
                {menuData.map((item, index) => (
                    <MenuLinks to={item.link} key={index}>
                        {item.title}
                    </MenuLinks>
                ))}
                <Button>Get Started</Button>
            </MenuItems>
        </Container>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
        </>
    )
}

export default Header
