import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { Text } from '@team-entry/design_system';
import { useInput } from '@/hooks/useInput';
import { subject } from '@/constant/grade';
import AllSelect from '@/components/Grade/SelectGrade/AllSelect';
import GradePreview from '@/components/Grade/GradePreview';
import ProgressBar from '@/components/Grade/ProgressBar';
import { GradeStatusType, ISelectGradeElement, IWriteGradeElement } from '@/interfaces/grade';
import SelectGrade from '@/components/Grade/SelectGrade/SelectGrade';
import WriteAttendence from '@/components/Grade/WriteInfo/WriteAttendence';
import GradeFooter from '@/components/Grade/GradeFooter';
import { getAttendenceScore, getMaxScore, getSelectGradeScore, getVoluntterScore } from '@/utils/gradeCalculater';

const GradeProgramPage = () => {
  const [current, setCurrent] = useState(0);
  const { form: blackexam, onChange: changeBlackexam } = useInput({ score: 0 });
  const [searchParams] = useSearchParams();
  const gradeStatus = searchParams.get('gradeStatus');
  const [score, setScore] = useState({
    gradeScore: 0,
    attendenceScore: 0,
    volunteerScore: 0,
    maxScore: 0,
  });

  const { form: selectGradeElement, setForm: setSelectGradeElement } = useInput<ISelectGradeElement>({
    korean_grade: ['X', 'X', 'X', 'X'],
    social_grade: ['X', 'X', 'X', 'X'],
    history_grade: ['X', 'X', 'X', 'X'],
    math_grade: ['X', 'X', 'X', 'X'],
    science_grade: ['X', 'X', 'X', 'X'],
    english_grade: ['X', 'X', 'X', 'X'],
    tech_and_home_grade: ['X', 'X', 'X', 'X'],
  });

  const { form: writeGradeElement, onChange: changeWriteGradeElement } = useInput<IWriteGradeElement>({
    day_absence_count: 0,
    lecture_absence_count: 0,
    lateness_count: 0,
    early_leave_count: 0,
    volunteer_time: 0,
  });

  const isGraduate = gradeStatus === 'graduate';
  const titles = isGraduate
    ? [
        { step: 1, title: '3학년 2학기', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 2, title: '3학년 1학기', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 3, title: '2학년 2학기(직전학기)', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 4, title: '2학년 1학기(직전 전학기)', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 5, title: '출석 점수 & 봉사 점수' },
      ]
    : [
        { step: 0, title: '' },
        { step: 1, title: '3학년 1학기', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 2, title: '직전 학기', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 3, title: '직전전 학기', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 4, title: '출석 점수 & 봉사 점수' },
      ];

  useEffect(() => {
    if (gradeStatus === 'prospectiveGraduate') setCurrent(1);
    else if (gradeStatus === 'graduate') setCurrent(0);
    else if (gradeStatus === 'qualificationExam') setCurrent(4);
    else window.location.replace('https://www.entrydsm.hs.kr/grade');
  }, [gradeStatus]);

  useEffect(() => {
    gradeStatus === 'qualificationExam'
      ? setScore({
          gradeScore: Math.min(140, Math.max(0, Math.round(((blackexam.score - 50) / 50) * 80 * 10) / 10)),
          attendenceScore: 15,
          volunteerScore: Math.min(15, Math.max(0, Math.round(((blackexam.score - 40) / 60) * 15 * 10) / 10)),
          maxScore: getMaxScore(),
        })
      : setScore({
          gradeScore: getSelectGradeScore(current, selectGradeElement),
          attendenceScore: current === 4 ? getAttendenceScore(writeGradeElement) : 0,
          volunteerScore: getVoluntterScore(writeGradeElement.volunteer_time),
          maxScore: getMaxScore(),
        });
  }, [current, writeGradeElement, blackexam]);

  return (
    <Container>
      <Wrapper>
        <DIV>
          <Header>
            <Title>
              <Text color="black900" size="header1">
                {gradeStatus === 'qualificationExam' ? '검정고시 점수' : titles[current].title}
              </Text>
              <Text color="black500" size="body3">
                {titles[current].subTitle && titles[current].subTitle}
              </Text>
            </Title>
            <GradeWrapper>
              <GradePreview
                gradeScore={score.gradeScore}
                attendenceScore={score.attendenceScore}
                volunteerScore={score.volunteerScore}
                maxScore={score.maxScore}
              />
              {current < 4 && (
                <AllSelect
                  selectGradeElement={selectGradeElement}
                  setSelectGradeElement={setSelectGradeElement}
                  current={current}
                />
              )}
            </GradeWrapper>
          </Header>
          <ProgressBar step={titles[current].step} gradeStatus={gradeStatus as GradeStatusType} />
          <_Selects>
            {current < 4 &&
              Object.entries(subject).map((item) => {
                return (
                  <SelectGrade
                    key={item[0]}
                    title={item[0]}
                    gradesKey={item[1] as keyof ISelectGradeElement}
                    selectGradeElement={selectGradeElement}
                    setSelectGradeElement={setSelectGradeElement}
                    current={current}
                  />
                );
              })}
            {current === 4 && (
              <WriteAttendence
                gradeStatus={gradeStatus as GradeStatusType}
                blackexam={blackexam.score}
                changeBlackexam={changeBlackexam}
                writeGradeElement={writeGradeElement}
                changeWriteGradeElement={changeWriteGradeElement}
              />
            )}
          </_Selects>
        </DIV>
        <GradeFooter
          gradeStatus={gradeStatus as GradeStatusType}
          current={current}
          setCurrent={setCurrent}
          maxScore={score.volunteerScore + score.attendenceScore}
          gradeScore={score.gradeScore}
        />
      </Wrapper>
    </Container>
  );
};

export default GradeProgramPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  margin-top: 5rem;
`;

const DIV = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GradeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const _Selects = styled.div`
  margin-top: 0.7rem;
  margin-bottom: 1rem;
`;
