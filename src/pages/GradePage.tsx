import { Button, Icon, IconType, Text, theme } from '@team-entry/design_system';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { Pc } from '@/hooks/useResponsive';
import { AuthorityColorType, useAuthority } from '@/hooks/useAuthority';

interface IGradeListProps {
  icon: IconType;
  title: string;
  text: string;
  type: string;
}

const list: IGradeListProps[] = [
  {
    icon: 'DeleteUser',
    title: '졸업예정자',
    text: '아직 중학교를 졸업하지 않은\n졸업자를 칭합니다',
    type: 'prospectiveGraduate',
  },
  {
    icon: 'ApproveUser',
    title: '졸업자',
    text: '이미 중학교를 졸업한 \n지원자를 칭합니다.',
    type: 'graduate',
  },
  {
    icon: 'Reader',
    title: '검정고시',
    text: '(중학교 졸업학력)',
    type: 'qualificationExam',
  },
];

const GradePage = () => {
  const { authorityColor } = useAuthority();
  const navigate = useNavigate();

  return (
    <_Container>
      <Pc>
        <_Wrapper>
          <Text color="black900" size="header1">
            성적 산출 유형 선택
          </Text>
          <_Line authorityColor={authorityColor} />
          <_Cards>
            {list.map((res, index) => {
              const { icon, text, title, type } = res;
              return (
                <_Card key={index}>
                  <_TitleBox>
                    <_IconBackground authorityColor={authorityColor}>
                      <Icon icon={icon} size={46} />
                    </_IconBackground>
                    <_Title>
                      <Text color="black900" size="title2">
                        {title}
                      </Text>
                      <Text align="center" color="black600" size="body2">
                        {text}
                      </Text>
                    </_Title>
                  </_TitleBox>
                  <Button
                    onClick={() => {
                      navigate(`/gradeProgram?gradeStatus=${type}`);
                    }}
                    color={authorityColor}
                    kind="rounded"
                  >
                    선택
                  </Button>
                </_Card>
              );
            })}
          </_Cards>
          <Text color="black500" size="body3" style={{ marginTop: '10%', maxWidth: 750, width: '100%' }}>
            * 상급학교조기입학대상자, 중학교 졸업학력 검정고시 합격자 등 3학년 1학기의 교과성적이 없는 경우 2025년도
            대전광역시 고등학교 입학전형 기본계획에 의거 입학전형위원회에서 결정하여 반영할 예정이므로 성적을 산출할 수
            없습니다.
          </Text>
        </_Wrapper>
      </Pc>
    </_Container>
  );
};

export default GradePage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  margin-top: 10rem;
`;

const _Line = styled.div<{ authorityColor: AuthorityColorType }>`
  width: 4rem;
  height: 2px;
  background-color: ${({ authorityColor }) => theme.color[`${authorityColor}500`]};
  margin: 2rem;
`;

const _Cards = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`;

const _Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 344px;
  width: 100%;
  height: 440px;
  padding: 50px 20px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const _IconBackground = styled.div<{ authorityColor: AuthorityColorType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ authorityColor }) => theme.color[`${authorityColor}500`]};
  border: 1px solid ${theme.color.black100};
  width: 90px;
  height: 90px;
  border-radius: 50px;
  box-sizing: border-box;
`;

const _TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const _Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;
