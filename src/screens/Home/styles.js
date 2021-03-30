import styled from 'styled-components/native';
import colors from '../../styles/Colors'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    background: #fff;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`

export const Countdown = styled.Text`
  font-family: DMSans_400Regular;
  font-size: 70px;
`

export const StartButton = styled(RectButton)`
  width: 45%;
  height: 60px;
  background: ${colors.primary_green};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export const ButtonText = styled.Text`
  font-family: DMSans_500Medium;
  color: white;
  font-size: 20px
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30px
`

export const StopButton = styled(RectButton)`
  width: 45%;
  height: 60px;
  background: red;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export const PauseButton = styled(RectButton)`
  width: 45%;
  height: 60px;
  background: yellow;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`
