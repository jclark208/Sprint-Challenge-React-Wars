import React from 'react';
import './App.css';
import Characters from "./components/CharList"
import styled from "styled-components";

const AnnyoyingHeader = styled.h1`
color: #FFFFFF;
font-size: 72px;
text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <AnnyoyingHeader className="Header">React Wars</AnnyoyingHeader>
      <Characters/>
    </div>
  );
}

export default App;
