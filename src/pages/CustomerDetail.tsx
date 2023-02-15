import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';

const CustomerDetailPage = () => {
  return (
    <_Container>
      <_Wrapper>
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
      </_Wrapper>
      <_Bottom>
        <_Answer>
          <_None>아직 작성된 답변이 없습니다</_None>
        </_Answer>
      </_Bottom>
    </_Container>
  );
};

export default CustomerDetailPage;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const _Wrapper = styled.div`
  margin-top: 7rem;
  width: 60rem;
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
  justify-content: center;
  width: 100vw;
  height: 55%;
  background-color: ${theme.color.black50};
`;

const _Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  width: 60rem;
  height: 15rem;
  background-color: ${theme.color.realWhite};
  border: 1px solid ${theme.color.black200};
  border-radius: 5px;
`;

const _None = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: ${theme.color.black500};
`;
