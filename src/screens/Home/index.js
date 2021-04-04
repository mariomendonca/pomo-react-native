import React, { useState, useEffect } from 'react';
import { set } from 'react-native-reanimated';

import ProgressBar from '../../components/ProgressBar'

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
  const workCicle = 25
  const shortBreak = 5
  const longBreak = 10


  const [isActive, setIsActive] = useState(false)
  const [type, setType] = useState(workCicle)
  // const [time, setTime] = useState(type * 60)
  const [time, setTime] = useState(25)
  const [cicleCounter, setCicleCounter] = useState(0)

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

  function Reset() {
    clearInterval(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
    setType(workCicle)
  }

  function countdownTimeout() {
    setTimeout(() => {
      setTime(time - 1)
    }, 1000)
  } 

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout()
    } else if (isActive && time === 0 && type === workCicle && cicleCounter < 1) {
      clearInterval(countdownTimeout)
      // setIsActive(false)
      setType(shortBreak)
      setTime(5)
      // setTime(5 * 60)
      setCicleCounter(cicleCounter + 1)
    } else if (isActive && time === 0 && type === workCicle) {
      clearInterval(countdownTimeout)
      setType(longBreak)
      setTime(10)
      // setTime(4)
      setCicleCounter(cicleCounter + 1)
    } else if (isActive && time === 0 && type === shortBreak) {
      clearInterval(countdownTimeout)
      setType(workCicle)
      setTime(6)
    } else if (isActive && time === 0 && type === longBreak) {
      clearInterval(countdownTimeout)
      setType(workCicle)
      setTime(25)
      // setTime(6)
      setCicleCounter(0)
    }

  }, [isActive, time])

  const [percentage, SetPercentage] = useState(0)


  useEffect(() => {
    SetPercentage(Math.floor((100 * (type - time)) / type))
    // SetPercentage(Math.floor((100 * (type * 60 - time)) / (type * 60)))
  }, [time])

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

          <StopButton onPress={Reset}>
            <ButtonText>
              Stop
            </ButtonText>
          </StopButton>
        </ButtonsContainer>
        <Countdown>
          {type}
        </Countdown>
        <Countdown>
          {cicleCounter}
        </Countdown>
        <ProgressBar BarPercent={`${percentage}%`}/>
      </Content>
    </Container>
  );
}
