import React, { Component } from 'react'
import './App.css'
import Items from './components/Items'
import Search from './components/Search'
import NavBar from './components/NavBar'
import axios from 'axios'

export default class App extends Component {
  state = {
    criptocoins: [],
    text: "",
  }

  componentDidMount() {
    this.getCryptoCoins()
  }
  
  getCryptoCoins = () => {
    
    const request = axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false")

    request
      .then(response =>{        
        this.setState({criptocoins : response.data})
      })
      .catch(error => {console.log(error)
      })
  }

  inputText = (event) =>{
    const inputText = event.target.value.toLowerCase()
    this.setState({text : inputText})
  }

  render() {

    return (
      <React.Fragment>
        <NavBar/>     
        <Search
          inputText = {this.inputText}
        />
        <Items
          criptocoins = {this.state.criptocoins}
          text = {this.state.text}
        />
      </React.Fragment>
    )
  }
} 
