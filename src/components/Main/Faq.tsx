import styled from '@emotion/styled';
import Arrow from '../../assets/GrayArrow.svg';
import SummaryBox from './SummaryBox';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  const questions: Array<string> = [
    '다른 고등학교에서 전학 갈 수 있나요?',
    '기숙사 탈출하면 벌점 몇 점인가요?',
    '내신 몇 %여야 합격할 수 있나요?',
    '으이잉 어차피 멘티생기는데 디자인 해야하나요?',
    '공평하게 모두가 함께 디자인하는 거 어떻게 생각하시나요?',
  ];
  const answers: Array<string> = [
    '본교는 전입학을 허용하지 않습니다. \
    즉, 일반계 고등학교 뿐만 아니라 다른 마이스터 고등학교 재학생이라도 전학을 받아주지 않습니다. \
    따라서 본교에는 신입생으로만 입학할 수 있습니다.',
    '10점입니다 이후 행보에 따라 추가적인 벌점이 부가될 수 있으며 기숙사 퇴거조치를 받을 수 있습니다',
    '상위 5% 이내로 만들어서 오시면 면접을 갖다 박아도 들어오실 수 있을 수 있습니다.',
    '디자인 하셔야합니다',
    '모두가 같은 디자인을 하도록 하더라도 누군가는 좋은 결과물을 내놓고 \
    누군가는 차마 눈을 뜨지 못할 충격적인 디자인을 해냅니다. 쌈@뽕한 디자인을 위해 \
    한 몸 희생하신 당신께 감사를.',
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
