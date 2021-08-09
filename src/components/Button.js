import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2FC09D;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    padding: ${({ big }) => (big ? '.8rem 1.5rem' : '.6rem 1rem')};
    color: #fff;
    font-size: ${({ big }) => (big ? '25px' : '17px')};
    font-weight: ${({ big }) => (big ? '500' : '200')};
    border-radius: 5px;
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(.95);
    }
`