import styled from '@emotion/styled';
import Arrow from '../../assets/GrayArrow.svg';
import SummaryBox from './SummaryBox';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  const questions: Array<string> = [
    '현재 다른 고등학교에 재학중인데 전학이 되나요?',
    '일반전형과 특별전형에 둘다 지원할 수 있나요?',
    '남 여 선발 비율이 정해져 있나요?',
    '전공동아리가 무엇인가요?',
    '평일 저녁에 외출이 가능한가요?',
  ];
  const answers: Array<string> = [
    '본교는 전입학을 허용하지 않습니다.\
    오직 신입생으로만 입학할 수 있습니다.',
    '아닙니다.\
    일반전형, 마이스터인재전형, 사회통합전형 중 한 가지 전형에만 지원 가능합니다.',
    '남녀 비율은 정해져 있지 않습니다.\
    성별에 관계없이 성적순으로 선발합니다.',
    '학생들이 활동 목표를 정하고 계획을 세워 조직하고 구성하는 자율동아리입니다.\
    프로젝트나 공부하고 싶은 분야를 단위로 구성합니다.',
    '병원 진료, 노트북 수리 등 특별한 사유가 있을 경우 방과후수업이나 동아리활동에 빠지고 외출할 수 있습니다.',
  ];
  const [nowOpen, setNowOpen] = useState<number>(-1);

  const handleClick = (idx: number) => {
    if (idx === nowOpen) {
      setNowOpen(-1);
      return;
    }
    setNowOpen(idx);
  };

  return (
    <_Wrapper>
      <_TitleBox>
        <span>궁금한 점이 있다면?</span>
        <div>
          <h2>자주 묻는 질문</h2>
          <Link to="/customer">
            <_MoveContainer>
              <span>이동하기</span>
              <img src={Arrow} alt="" />
            </_MoveContainer>
          </Link>
        </div>
      </_TitleBox>
      <_FAQBox>
        {questions.map((question, idx) => {
          return (
            <SummaryBox
              key={idx}
              title={question}
              content={answers[idx]}
              idx={idx}
              setNowOpen={handleClick}
              isOpen={nowOpen === idx}
            />
          );
        })}
      </_FAQBox>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  position: relative;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 54px;
`;

const _TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  & > span {
    color: #ff5f00;
    font-weight: 800;
    font-size: 20px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  & h2 {
    font-weight: 600;
    font-size: 36px;
  }
`;

const _MoveContainer = styled.div`
  display: flex;
  cursor: pointer;

  & > span {
    font-size: 20px;
    font-weight: 500;
    color: #b0b0b0;
  }
`;

const _FAQBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default Faq;
