import { IBoard } from '@/interfaces/Board';
import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';

const BoardHeader = (props: IBoard) => {
  const { isNumber, isTopBorder, isComment, isWriteDay, isWriter } = props;
  const isMobile = window.innerWidth > 400;
  return (
    <_HeaderContainer style={{ borderTop: isTopBorder && '1px solid black' }}>
      <Div>
        {(isMobile || !isNumber) && (
          <Text color="black700" size={isMobile ? 'body1' : 'body3'} width={isMobile ? 6 : 5}>
            {isNumber ? '번호' : '구분'}
          </Text>
        )}
        <Text color="black700" size={isMobile ? 'body1' : 'body3'} margin={['left', 20]}>
          제목
        </Text>
      </Div>
      <Div>
        {isComment && (
          <Text color="black700" size={isMobile ? 'body1' : 'body3'} width={isMobile ? 6 : 5}>
            답변
          </Text>
        )}
        {isWriter && (
          <Text color="black700" size={isMobile ? 'body1' : 'body3'} width={isMobile ? 6 : 5}>
            작성자
          </Text>
        )}
        {isWriteDay && (
          <Text color="black700" size={isMobile ? 'body1' : 'body3'} width={isMobile ? 6 : 5}>
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
  @media screen and (max-width: 400px) {
    width: 22rem;
    height: 2.5rem;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;
