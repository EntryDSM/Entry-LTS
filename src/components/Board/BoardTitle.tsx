import styled from '@emotion/styled';
import { SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@team-entry/design_system';

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

  return (
    <>
      <_Text fontSize={32} fontWeight={700}>
        {title}
      </_Text>
      <_Text
        style={{ marginBottom: 22 }}
        fontColor={isCustomer && '#737373'}
        fontSize={isCustomer ? 20 : 18}
        fontWeight={isCustomer ? 500 : 300}
      >
        {subTitle}
      </_Text>
      <_Buttons>
        <div style={{ display: 'flex' }}>
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
              <_Button isClick={true}>{button3}</_Button>
            </Link>
          )}
        </div>
      </_Buttons>
    </>
  );
};

export default BoardTitle;

const _Text = styled.div<{ fontSize: number; fontWeight: number; fontColor?: string; cursor?: boolean }>`
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  cursor: ${(props) => (props.cursor ? 'pointer' : 'auto')};
`;

const _Button = styled.button<{ isClick: boolean }>`
  padding: 12px;
  outline: 0;
  border: 0;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.isClick ? 'white' : '#ff7e36')};
  background-color: ${(props) => (props.isClick ? '#ff7e36' : 'white')};
  border: 1px solid #ff7e36;
  cursor: pointer;
  &:hover {
    background-color: #ff7e36;
    color: white;
  }
  &:last-child {
    margin: 0;
  }
`;

const _Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
