import Star from '@/assets/star';
import Github from '@/assets/Github';
import styled from '@emotion/styled';
import { useState } from 'react';
import { css } from '@emotion/react';

const DeveloperIntroduce = () => {
  const cards = new Array(10).fill(<Card />, 0);

  return (
    <Section>
      <span>최선을 다하는 엔트리 팀을 소개해드릴게요</span>
      <TextWrapper>
        <h3>개발자 소개</h3>
        <span>사진에 마우스를 올려 더 자세한 정보를 확인해보세요</span>
      </TextWrapper>
      <CardContainer>{cards}</CardContainer>
    </Section>
  );
};

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CardWrapper onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <span>1학년</span>
      <BigStar isOpen={isOpen}>
        <BigStarAnimationBox isOpen={isOpen}>
          <Star size={48} />
        </BigStarAnimationBox>
      </BigStar>
      <InfoContainer>
        <DefaultInfo isOpen={isOpen}>
          <p>Beakend</p>
          <div>
            <Name>이태영</Name>
            <StarAnimationBox isOpen={isOpen}>
              <Star size={25}></Star>
            </StarAnimationBox>
          </div>
        </DefaultInfo>
        <About isOpen={isOpen}>
          <p>About</p>
          <span>쉽지 않은 사용자 경험을 중요시하는 배젠드 데브오브즈 햄스터입니다.</span>
        </About>
        <Link isOpen={isOpen}>
          <a href="https://github.com/wlalsplus100">@hamster</a>
          <Github />
        </Link>
      </InfoContainer>
    </CardWrapper>
  );
};

export default DeveloperIntroduce;

interface IsOpen {
  isOpen: boolean;
}

const Section = styled.section`
  width: calc(100% - 60px);
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > span {
    color: #ff6c1a;
    font-weight: bold;
    font-size: 20px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  & > h3 {
    font-weight: 800;
    font-size: 36px;
  }

  & > span {
    font-size: 20px;
    color: #b0b0b0;
    @media screen and (max-width: 765px) {
      display: none;
    }
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

const CardWrapper = styled.div`
  width: 280px;
  height: 360px;
  border-radius: 18px;
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: aqua;
  overflow: hidden;
  color: white;

  & > span {
    font-weight: bold;
    font-size: 20px;
    color: #ff7e36;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const DefaultInfo = styled.div<IsOpen>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: 300ms;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: translate(0, 0);
        `
      : css`
          transform: translate(0, 136px);
        `}

  & > p {
    font-weight: bold;
    font-size: 20px;
    color: #ff7e36;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Name = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

const About = styled.span<IsOpen>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: 300ms;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transition-delay: 300ms;
          opacity: 1;
        `
      : css`
          transition-delay: 0;
          opacity: 0;
        `}

  & > p {
    font-size: 16px;
    font-weight: bold;
  }

  & > span {
    font-size: 14px;
    word-break: keep-all;
  }
`;

const Link = styled.div<IsOpen>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  transition: 200ms;
  ${({ isOpen }) =>
    isOpen
      ? css`
          transition-delay: 600ms;
          opacity: 1;
        `
      : css`
          transition-delay: 0;
          opacity: 0;
        `}

  & > a {
    font-size: 14px;
    font-weight: 600;
  }
`;

const StarAnimationBox = styled.div<IsOpen>`
  transition: 300ms;
  ${({ isOpen }) =>
    isOpen
      ? css`
          transition-delay: 300ms;
          transform: scale(100%);
        `
      : css`
          transition-delay: 0;
          transform: scale(0);
        `}
`;

const BigStar = styled.div<IsOpen>`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isOpen }) => (isOpen ? css`translate(100px, -80px)` : css`translate(0, 0)`)};
  transition: 300ms;
`;

const BigStarAnimationBox = styled.div<IsOpen>`
  transform: ${({ isOpen }) => (isOpen ? css`rotate(225deg)` : css`rotate(45deg)`)};
  transition: 300ms;
`;
