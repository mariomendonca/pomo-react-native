import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #fff;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
  font-family: DMSans_400Regular;
  font-size: 30px;
`

export const StartButton = styled.TouchableHighlight`
  width: 45%;
  height: 40px;
  background: #eb67;
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`

export const ButtonText = styled.Text``

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 30px
`

export const StopButton = styled.TouchableHighlight`
  width: 45%;
  height: 40px;
  background: #f5f5;
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`
