import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width:100%;
    padding:20px;
`;

export default function Items({criptocoins, text}) {

    return ( 
        <Container>
            {criptocoins

            .filter(criptocoins => {return criptocoins.name.toLowerCase().indexOf(text) >=0 })
            
            .map(criptocoin => (
                <Item
                    key={criptocoin.id}
                    criptocoin={criptocoin}            
                />
            ))}            
        </Container>
    )
}