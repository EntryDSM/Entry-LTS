import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Button, Text, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../hooks/useResponsive';

const CustomerDetailPage = () => {
  const navigate = useNavigate();
  return (
    <_Container>
      <_Wrapper>
        <Pc>
          <_Title>
            <Text color="orange500" size="header2">
              Q.
            </Text>
            <Text color="black900" size="title1">
              성적 입력에 관하여...
            </Text>
          </_Title>
          <Text color="black600" size="body2">
            성적 입력시에 자퇴의 경우는 어떻게 해야 될까요?
          </Text>
          <Text color="black400" size="body1" margin={['top', 80]}>
            36 | 김*연 | 2022-12-21
          </Text>
        </Pc>
        <Mobile>
          <_Title>
            <Text color="orange500" size="title1">
              Q.
            </Text>
            <Text color="black900" size="title2">
              성적 입력에 관하여...
            </Text>
          </_Title>
          <Text color="black600" size="body5">
            성적 입력시에 자퇴의 경우는 어떻게 해야 될까요?
          </Text>
          <Text color="black400" size="body3" margin={['top', 80]}>
            36 | 김*연 | 2022-12-21
          </Text>
        </Mobile>
        <_Bottom>
          <_Answer>
            <Text color="black500" size="title2">
              아직 작성된 답변이 없습니다
            </Text>
          </_Answer>
          <Button onClick={() => navigate(-1)}>목록으로</Button>
        </_Bottom>
      </_Wrapper>
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
  width: 100%;
  max-width: 60rem;
  padding: 0 20px;
  height: 12rem;
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
  margin-top: 6rem;
  @media screen and (max-width: 769px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const _Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 60rem;
  width: 100%;
  height: 15rem;
  background-color: ${theme.color.realWhite};
  border: 1px solid ${theme.color.black200};
  border-radius: 5px;
  @media screen and (max-width: 769px) {
    width: 100%;
    height: 10rem;
    border: none;
    padding: 20px;
  }
`;
