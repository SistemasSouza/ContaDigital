import React from 'react';
import {Image} from 'react-native';

import {Container, Title, Logo} from './styles';

import logoImg from '../../assets/logo.png';

const Login: React.FC = () => {
  return (
    <Container>
      <Logo source={logoImg} />
      <Title>Conta Digital Express</Title>
    </Container>
  );
};

export default Login;
