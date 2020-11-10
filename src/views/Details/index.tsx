import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {
  Container,
  Text,
  BookmarkButton,
  BookmarkButtonText,
  FlatListContainer,
} from './styles';
import {useRoute} from '@react-navigation/native';

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
}

interface Film {
  url: string;
  title: string;
  director: string;
  release_date: string;
}

const Details: React.FC = () => {
  const route = useRoute();
  const character_name = route.params;
  const [character, setCharacter] = useState<Character>();
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    async function loadInfo() {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${character_name}`,
      );
      const data = await response.json();
      const homeworld = await fetch(data.results[0].homeworld);
      const homeworld_response = await homeworld.json();
      const formated_data = {
        name: data.results[0].name,
        height: data.results[0].height,
        mass: data.results[0].mass,
        hair_color: data.results[0].hair_color,
        skin_color: data.results[0].skin_color,
        eye_color: data.results[0].eye_color,
        birth_year: data.results[0].birth_year,
        gender: data.results[0].gender,
        homeworld: homeworld_response.name,
        films: data.results[0].films,
      };
      setCharacter(formated_data);
    }
    loadInfo();
  }, [character, character_name]);

  async function loadFilms() {
    const films_array: Film[] = [];
    character?.films.forEach(async (film) => {
      const response_film = await fetch(film);
      const data_film = await response_film.json();
      const film_format = {
        url: data_film.url,
        title: data_film.title,
        director: data_film.director,
        release_date: data_film.release_date,
      };
      films_array.push(film_format);
      setFilms(films_array);
    });
    return;
  }

  return (
    <Container>
      <Text>name: {character?.name}</Text>
      <Text>height: {character?.height}</Text>
      <Text>mass: {character?.mass}</Text>
      <Text>hair_color: {character?.hair_color}</Text>
      <Text>skin_color: {character?.skin_color}</Text>
      <Text>eye_color: {character?.eye_color}</Text>
      <Text>birth_year: {character?.birth_year}</Text>
      <Text>gender: {character?.gender}</Text>
      <Text>homeworld: {character?.homeworld}</Text>
      <BookmarkButton onPress={loadFilms}>
        <BookmarkButtonText>Bookmark</BookmarkButtonText>
      </BookmarkButton>
      <FlatList
        data={films}
        keyExtractor={(item) => item.url}
        renderItem={({item}) => (
          <FlatListContainer key={item.url}>
            <Text>{item.title}</Text>
            <Text>{item.director}</Text>
            <Text>{item.release_date}</Text>
          </FlatListContainer>
        )}
      />
    </Container>
  );
};

export default Details;
