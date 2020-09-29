import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Logo = styled.Image`
  margin-top: 60px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #ffffff;
  font-family: 'Roboto-Medium';
  margin: 10px 0 24px;
`;
