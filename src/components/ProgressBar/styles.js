import styled from 'styled-components/native';
import colors from '../../styles/Colors'

export const Bar = styled.View`
  width: 100%;
  height: 60px;
  background: #666;
  border-radius: 10px;
`;

export const PercentText = styled.Text`
  font-size: 40px;
  color: ${colors.green};
  margin: auto auto;
  z-index: 1;
`

export const PercentBar = styled.View`
  width: ${( props ) => props.width };
  height: 60px;
  background: #000;
  border-radius: 10px;
  position: absolute;
`
