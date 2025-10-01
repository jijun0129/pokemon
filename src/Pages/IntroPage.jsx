import styled from '@emotion/styled';
import PokemonLogo from '../assets/pokemon-logo.png';
import { useNavigate } from 'react-router-dom';
// use -> hook의 종류 중 하나! 페이지 이동 훅
// 다른 페이지로 이동시켜주는 역할

const IntroPage = () => {
  const navigate = useNavigate();
  const ButtonClick = () => {
    navigate('/main'); // main 경로에 매핑된 컴포넌트 렌더링
  };

  return (
    <ContainerDiv>
      <Img src={PokemonLogo}></Img>
      <Button onClick={ButtonClick}>포켓몬 도감 시작하기</Button>
    </ContainerDiv>
  );
};

export default IntroPage;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // 메인축 정렬 : 가로 가운데 정렬
  align-items: center; // 교차축 정렬 : 세로 가운데 정렬
  height: 100vh; // 1vh = 화면높이의 1%, 화면 높이에 맞춰 꽉 채우고 싶을 때 사용
  gap: 20px;
  background-color: #ffe4b8;
`;
const Img = styled.img`
  width: 600px;
`;
const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;

  // &: 자기자신을 가르킴
  // &:hover = button:hover = 버튼 위에 마우스를 올렸을 때
  &:hover {
    background-color: #cc0000;
  }

  // &:active = 요소가 눌려지고 있을 때
  // &:focus = 요소가 포커스를 가진 상태일 때 (Tab)
  // 근데 이건 실습 제외하는걸로
  &:active,
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;
