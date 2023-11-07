import styled from '@emotion/styled';
import { theme, Text } from '@team-entry/design_system';

interface IGradeWrapper {
  title: string;
  subTitle?: string;
  children: JSX.Element;
}

const GradeWraper = ({ title, subTitle, children }: IGradeWrapper) => {
  return (
    <_Wrapper>
      <_Texts>
        <Text color="black900" size="title1">
          {title}
        </Text>
        <Text margin={['left', 10]} color="black500" size="body3">
          {subTitle}
        </Text>
      </_Texts>
      <div>{children}</div>
    </_Wrapper>
  );
};

export default GradeWraper;

const _Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  width: 100%;
  border-top: 1px solid ${theme.color.black100};
  padding: 25px 10px;
  &:last-child {
    border-bottom: 1px solid ${theme.color.black100};
  }
`;

const _Texts = styled.div`
  display: flex;
  align-items: center;
`;
