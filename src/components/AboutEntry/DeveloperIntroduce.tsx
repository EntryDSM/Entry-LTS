import Star from '@/assets/star';
import Github from '@/assets/Github';
import styled from '@emotion/styled';
import { useState } from 'react';
import { keyframes, css } from '@emotion/react';

const DeveloperIntroduce = () => {
  return (
    <Section>
      <span>최선을 다하는 엔트리 팀을 소개해드릴게요</span>
      <TextWrapper>
        <h3>개발자 소개</h3>
        <span>사진에 마우스를 올려 더 자세한 정보를 확인해보세요</span>
      </TextWrapper>
      <CardContainer>
        <Card />
      </CardContainer>
    </Section>
  );
};

const Card = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <CardWrapper
      onMouseOver={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
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
            {isOpen && (
              <StarAnimationBox>
                <Star size={25}></Star>
              </StarAnimationBox>
            )}
          </div>
        </DefaultInfo>
        {isOpen && (
          <>
            <About>
              <p>About</p>
              <span>쉽지 않은 사용자 경험을 중요시하는 배젠드 데브오브즈 햄스터입니다.</span>
            </About>
            <Link>
              <a href="https://github.com/wlalsplus100">@hamster</a>
              <Github />
            </Link>
          </>
        )}
      </InfoContainer>
    </CardWrapper>
  );
};

export default DeveloperIntroduce;

interface IsOpen {
  isOpen: boolean;
}

const smallStarAnimation = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(100%);
    }
`;

const defaultInfoPullUp = keyframes`
    0% {
        transform: translate(0, 100%);
    }
    100% {
        transform: translate(0, 0)
    }
`;

const opacityAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const bigStarAnimation = keyframes`
    0% {
        transform: rotate(45deg);
    } 
    100% {
        transform: rotate(-44deg)
    }
`;

const bigStarContainerAnimation = keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
        transform: translate(100px, -100px);
    }
`;

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
  animation: ${({ isOpen }) => (isOpen ? defaultInfoPullUp : '')} 300ms linear;

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

const About = styled.span`
  display: flex;
  flex-direction: column;
  gap: 6px;
  opacity: 0;
  & > p {
    font-size: 16px;
    font-weight: bold;
  }

  & > span {
    font-size: 14px;
    word-break: keep-all;
  }
  animation: ${opacityAnimation} 300ms 300ms forwards linear;
`;

const Link = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  opacity: 0;

  animation: ${opacityAnimation} 200ms 600ms forwards linear;

  & > a {
    font-size: 14px;
    font-weight: 600;
  }
`;

const StarAnimationBox = styled.div`
  transform: scale(0);
  animation: ${smallStarAnimation} 300ms 300ms forwards;
`;

const BigStar = styled.div<IsOpen>`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${bigStarContainerAnimation} 600ms forwards;
        `
      : css`
          animation: ${bigStarContainerAnimation} 300ms reverse backwards;
        `};
`;

const BigStarAnimationBox = styled.div<IsOpen>`
  transform: rotate(45deg);
  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${bigStarAnimation} 300ms forwards;
        `
      : css`
          animation: ${bigStarAnimation} 300ms reverse backwards;
        `};
`;
