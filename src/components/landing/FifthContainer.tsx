import styled from '@emotion/styled';
import { theme, Button } from '@team-entry/design_system';

const Fifth = () => {
  return (
    <_Wrapper>
      <div>
        <_TitleContainer>
          <_Title>
            <span>엔트리</span>&nbsp;이야기
          </_Title>
          <_Description>
            재밌게 일할 순 없을까?
            <br />
            입학 원서 서비스를 만드는 저희의 얘기를 들려드립니다.
          </_Description>
        </_TitleContainer>
        <_BlogContainer>
          <_Blog>
            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*zyd2ct5jTfyE2Nd_swBX0g.png" />
            입학전형 시스템 운영 후기
          </_Blog>
          <_Blog>
            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*pWJbzslc4cTl8JbqADhtNg.png" />
            엔트리의 문화를 소개합니다!🍪
          </_Blog>
          <_Blog>
            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*O_oNRd3SHbYYG6iR.png" />
            MSA 인프라 구축 이야기 ( 입학전형 시스템 )
          </_Blog>
        </_BlogContainer>
      </div>

      <_ButtonContainer>
        <Button
          color="orange"
          kind="contained"
          onClick={() => {
            console.log('click!!');
          }}
        >
          더 알아보기
        </Button>
      </_ButtonContainer>
    </_Wrapper>
  );
};

export default Fifth;

const _Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #595959 0%, #222 100%);
`;

const _TitleContainer = styled.div`
  width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  margin-top: 80px;
`;

const _Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: ${theme.color.realWhite};
  word-spacing: 4px;
  span {
    color: ${theme.color.orange700};
  }
`;

const _Description = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: ${theme.color.black200};
`;

const _BlogContainer = styled.div`
  width: 1240px;
  height: 400px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  padding: 48px 90px 52px 90px;
  background-color: ${theme.color.realWhite};
  border-radius: 6px;
`;

const _Blog = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  color: ${theme.color.realWhite};
  background-color: ${theme.color.black800};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  > img {
    width: 300px;
    height: 200px;
    border-bottom: 1px solid ${theme.color.black100};
  }
`;

const _ButtonContainer = styled.div`
  margin-bottom: 40px;
`;
