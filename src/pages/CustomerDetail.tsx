import styled from '@emotion/styled';

const CustomerDetailPage = () => {
  return (
    <_Container>
      <_Wrapper>
        <_Text fontWeight={500} fontSize={24}>
          Q.성적 입력에 관하여
        </_Text>
        <_Text fontSize={18} fontWeight={400}>
          성적 입력시에 자퇴의 경우는 어떻게 해야 될까요?
        </_Text>
        <_Text style={{ marginTop: 80 }} fontSize={18} fontWeight={500}>
          36 | 김*연 | 2022-12-21
        </_Text>
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
  border: 1px solid black;
`;

const _Text = styled.div<{ fontSize: number; fontWeight: number }>`
  color: #141414;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
`;

const _Bottom = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 55%;
  background-color: #fbfbfb;
`;

const _Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  width: 60rem;
  height: 15rem;
  background-color: #ffffff;
  border: 1px solid #cacaca;
  border-radius: 5px;
`;

const _None = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #737373;
`;
