import { IBoard } from '@/interfaces/Board';
import styled from '@emotion/styled';

const BoardHeader = (props: IBoard) => {
  const { isNumber, isTopBorder, isComment, isWriteDay, isWriter } = props;

  return (
    <_HeaderContainer style={{ borderTop: isTopBorder && '1px solid black' }}>
      <Div>
        <_Text width={6}>{isNumber ? '번호' : '구문'}</_Text>
        <_Text style={{ marginLeft: 20 }}>제목</_Text>
      </Div>
      <Div>
        {isComment && <_Text width={6}>답변</_Text>}
        {isWriter && <_Text width={6}>작성자</_Text>}
        {isWriteDay && <_Text width={6}>작성일</_Text>}
      </Div>
    </_HeaderContainer>
  );
};

export default BoardHeader;

const _HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60rem;
  height: 3rem;
  border-bottom: 1px solid black;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const _Text = styled.div<{ width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  width: ${(props) => props.width}rem;
  height: 3rem;
  color: #494949;
`;
