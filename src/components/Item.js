import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-items: start;
    align-items:center;
    width: 900px;
    padding: 15px 20px;

    background-color:#f0ece2;
    color: black;

    .red{
        color:red;
    }
    .green{
        color:green;
    }
`;

const Coin = styled.div`
    display: flex;
    align-items: center;
    padding-right:24px;
    min-width: 300px;

    h1{
        font-size: 16px;
        width: 150px;        
    }

    p{
        text-transform: uppercase;
    }

    img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
`;

const Data = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    .market_cap{
        width: 230px
    }
    .price{
        width: 110px;
    }
    .price_perc{
        width: 30%;
    }
    .volume{
        width: 155px;
    }
`;

export default function Item({criptocoin}) {
    return (
        <Container>
            <Coin>
                <img src={criptocoin.image} alt=""/>
                <h1>{criptocoin.name}</h1>
                <p>{criptocoin.symbol}</p>
            </Coin>
            <Data>
                <p className="market_cap">{criptocoin.market_cap}</p>
                <p className="price">{criptocoin.current_price}</p>          
                <p className={criptocoin.price_change_percentage_24h > 0 ? "price_perc green" : "price_perc red"}>{criptocoin.price_change_percentage_24h}</p>  
                <p className="volume">{criptocoin.total_volume}</p>
            </Data>                
        </Container>
    )
}
