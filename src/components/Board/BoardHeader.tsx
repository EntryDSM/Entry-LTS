import { IBoard } from '@/interfaces/Board';
import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';

const BoardHeader = (props: IBoard) => {
  const { isNumber, isTopBorder, isComment, isWriteDay, isWriter } = props;

  return (
    <_HeaderContainer style={{ borderTop: isTopBorder && '1px solid black' }}>
      <Div>
        <Text color="black700" size="body1" width={6}>
          {isNumber ? '번호' : '구문'}
        </Text>
        <Text color="black700" size="body1" margin={['left', 20]}>
          제목
        </Text>
      </Div>
      <Div>
        {isComment && (
          <Text color="black700" size="body1" width={6}>
            답변
          </Text>
        )}
        {isWriter && (
          <Text color="black700" size="body1" width={6}>
            작성자
          </Text>
        )}
        {isWriteDay && (
          <Text color="black700" size="body1" width={6}>
            작성일
          </Text>
        )}
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
