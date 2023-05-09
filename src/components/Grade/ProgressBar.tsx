import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';

const ProgressBar = ({ step = 1 }: { step: number }) => {
  const progess = [
    { element: <_Circle isNow={1 <= step} /> },
    { element: <_Line isNow={2 <= step} /> },
    { element: <_Circle isNow={2 <= step} /> },
    { element: <_Line isNow={3 <= step} /> },
    { element: <_Circle isNow={3 <= step} /> },
    { element: <_Line isNow={4 <= step} /> },
    { element: <_Circle isNow={4 <= step} /> },
  ];

  return (
    <>
      <_Wrapper>
        {progess.map((res) => {
          return res.element;
        })}
      </_Wrapper>
      <_Texts>
        <Text color="black800" size="body5">
          3학년 1학기
        </Text>
        <Text color="black800" size="body5">
          직전 학기
        </Text>
        <Text color="black800" size="body5">
          직전전 학기
        </Text>
        <Text color="black800" size="body5">
          성적 산출
        </Text>
      </_Texts>
    </>
  );
};

export default ProgressBar;

const _Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5rem 0;
`;

const _Texts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const _Circle = styled.div<{ isNow?: boolean }>`
  width: 1.3rem;
  height: 1.3rem;
  background-color: ${({ isNow }) => (isNow ? theme.color.orange500 : theme.color.realWhite)};
  border-radius: 50px;
  border: 4px solid ${({ isNow }) => (isNow ? theme.color.orange500 : theme.color.black100)};
  margin: 0 0.9rem;
`;

const _Line = styled.div<{ isNow?: boolean }>`
  width: 26%;
  height: 0.15rem;
  border-radius: 5px;
  background-color: ${({ isNow }) => (isNow ? theme.color.orange500 : theme.color.black100)};
`;
