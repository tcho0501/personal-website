import React from 'react';
import {
  Link,
  Route
} from "react-router-dom";
import gible from './images/Gible.png'
import pfp from './images/pfp.jpg'
import styled from 'styled-components'
import resume from './files/Tim_Cho_Resume_2020.pdf'

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
  height: 40vh;
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
  display: flex;
  flex-direction: row;
  padding-left: 8%;
  padding-right: 8%;
`

const Intro = styled.div`
  color: #133C55;
  font-size: 1.5rem;
  width: 50%;
  padding-top: 6%;
  padding-left: 8%;
  line-height: 1.6;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding-left: 5%;
`

const Image = styled.img`
  position: relative;
  margin-top: 5%;
  margin-bottom: 5%;
  height: 90%;
`

const A = styled.a`
  color: #386fa4;
`
const StyledLink = styled(Link)`
  color: #91e5f6;
  font-size: 1.5rem;
  margin: 10px;
`

// const intro = `Hi there! My Name is Tim Cho and I am a software engineer based in Ann Arbor, MI. I specialise in web development and creating human-centered digital products. Currently, I am completing my junior year at the University of Michigan and I will be interning at Hubspot in the coming summer.`

const getIntro = () => {
  return (
    <div>
    Hi there! My name is Tim Cho and I am a software engineer based in Ann Arbor, MI. I specialise in web development and creating human-centered digital products. Currently, I am completing my junior year at the University of Michigan and will be interning at <A rel="noreferrer" href="https://www.hubspot.com/" target="_blank">Hubspot</A> in the coming summer.
    </div>
  )
}

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
        <Intro>
          {getIntro()}
          <br/>
          Feel free to check out my <A href={resume} download>resume</A>!
        </Intro>
        <ImageWrapper>
          <Image src={pfp} alt="pfp"/>
        </ImageWrapper>
      </DescriptionWrapper>
    </div>
    
    
  )
}

const NavbarWrapper = styled.div`
  position: absolute;
  right: 2%;
  top: 2%;
  display: flex;
  flex-direction: row;
  z-index: 10;
  justify-content: flex-end
`

const NavBar = (props) => {
  return (
    <NavbarWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">Experiences</StyledLink>
      <StyledLink to="/fun">Fun Stuff</StyledLink>
    </NavbarWrapper>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path="/about"><div>about</div></Route>
      <Route path="/fun"><div>Fun page</div></Route>
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
