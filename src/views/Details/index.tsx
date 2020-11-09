import React from 'react';
import {Container, LabelText, Input, Button, ButtonText} from './styles';

const Details: React.FC = () => {
  return (
    <Container>
      <LabelText>Escreva o nome do personagem</LabelText>
      <Input placeholder="Luke Skywalker" />
      <Button>
        <ButtonText>Pesquisar</ButtonText>
      </Button>
    </Container>
  );
};

export default Details;
