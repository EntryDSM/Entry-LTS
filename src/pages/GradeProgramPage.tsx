import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import GradeProgramFooter from '@/components/grade/GradeProgramFooter';
import GradeProgram from '@/components/grade/GradeProgram';
import AllSelect, { Grade } from '../components/grade/AllSelect';

export interface IElement {
  id: number;
  title: string;
  subTitle?: string;
  type: 'grade' | 'input';
  placeholder?: string;
  unit?: string;
  grade?: Grade;
  value?: string;
}

const GradeProgramPage = () => {
  const location = useLocation();
  const [element, setElement] = useState<IElement[][]>([
    [
      { id: 1, title: '사회', subTitle: '(과목이 없을 경우 X로 기입해주세요)', type: 'grade', grade: 'A' },
      { id: 2, title: '기술가정', type: 'grade', grade: 'A' },
      { id: 3, title: '역사', type: 'grade', grade: 'A' },
      { id: 4, title: '수학', type: 'grade', grade: 'A' },
      { id: 5, title: '영어', type: 'grade', grade: 'A' },
      { id: 6, title: '국어', type: 'grade', grade: 'A' },
      { id: 7, title: '과학', type: 'grade', grade: 'A' },
    ],
    [
      { id: 1, title: '사회', subTitle: '(과목이 없을 경우 X로 기입해주세요)', type: 'grade', grade: 'A' },
      { id: 2, title: '기술가정', type: 'grade', grade: 'A' },
      { id: 3, title: '역사', type: 'grade', grade: 'A' },
      { id: 4, title: '수학', type: 'grade', grade: 'A' },
      { id: 5, title: '영어', type: 'grade', grade: 'A' },
      { id: 6, title: '국어', type: 'grade', grade: 'A' },
      { id: 7, title: '과학', type: 'grade', grade: 'A' },
    ],
    [
      { id: 1, title: '사회', subTitle: '(과목이 없을 경우 X로 기입해주세요)', type: 'grade', grade: 'A' },
      { id: 2, title: '기술가정', type: 'grade', grade: 'A' },
      { id: 3, title: '역사', type: 'grade', grade: 'A' },
      { id: 4, title: '수학', type: 'grade', grade: 'A' },
      { id: 5, title: '영어', type: 'grade', grade: 'A' },
      { id: 6, title: '국어', type: 'grade', grade: 'A' },
      { id: 7, title: '과학', type: 'grade', grade: 'A' },
    ],
    [
      { id: 1, title: '결석', placeholder: '결석 일수', type: 'input', unit: '일', value: '' },
      { id: 2, title: '지각', placeholder: '지각 횟수', type: 'input', unit: '회', value: '' },
      { id: 3, title: '조퇴', placeholder: '조퇴 횟수', type: 'input', unit: '회', value: '' },
      { id: 4, title: '결과', placeholder: '결과 일수', type: 'input', unit: '일', value: '' },
      { id: 5, title: '미인정 환산 결석', placeholder: '미인정 환산 결석 횟수', type: 'input', unit: '일', value: '' },
    ],
    [
      { id: 1, title: '1학년 봉사활동 시간', placeholder: '봉사 시간', type: 'input', unit: '시간', value: '' },
      { id: 2, title: '2학년 봉사활동 시간', placeholder: '봉사 시간', type: 'input', unit: '시간', value: '' },
      {
        id: 3,
        title: '3학년 봉사활동 시간',
        subTitle: '(졸업예정자의 경우 9월 30일까지만)',
        placeholder: '봉사 시간',
        type: 'input',
        unit: '시간',
        value: '',
      },
    ],
  ]);
  const [current, setCurrent] = useState<number>(0);
  let arr = [
    { step: 1, title: '3학년 1학기', element },
    {
      step: 2,
      title: '직전 학기',
      element,
    },
    { step: 3, title: '직전전 학기', element },
    { step: 3, title: '출석 점수', element },
    { step: 3, title: '봉사 점수', subTitle: '최대 12시간으로 환산됩니다', element },
  ];
  return (
    <_Container>
      <_Wrapper>
        <GradeProgram arr={arr} current={current} element={element} setElement={setElement} />
        <GradeProgramFooter arr={arr.length} current={current} setCurrent={setCurrent} />
      </_Wrapper>
    </_Container>
  );
};

export default GradeProgramPage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
`;

const _Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60rem;
  margin-top: 7rem;
`;
