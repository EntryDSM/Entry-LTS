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
import { editScore, getScore, editGedScore, getGedScore } from '@/utils/api/score';

const GradeProgramPage = () => {
  const [current, setCurrent] = useState(0);
  const { form: blackexam, onChange: changeBlackexam, setForm: setBlackexam } = useInput({ score: 0 });
  const [searchParams] = useSearchParams();
  const gradeStatus = searchParams.get('gradeStatus');
  const [score, setScore] = useState({
    gradeScore: 0,
    attendenceScore: 0,
    volunteerScore: 0,
    maxScore: 0,
  });

  const { data: getData } = getGedScore();
  if (getData) {
    setBlackexam({
      score: getData.averageScore,
    });
  }

  const { mutate: editGedScoreMutate } = editGedScore();
  const handleBlackexamSubmit = () => {
    const payload = { averageScore: blackexam.score };
    editGedScoreMutate(payload, {
      onSuccess: () => {
        alert('점수 저장 성공.');
      },
      onError: () => {
        console.log(payload);
        alert('점수 저장 실패');
      },
    });
  };

  const { data } = getScore();

  const { form: selectGradeElement, setForm: setSelectGradeElement } = useInput<ISelectGradeElement>({
    korean_grade: ['X', 'X', 'X', 'X'],
    social_grade: ['X', 'X', 'X', 'X'],
    history_grade: ['X', 'X', 'X', 'X'],
    math_grade: ['X', 'X', 'X', 'X'],
    science_grade: ['X', 'X', 'X', 'X'],
    english_grade: ['X', 'X', 'X', 'X'],
    tech_and_home_grade: ['X', 'X', 'X', 'X'],
  });

  const {
    form: writeGradeElement,
    onChange: changeWriteGradeElement,
    setForm: setWriteGradeElement,
  } = useInput<IWriteGradeElement>({
    day_absence_count: 0,
    lecture_absence_count: 0,
    lateness_count: 0,
    early_leave_count: 0,
    volunteer_time: 0,
  });

  useEffect(() => {
    if (data) {
      setSelectGradeElement({
        korean_grade: data.koreanGrade.split(''),
        social_grade: data.socialGrade.split(''),
        history_grade: data.historyGrade.split(''),
        math_grade: data.mathGrade.split(''),
        science_grade: data.scienceGrade.split(''),
        english_grade: data.englishGrade.split(''),
        tech_and_home_grade: data.techAndHomeGrade.split(''),
      });
      setWriteGradeElement({
        day_absence_count: data.absenceDayCount,
        lecture_absence_count: data.lectureAbsenceCount,
        lateness_count: data.latenessCount,
        early_leave_count: data.earlyLeaveCount,
        volunteer_time: data.volunteerTime,
      });
    }
  }, [data, setWriteGradeElement, setSelectGradeElement]);
  const { mutate: editScoreMutate } = editScore();
  const handleSubmit = () => {
    const payload = {
      koreanGrade: selectGradeElement.korean_grade.join(''),
      socialGrade: selectGradeElement.social_grade.join(''),
      historyGrade: selectGradeElement.history_grade.join(''),
      mathGrade: selectGradeElement.math_grade.join(''),
      scienceGrade: selectGradeElement.science_grade.join(''),
      englishGrade: selectGradeElement.english_grade.join(''),
      techAndHomeGrade: selectGradeElement.tech_and_home_grade.join(''),
      absenceDayCount: writeGradeElement.day_absence_count,
      lectureAbsenceCount: writeGradeElement.lecture_absence_count,
      latenessCount: writeGradeElement.lateness_count,
      earlyLeaveCount: writeGradeElement.early_leave_count,
      volunteerTime: writeGradeElement.volunteer_time,
    };

    editScoreMutate(payload, {
      onSuccess: () => {
        alert('점수가 성공적으로 저장되었습니다.');
      },
      onError: () => {
        alert('점수 저장에 실패했습니다.');
      },
    });
  };

  const isGraduate = gradeStatus === 'graduate';
  const titles = isGraduate
    ? [
        { step: 1, title: '3학년 2학기', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 2, title: '3학년 1학기', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 3, title: '2학년 2학기(직전학기)', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 4, title: '2학년 1학기(직전 전학기)', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 5, title: '출석 점수 & 봉사 점수', subTitle: '' },
      ]
    : [
        { step: 1, title: '3학년 1학기', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 2, title: '직전 학기', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 3, title: '직전전 학기', subTitle: '과목이 없는 경우 X로 기입하세요' },
        { step: 4, title: '출석 점수 & 봉사 점수', subTitle: '' },
      ];

  useEffect(() => {
    if (gradeStatus === 'prospectiveGraduate') setCurrent(0);
    else if (gradeStatus === 'graduate') setCurrent(0);
    else if (gradeStatus === 'qualificationExam') setCurrent(titles.length - 1);
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
          attendenceScore: current === titles.length - 1 ? getAttendenceScore(writeGradeElement) : 0,
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
              {current < titles.length - 1 && (
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
            {current < titles.length - 1 &&
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
            {current === titles.length - 1 && (
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
          onClick={() => (gradeStatus === 'qualificationExam' ? handleBlackexamSubmit() : handleSubmit())}
          onSubmit={() => (gradeStatus === 'qualificationExam' ? handleBlackexamSubmit() : handleSubmit())}
          length={titles.length - 1}
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
