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
  height: 40vh;
  width: 100%;
  background-color: #133C55;
`

const Banner = styled.img`
  position: relative;
  height: 100%;
  left: 0%;
`

const ContentWrapper = styled.div`
  position: absolute;
  left: 40%;
  top: 0%;
  width: 50%;
  height: 50vh;
  color: white;
`

const Name = styled.div`
  margin-left: 10%;
  margin-top: 10%;
  width: 50%;
  font-family: 'Roboto', sans-serif;
  font-size: 5rem;
`

const Description = styled.div`
  margin-left: 11%;
  margin-top: 1%;
  width: 80%;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  color: #91e5f6;
`

const DescriptionWrapper = styled.div`
  height: 60vh;
  background-color: #D9F6FC;
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
          <Description>I like to build useful things</Description>
        </ContentWrapper>
      </BannerWrapper>
      <DescriptionWrapper>
      </DescriptionWrapper>
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
