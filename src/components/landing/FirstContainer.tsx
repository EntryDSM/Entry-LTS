import { Button, Text } from '@team-entry/design_system';
import styled from '@emotion/styled';
import MouseScroll from '../../assets/MouseScroll.svg';
import LandingBgImg from '../../assets/LandingBgImg.png';
import ArrowDoubleDown from '@/assets/ArrowDoubleDown.svg';
import { color } from '@team-entry/design_system/build/style/color';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
const First = () => {
  return (
    <WrapperWithBackground>
      <_Wrapper>
        <_TitleBox>
          <_Title>
            꿈을 이루는 학교,
            <br />
            대덕소프트웨어마이스터고
          </_Title>
          <Link to="/main">
            <_Button>함께하기</_Button>
          </Link>
        </_TitleBox>
        <Scroll src={ArrowDoubleDown} />
      </_Wrapper>
    </WrapperWithBackground>
  );
};

export default First;

const WrapperWithBackground = styled.div`
  background-image: url(${LandingBgImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

const _Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 70px 20px;
`;

const _TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  @media (max-height: 500px) {
    gap: 24px;
  }
`;

const _Title = styled.p`
  color: #fff;
  text-align: center;
  font-size: 70px;
  font-weight: 700;
  @media (max-width: 800px) {
    font-size: 48px;
  }
  @media (max-height: 800px) {
    font-size: 48px;
  }
  @media (max-width: 370px) {
    font-size: 36px;
  }
  @media (max-height: 370px) {
    font-size: 36px;
  }
`;

const _Button = styled.button`
  display: flex;
  padding: 20px 74px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background: #ff7e36;
  cursor: pointer;

  color: #fff;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 800px) {
    padding: 16px 48px;
    font-size: 20px;
  }
  @media (max-height: 800px) {
    padding: 16px 48px;
    font-size: 20px;
  }

  &:hover {
    background-color: #ff9154;
    border-color: #ff9154;
    color: #ffffff;
  }
`;

const Scroll = styled.img`
  height: 48px;
  width: 48px;
  position: absolute;
  justify-items: center;
  bottom: 28px;
  animation: bounce 1s infinite;

  @media (max-width: 800px) {
    width: 48px;
  }

  @media (max-height: 800px) {
    width: 48px;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;
