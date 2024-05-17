import styled from '@emotion/styled';
import { theme, Button } from '@team-entry/design_system';

const Sixth = () => {
  return (
    <_Wrapper>
      <_TopContainer>
        <div>
          <_Point>성장할 수 있도록</_Point>
          <_Title>우리가 도와드려요</_Title>
        </div>
        <_Description>
          개발 학습을 위한 노트북 제공, 기숙사 무료운영, 학업증진을 위한 방과후 운영 등
          <br />
          이외에도 여러가지 지원을 통해 학생이 학교에 적응하고 성장할 수 있는 최적의 환경을 제공합니다.
        </_Description>
      </_TopContainer>
      <_BottomContainer>
        <_Title>아직, 고민중인 당신을 위해</_Title>
        <_Description>
          아래 버튼을 클릭해 채팅으로 간단한 상담을 진행해보는 건 어때요?
          <br />
          부담 가지지 마시고 언제든지 편하게 이용해 주세요!
        </_Description>
        <Button
          color="orange"
          kind="contained"
          isBig={true}
          onClick={() => {
            window.open('https://medium.com/entrydsm');
          }}
        >
          채팅 시작하기
        </Button>
      </_BottomContainer>
    </_Wrapper>
  );
};

export default Sixth;

const _Wrapper = styled.div`
  width: 100%;
`;

const _TopContainer = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const _BottomContainer = styled.div`
  width: 100%;
  height: 520px;
  background: linear-gradient(135deg, #fff872 0%, #ff68b9 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const _Point = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${theme.color.orange500};
  text-align: center;
`;

const _Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${theme.color.realBlack};
`;

const _Description = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #2f2f2f;
  text-align: center;
`;
