import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #0892a5;
  align-items: center;
  justify-content: center;
`;

export const LabelText = styled.Text`
  font-size: 25px;
  color: #fff;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  border-radius: 15px;
  background-color: #fff;
  padding: 5px 15px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background-color: #fff;
  padding: 10px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #0892a5;
`;
