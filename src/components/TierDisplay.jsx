import React, { useState } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  border: solid;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: horizontal;
`

const ButtonsWrapper = styled.div`
  border-right: solid;
  position: relative;
  width: 30%;
  height: 100%;
`

const ItemsWrapper = styled.div`
  width: 70%;
  position: relative;
`

const Button = styled.button`
  width: 100%;
  background-color: ${props => props.color ? props.color : "white"};
  height: ${props => props.height ? props.height : "20%"};
  cursor: pointer;
`

const ListItem = styled.div``

const TierDisplay = (props) => {
  const { data, buckets, colors } = props
  const [ displayedItems, setDisplayedItems ] = useState(data[buckets[0]] !== null ? data[buckets[0]] : [])
  console.log(displayedItems)
  return(
    <Wrapper>
      <ButtonsWrapper>
        {buckets.map((bucket, i) => 
          <Button 
            key={i} 
            height={`${100 / buckets.length}%`}
            color={colors[i % colors.length]}
            onClick={() => {
              setDisplayedItems(data[bucket] ? data[bucket] : [])
            }}
          >
            {bucket}
          </Button>
        )}
      </ButtonsWrapper>
      <ItemsWrapper>
        {displayedItems.map((item, i) => <ListItem key={i}>{item}</ListItem>)}
      </ItemsWrapper>
    </Wrapper>
  )
}

TierDisplay.defaultProps = {
  buckets: ["S", "A", "B", "C", "D", "F"],
  data: {
    "S": [],
    "A": [],
    "B": [],
    "C": [],
    "D": [],
    "F": [],
  },
  colors: [
    "rgb(255, 127, 127)", 
    "rgb(255, 191, 127)", 
    "rgb(255, 223, 127)", 
    "rgb(255, 255, 127)", 
    "rgb(191, 255, 127)", 
    "rgb(127, 255, 127)",
    "rgb(127, 255, 255)"
  ]
}

export default TierDisplay