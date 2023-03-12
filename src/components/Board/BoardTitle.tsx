import styled from '@emotion/styled';
import { SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { Button, Text } from '@team-entry/design_system';

interface IBoardTitle {
  click: boolean;
  setClick: React.Dispatch<SetStateAction<boolean>>;
  title: string;
  subTitle: string;
  button1: string;
  button2: string;
  button3?: string;
  isCustomer?: boolean;
  link?: string;
}

const BoardTitle = (props: IBoardTitle) => {
  const { click, setClick, title, subTitle, button1, button2, button3, isCustomer, link } = props;
  const isMobile = window.innerWidth > 400;
  const onClick = () => {
    console.log('clicked!');
  };
  return (
    <>
      <Text color="black900" size={isMobile ? 'header1' : 'title1'}>
        {title} {/* title1*/}
      </Text>
      <Text margin={[0, 0, 22, 0]} color="realBlack" size={isMobile ? 'title3' : 'body5'}>
        {subTitle} {/* body5 */}
      </Text>
      <_Buttons>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button onClick={() => setClick(false)} color={'orange'} kind={click ? 'outlined' : 'contained'}>
            {button1}
          </Button>
          <Button onClick={() => setClick(true)} color={'orange'} kind={click ? 'contained' : 'outlined'}>
            {button2}
          </Button>
        </div>
        <div>
          {isCustomer && !click && (
            <Link to={link}>
              <Button color="orange" onClick={onClick}>
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
