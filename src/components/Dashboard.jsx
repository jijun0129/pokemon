import styled from '@emotion/styled';
import Pokeball from '../assets/pokeball.png';
import PokemonCard from './PokemonCard';

const Dashboard = ({ selectPokemon, setSelectPokemon }) => {
  return (
    <DashboardDiv>
      <TitleH2>나만의 포켓몬</TitleH2>
      <ContentDiv>
        {selectPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            selectPokemon={selectPokemon}
            setSelectPokemon={setSelectPokemon}
            select={true}
          />
        ))}
        {Array.from({ length: 6 - selectPokemon.length }).map((_, index) => (
          <Box>
            <Img key={index} src={Pokeball} alt='Pokeball' />
          </Box>
        ))}
      </ContentDiv>
    </DashboardDiv>
  );
};

export default Dashboard;

const DashboardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

const TitleH2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #ff0000;
  margin: 20px 0;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-items: center;
  gap: 20px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  padding: 25px;
  border-radius: 10px;
  border: 2px dashed #d0d0d0;
  background-color: #ffffff;
`;

const Box = styled.div`
  height: 225.5px;
`;
