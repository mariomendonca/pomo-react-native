import React, { useState, useEffect } from 'react';

import {
  Container,
  Title,
  StartButton,
  ButtonText,
  StopButton,
  ButtonsContainer,
} from './styles'

export default function Home() {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)

  function Start() {
    setIsActive(true)
  }

  function Stop() {
    setIsActive(false)
    setTime(time)
  }

  function Reset() {
    clearInterval(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
  }

  let countdownTimeout = ''
  useEffect(() => {
    if (isActive) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [isActive, time])

  return (
    <Container>
      <Title>
        {time}
      </Title>
      
      <ButtonsContainer>  
        <StartButton onPress={Start}>
          <ButtonText>
            Start
          </ButtonText>
        </StartButton>

        <StopButton onPress={Stop}>
          <ButtonText>
            Stop
          </ButtonText>
        </StopButton>
      </ButtonsContainer>

    </Container>
  );
}
