import { SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../../hooks/useResponsive';
import { useAuthority } from '@/hooks/useAuthority';

interface IBoardTitle {
  click?: boolean;
  setClick?: React.Dispatch<SetStateAction<boolean>>;
  title: string;
  subTitle: string;
  button1?: string;
  button2?: string;
  button3?: string;
  isCustomer?: boolean;
  link?: string;
}

const BoardTitle = (props: IBoardTitle) => {
  const { click, setClick, title, subTitle, button1, button2, button3, isCustomer, link } = props;
  const { isAdmin, authorityColor } = useAuthority();
  const onClick = () => {
    console.log('clicked!');
  };

  const isQna = !click && isCustomer && !isAdmin;
  const isFaq = isAdmin && click;
  const isNotice = isAdmin && !isCustomer;

  return (
    <>
      <Pc>
        <Text color="black900" size="header1">
          {title}
        </Text>
        <Text margin={[5, 0, 22, 0]} color="black700" size="body1">
          {subTitle}
        </Text>
      </Pc>
      <Mobile>
        <Text color="black900" size="title1">
          {title}
        </Text>
        <Text color="realBlack" size="body5">
          {subTitle}
        </Text>
        <_Line />
      </Mobile>
      <_Buttons>
        <_ButtonWrapper>
          {button1 && (
            <Button onClick={() => setClick(false)} color={authorityColor} kind={click ? 'outlined' : 'contained'}>
              {button1}
            </Button>
          )}
          {button2 && (
            <Button onClick={() => setClick(true)} color={authorityColor} kind={click ? 'contained' : 'outlined'}>
              {button2}
            </Button>
          )}
        </_ButtonWrapper>
        <div>
          {(isQna || isFaq || isNotice) && button3 && (
            <Link to={link}>
              <Button color={authorityColor} onClick={onClick}>
                {button3}
              </Button>
            </Link>
          )}
        </div>
      </_Buttons>
    </>
  );
};

export default BoardTitle;

const _Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const _ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const _Line = styled.div`
  width: 70px;
  height: 1px;
  background-color: ${theme.color.black300};
  border: none;
  margin: 15px 0px;
`;
