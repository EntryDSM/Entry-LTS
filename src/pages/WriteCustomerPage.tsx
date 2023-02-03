import styled from '@emotion/styled';

const WriteCustomerPage = () => {
  return (
    <_Container>
      <_Wrapper>
        <_Text fontSize={32} fontWeight={700}>
          Q&A 작성
        </_Text>
        <_Line />
        <_OpenLetter>
          <_Text fontSize={18} fontWeight={500}>
            글 공개 여부
          </_Text>
        </_OpenLetter>
      </_Wrapper>
    </_Container>
  );
};

export default WriteCustomerPage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const _Wrapper = styled.div`
  margin-top: 7rem;
  width: 60rem;
  height: 38rem;
  border: 1px solid black;
`;

const _Text = styled.div<{ fontSize: number; fontWeight: number }>`
  color: #141414;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
`;

const _Line = styled.div`
  margin-top: 25px;
  width: 70px;
  height: 1.5px;
  background-color: #cacaca;
`;

const _OpenLetter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
