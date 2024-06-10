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
}

const GradeFooter = ({ gradeStatus, current, setCurrent, maxScore, gradeScore }: IGradeFooterProps) => {
  const { Modal, modalState, setModalState, open } = useModal({ useBlur: false });
  return (
    <>
      <_Footer>
        <Button
          color="black"
          kind="outlined"
          disabled={current === 0 || gradeStatus === 'qualificationExam'}
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          이전
        </Button>
        {current !== 4 ? (
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
          <Button
            color="orange"
            kind="contained"
            onClick={() => {
              setModalState('SUBMIT_GRADE'), open();
            }}
          >
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
              <Text size="header3" color="orange900">
                {((gradeScore * 175) / 100 + maxScore).toFixed(3)}
              </Text>
            </_DIV>
            <_DIV>
              <Text size="header3" color="black900">
                사회통합 전형:
              </Text>
              <Text size="header3" color="orange900">
                {gradeScore + maxScore}
              </Text>
            </_DIV>
            <_DIV>
              <Text size="header3" color="black900">
                마이스터 인재:
              </Text>
              <Text size="header3" color="orange900">
                {gradeScore + maxScore}
              </Text>
            </_DIV>
            <_DIV>
              <Button
                kind="outlined"
                color="black"
                onClick={() => {
                  (window.location.href = `${MAIN_URL}/grade`), close();
                }}
              >
                다시 입력
              </Button>
              <Button
                kind="contained"
                color="orange"
                onClick={() => {
                  (window.location.href = `${MAIN_URL}`), close();
                }}
              >
                닫기
              </Button>
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
  width: 220px;
`;
