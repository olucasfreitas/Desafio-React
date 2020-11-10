import React, {useState} from 'react';
import {Container, LabelText, Input, Button, ButtonText} from './styles';
import {useNavigation} from '@react-navigation/native';

const Details: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  return (
    <Container>
      <LabelText>Escreva o nome do personagem</LabelText>
      <Input
        placeholder="Example: Luke Skywalker"
        onChangeText={(name) => setName(name)}
        value={name}
      />
      <Button
        onPress={() => {
          navigation.navigate('Details', {
            character_name: name,
          });
        }}>
        <ButtonText>Pesquisar</ButtonText>
      </Button>
    </Container>
  );
};

export default Details;
