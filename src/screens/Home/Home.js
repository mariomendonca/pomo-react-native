import React, { useState, useEffect } from 'react';

import {
  Container,
  Countdown,
  StartButton,
  ButtonText,
  StopButton,
  ButtonsContainer,
  Content,
  PauseButton
} from './styles'

export default function Home() {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const seconds = time % 60
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function Start() {
    setIsActive(true)
  }

  function Pause() {
    setIsActive(false)
    setTime(time)
  }

  function Stop() {
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
      <Content>
        <Countdown>
          {minuteLeft}{minuteRight} : {secondLeft}{secondRight}
        </Countdown>

        <ButtonsContainer>
          {isActive ? (
            <PauseButton onPress={Pause}>
              <ButtonText>
                Pause
              </ButtonText>
            </PauseButton>
          ) : (
            <StartButton onPress={Start}>
              <ButtonText>
                Start
              </ButtonText>
            </StartButton>
          )}

          <StopButton onPress={Stop}>
            <ButtonText>
              Stop
          </ButtonText>
          </StopButton>
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
