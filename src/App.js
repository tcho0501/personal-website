import React from 'react';
import {
  Link,
  Route
} from "react-router-dom";
import gible from './images/Gible.png'
import styled from 'styled-components'

const TestComp = (props) => {
  return (
    <div>
      test success
      <Link to="/">home</Link>
    </div>
  )
}

const BannerWrapper = styled.div`
  height: 50vh;
  width: 100%;
  background-color: #133C55;
`

const Banner = styled.img`
  position: relative;
  height: 100%;
  left: -10%;
`

const ContentWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  width: 50%;
  height: 50vh;
  color: white;
`

const Name = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
`

const Home = (props) => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      <BannerWrapper>
        <Banner src={gible} alt="gible"/>
        <ContentWrapper>
          <Name>Tim Cho</Name>
        </ContentWrapper>
      </BannerWrapper>
    </div>
    
    
  )
}

function App() {
  return (
    <div className="App">
      <Route path="/about"><div>about <Link to="/">home</Link></div></Route>
      <Route path="/today"><TestComp/></Route>
      <Route exact path="/">
        <Home/>
        {/* Tim's personal website
        <img src={gible} alt="gible"/>
        <Link to="/today">testing</Link>
        <Link to="/about">about</Link> */}
      </Route>
      
    </div>
  );
}

export default App;
