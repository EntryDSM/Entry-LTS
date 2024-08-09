import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import { GradeStatusType } from '@/interfaces/grade';
import { useModal } from '@/hooks/useModal';
import { MAIN_URL } from '@/constant/env';

interface IGradeFooterProps {
  gradeStatus: GradeStatusType;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  maxScore: number;
  gradeScore: number;
  onSubmit?: () => void;
  onClick?: () => void;
  length?: number;
  certificateScore: number;
  dsmAlgorithmScore: number;
  qualificationExamScore: number;
}

const GradeFooter = ({
  gradeStatus,
  current,
  setCurrent,
  maxScore,
  gradeScore,
  onSubmit,
  onClick,
  length,
  certificateScore,
  dsmAlgorithmScore,
  qualificationExamScore,
}: IGradeFooterProps) => {
  const { Modal, modalState, setModalState, open } = useModal({ useBlur: false });

  const clickEvent = () => {
    if (onClick) {
      onClick();
    }
    setModalState('SUBMIT_GRADE'), open();
  };
  return (
    <>
      <_Footer onSubmit={onSubmit}>
        <Button
          color="black"
          kind="outlined"
          disabled={current === 0}
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          이전
        </Button>
        {current !== length ? (
          <Button
            color="orange"
            kind="contained"
            onClick={() => {
              setCurrent(current + 1);
            }}
          >
            다음
          </Button>
        ) : (
          <Button color="orange" kind="contained" onClick={clickEvent}>
            완료
          </Button>
        )}
      </_Footer>
      {modalState === 'SUBMIT_GRADE' && (
        <Modal>
          <_Container>
            <Text size="title1" color="black900">
              성적 산출 결과
            </Text>
            <_DIV>
              <Text size="header3" color="black900">
                일반 전형:
              </Text>
              <_ScoreBox>
                <Text size="header3" color="orange900">
                  {gradeStatus === 'qualificationExam'
                    ? qualificationExamScore * 34 + dsmAlgorithmScore
                    : ((gradeScore * 175) / 100 + maxScore + dsmAlgorithmScore).toFixed(3)}
                </Text>
                <Text color="black400" size="title3">
                  /170
                </Text>
              </_ScoreBox>
            </_DIV>
            <_DIV>
              <Text size="header3" color="black900">
                사회통합 전형:
              </Text>
              <_ScoreBox>
                <Text size="header3" color="orange900">
                  {gradeStatus === 'qualificationExam'
                    ? qualificationExamScore * 22 + dsmAlgorithmScore + certificateScore
                    : (gradeScore + maxScore + dsmAlgorithmScore + certificateScore).toFixed(3)}
                </Text>
                <Text color="black400" size="title3">
                  /110
                </Text>
              </_ScoreBox>
            </_DIV>
            <_DIV>
              <Text size="header3" color="black900">
                마이스터 인재:
              </Text>
              <_ScoreBox>
                <Text size="header3" color="orange900">
                  {gradeStatus === 'qualificationExam'
                    ? qualificationExamScore * 22 + dsmAlgorithmScore + certificateScore
                    : (gradeScore + maxScore + dsmAlgorithmScore + certificateScore).toFixed(3)}
                </Text>
                <Text color="black400" size="title3">
                  /110
                </Text>
              </_ScoreBox>
            </_DIV>
            <_DIV>
              <_Button
                onClick={() => {
                  (window.location.href = `${MAIN_URL}/grade`), close();
                }}
              >
                <Text color="realWhite" size="body3">
                  닫기
                </Text>
              </_Button>
            </_DIV>
          </_Container>
        </Modal>
      )}
    </>
  );
};

export default GradeFooter;

const _Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60rem;
  margin-top: 45px;
  margin-bottom: 100px;
`;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const _DIV = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  width: 320px;
`;

const _Button = styled.button`
  border-radius: 5px;
  background-color: ${theme.color.orange500};
  &:hover {
    background-color: ${theme.color.orange600};
  }
  padding: 12px;
  width: 100%;
  cursor: pointer;
`;

const _ScoreBox = styled.div`
  display: flex;
  align-items: center;
`;
