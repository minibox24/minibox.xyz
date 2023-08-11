import { FC } from "react";
import styled, { keyframes } from "styled-components";
import waveSvg from "./assets/wave.svg";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <Container>
      <Wave src={waveSvg} alt="wave" />
      <Title>한번 시간 내서 새로 만들어야겠다는 생각만 하는 중</Title>
      <Link href="https://discord.gg/pbd2xXJ">미니월드 디스코드</Link>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 100px;

  min-height: 100vh;
  background-color: #0d1117;
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WaveKeyframes = keyframes`
  8%, 24% {
      transform: rotate(10deg);
  }
  16%, 32% {
      transform: none;
  }
`;

const Wave = styled.img`
  width: 120px;
  margin-bottom: 40px;

  animation: ${WaveKeyframes} 2s ease-in-out infinite;
`;

const Title = styled.h1`
  text-align: center;
`;

const Link = styled.a`
  color: #308cf5;
  text-decoration: underline;

  &:hover,
  &:focus,
  &:active {
    color: #308cf5;
    text-decoration: underline;
  }
`;

export default App;
