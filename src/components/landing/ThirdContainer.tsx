import { Text } from '@team-entry/design_system';
import styled from '@emotion/styled';
import GraphImg from '../../assets/Graph.svg';
import AwardImg from '../../assets/Awards.svg';

const Third = () => {
  return (
    <>
      <_Wrapper>
        <_TextContainer>
          <Text color="orange600" size="header1">
            지금도 멈추지 않고
          </Text>
          <_Text>꿈을 이루어가고 있어요</_Text>
          <Text color="black800" size="title2" align="center">
            대덕소프트웨어마이스터고등학교 학생들은 꾸준히 노력해 높은 취업률을 달성하고, <br />
            여러 대회에서 입상해나가고 있습니다
          </Text>
        </_TextContainer>
        <_GraphContainer>
          <Img src={GraphImg} alt="graph" />
        </_GraphContainer>
        <_AwardsContainer>
          <Img src={AwardImg} alt="awards" />
        </_AwardsContainer>
      </_Wrapper>
    </>
  );
};

const _Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const _TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const _Text = styled.div`
  font-weight: 700;
  font-size: 50px;
`;

const _GraphContainer = styled.div`
  width: 1040px;
`;

const _AwardsContainer = styled.div`
  width: 1040px;
`;

const Img = styled.img`
  width: 100%;
`;

export default Third;
