import Star from '@/assets/star';
import Github from '@/assets/Github';
import styled from '@emotion/styled';
import { useState } from 'react';
import { css } from '@emotion/react';

// 이미지 import 방식 변경
import aboutImg1 from '@/assets/aboutImgs/aboutImg1.png';
import aboutImg2 from '@/assets/aboutImgs/aboutImg2.png';
import aboutImg3 from '@/assets/aboutImgs/aboutImg3.png';
import aboutImg4 from '@/assets/aboutImgs/aboutImg4.png';
import aboutImg5 from '@/assets/aboutImgs/aboutImg5.png';

const developers = [
  {
    id: 0,
    name: '이지후',
    grade: '2학년',
    role: 'PM & Frontend',
    about: '제품 품질 향상을 위해 항상 노력하는 개발자 이지후입니다',
    github: 'https://github.com/dutexion',
    githubUsername: '@dutexion',
    image: aboutImg1,
  },
  {
    id: 1,
    name: '김어진',
    grade: '2학년',
    role: 'Frontend',
    about: '✨ 사용자 경험을 중요시하며 끊임없이 개선하는 개발자 김어진입니다',
    github: 'https://github.com/kimeojin35',
    githubUsername: '@kimeojin35',
    image: aboutImg2,
  },
  {
    id: 2,
    name: '박지민',
    grade: '2학년',
    role: 'Backend',
    about: '최선을 기대하되 최악에 대비하는 프론트엔드 개발자 박지민입니다',
    github: 'https://github.com/wlalsplus100',
    githubUsername: '@wlalsplus100',
    image: aboutImg3,
  },
  {
    id: 3,
    name: '부현수',
    grade: '2학년',
    role: 'DevOps',
    about: '고객의 요구사항을 빠르게 수용하며 제품의 성장을 중요시 하는 개발자 부현수입니다',
    github: 'https://github.com/HyunSu1768',
    githubUsername: '@HyunSu1768',
    image: aboutImg4,
  },
  {
    id: 4,
    name: '김도경',
    grade: '2학년',
    role: 'Backend',
    about: '안정적이고 효율적인 서비스를 개발하여 사용자 경험을 향상시키는 것을 목표로 하는 백엔드개발자 김도경입니다',
    github: 'https://github.com/rudeh2926',
    githubUsername: '@rudeh2926',
    image: aboutImg5,
  },
];

const DeveloperIntroduce = () => {
  return (
    <Section>
      <span>최선을 다하는 엔트리 팀을 소개해드릴게요</span>
      <TextWrapper>
        <h3>개발자 소개</h3>
        <span>사진에 마우스를 올려 더 자세한 정보를 확인해보세요</span>
      </TextWrapper>
      <CardContainer>
        {developers.map((developer, index) => (
          <Card key={index} developer={developer} />
        ))}
      </CardContainer>
    </Section>
  );
};

const Card = ({ developer }: { developer: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CardWrapper onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Overlay isOpen={isOpen} />
      <span>{developer.grade}</span>
      <BigStar isOpen={isOpen}>
        <BigStarAnimationBox isOpen={isOpen}>
          <Star size={48} />
        </BigStarAnimationBox>
      </BigStar>
      <InfoContainer>
        <DefaultInfo isOpen={isOpen}>
          <p>{developer.role}</p>
          <div>
            <Name>{developer.name}</Name>
            <StarAnimationBox isOpen={isOpen}>
              <Star size={25}></Star>
            </StarAnimationBox>
          </div>
        </DefaultInfo>
        <About isOpen={isOpen}>
          <p>About</p>
          <span>{developer.about}</span>
        </About>
        <Link isOpen={isOpen}>
          <a href={developer.github}>{developer.githubUsername}</a>
          <Github />
        </Link>
      </InfoContainer>
      <DeveloperImage src={developer.image} alt={developer.name} />
    </CardWrapper>
  );
};

export default DeveloperIntroduce;

interface IsOpen {
  isOpen: boolean;
}

const DeveloperImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -2;
`;

const Overlay = styled.div<IsOpen>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1);
  opacity: ${({ isOpen }) => (isOpen ? 0.5 : 0.25)};
  transition: opacity 300ms;
  z-index: -1;
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
