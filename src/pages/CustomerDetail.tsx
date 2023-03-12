import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import { useNavigate } from 'react-router-dom';

const CustomerDetailPage = () => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth > 400;
  return (
    <_Container>
      <_Wrapper>
        <_Title>
          <Text color="orange500" size={isMobile ? 'header2' : 'title1'}>
            Q.
          </Text>
          <Text color="black900" size={isMobile ? 'title1' : 'title2'}>
            성적 입력에 관하여...
          </Text>
        </_Title>
        <Text color="black600" size={isMobile ? 'body2' : 'body5'}>
          성적 입력시에 자퇴의 경우는 어떻게 해야 될까요?
        </Text>
        <Text color="black400" size={isMobile ? 'body1' : 'body3'} margin={['top', 80]}>
          36 | 김*연 | 2022-12-21
        </Text>
      </_Wrapper>
      <_Bottom>
        <_Answer>
          <Text color="black500" size="title2">
            아직 작성된 답변이 없습니다
          </Text>
        </_Answer>
        <Button onClick={() => navigate(-1)}>목록으로</Button>
      </_Bottom>
    </_Container>
  );
};

export default CustomerDetailPage;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100vw;
  height: 100vh;
`;

const _Wrapper = styled.div`
  margin-top: 7rem;
  width: 60rem;
  height: 12rem;
  @media screen and (max-width: 400px) {
    width: 22rem;
  }
`;

const _Title = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
`;

const _Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  @media screen and (max-width: 400px) {
    align-items: flex-start;
  }
`;

const _Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60rem;
  height: 15rem;
  background-color: ${theme.color.realWhite};
  border: 1px solid ${theme.color.black200};
  border-radius: 5px;
  @media screen and (max-width: 400px) {
    width: 22rem;
    height: 10rem;
    border: none;
  }
`;
