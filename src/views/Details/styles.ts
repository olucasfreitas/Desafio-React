import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #bb7e5d;
  align-items: center;
  padding: 25px 0px;
`;

export const Text = styled.Text`
  font-size: 25px;
  color: #fff;
  margin-bottom: 5px;
`;

export const BookmarkButton = styled.TouchableOpacity`
  width: 30%;
  height: 50px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin-top: 20px;
`;

export const BookmarkButtonText = styled.Text`
  font-size: 15px;
  color: #bb7e5d;
`;
export const FlatList = styled.FlatList`
  margin-top: 20px;
`;

export const FlatListContainer = styled.View`
  width: 100%;
  height: 60px;
  background-color: #000;
  color: white;
  margin: 10px 0px;
`;
