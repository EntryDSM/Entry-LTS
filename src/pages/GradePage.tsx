import { Button, Text, theme } from '@team-entry/design_system';
import styled from '@emotion/styled';
import BeforeGraduate from '../assets/BeforeGraduate.svg';
import Graduate from '../assets/Graduate.svg';
import BlackExam from '../assets/BlackExam.svg';
import { Link } from 'react-router-dom';

const GradePage = () => {
  const list = [
    {
      img: BeforeGraduate,
      title: '졸업예정자',
      text: '아직 중학교를 졸업하지 않은\n졸업자를 칭합니다',
      type: 'beforegraduate',
    },
    { img: Graduate, title: '졸업자', text: '이미 중학교를 졸업한 \n지원자를 칭합니다.', type: 'graduate' },
    { img: BlackExam, title: '검정고시', text: '(중학교 졸업학력)\n\n', type: 'blackexam' },
  ];

  return (
    <_Container>
      <_Wrapper>
        <Text color="black900" size="header1">
          성적 산출 유형 선택
        </Text>
        <_Line></_Line>
        <_Cards>
          {list.map((res) => {
            const { img, text, title, type } = res;
            return (
              <_Card>
                <img src={img}></img>
                <Text margin={[41, 0, 15, 0]} color="black900" size="title2">
                  {title}
                </Text>
                <Text margin={['bottom', 80]} align="center" color="black600" size="body2">
                  {text}
                </Text>
                <Link to="/gradeprogram" state={{ type }}>
                  <Button onClick={() => console.log('hello')} color="orange" kind="rounded">
                    선택
                  </Button>
                </Link>
              </_Card>
            );
          })}
        </_Cards>
      </_Wrapper>
    </_Container>
  );
};

export default GradePage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  margin-top: 10rem;
`;

const _Line = styled.div`
  width: 4rem;
  height: 2px;
  background-color: ${theme.color.orange500};
  margin: 2rem;
`;

const _Cards = styled.div`
  display: flex;
  gap: 2rem;
`;

const _Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 21rem;
  height: 27rem;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
