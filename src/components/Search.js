import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width:100%;
    padding:15px;
`;

const Input = styled.input`
    background: #443737;
    outline:none;
    width:30%;
    margin-top: 15px;
    padding: 13px 20px;
    border-radius: 1em;
    border: none;
    font-size: 16px;
        :focus{
            background:#f0ece2;
            color: #272121;
        }
`;


export default function Search(props) {
    return (
        <Container>
            <Input type="text" placeholder="Type your crypto coin..." onChange={props.inputText}/>
        </Container>
    )
}
