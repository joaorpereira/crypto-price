import React from 'react'
import styled from 'styled-components'
import logo from '../pngwave.png'

const Container = styled.div`
    display: flex;
    height: 4em;
    padding: 0 25px;
    background: #ff4d00;
    justify-content:center;
    align-items:center;
    box-shadow: 0px 2px 5px rgba(50, 50, 50, 0.77);
    list-style-type: none;

    li a {
        text-decoration:none;
        color: white;
        margin: 0 20px;
        text-transform: uppercase;
        transition: 0.3s;
        font-size: 18px;
        letter-spacing: 1px;
        font-weight: 700;

        :hover{
            color: #01024e;
        }            
    }
`;



export default function NavBar() {
    return (
        <Container>            
            <img src={logo} alt="Breaking Bad"/>
                <li>
                    <a href="/">Crypto Search</a> 
                </li>        
        </Container>
    )
}
