import React from 'react';
import styled from '@emotion/styled';
import { Button, Icon, IconType, Text } from '@team-entry/design_system';
import Progress from './Progress';
import BoardsAtMain from './BoardAtMain';
import Banner from '../../assets/ReplaceBanner.svg';
import { shortcut } from '../../constant/main';
import { Link } from 'react-router-dom';

const MainFunction = () => {
  const onClick = () => console.log('clicked!');
  return (
    <_Wrapper>
      <_Banner src={Banner} alt="banner" />
      <_Application>
        <_ApplicationDetail>
          <Text color="black900" size="header1">
            지금은 원서제출 기간입니다.
          </Text>
          <Text color="black600" size="title2">
            입학 상담 문의: 042-8832-1121
          </Text>
          <Button color="orange" onClick={onClick}>
            원서 접수 →
          </Button>
        </_ApplicationDetail>
        <Progress />
      </_Application>
      <_Discription>
        <_Shortcut>
          {shortcut.map((item) =>
            item.link.includes('/') ? (
              <Link to={item.link}>
                <_ShorcutButton key={item.id}>
                  <Icon icon={item.icon as IconType} color="orange500" />
                  <Text color="black800" size="title2">
                    {item.title}
                  </Text>
                </_ShorcutButton>
              </Link>
            ) : (
              <a href={item.link}>
                <_ShorcutButton key={item.id}>
                  <Icon icon={item.icon as IconType} color="orange500" />
                  <Text color="black800" size="title2">
                    {item.title}
                  </Text>
                </_ShorcutButton>
              </a>
            ),
          )}
        </_Shortcut>

        <BoardsAtMain />
      </_Discription>
    </_Wrapper>
  );
};

export default MainFunction;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;
  width: 99vw;
  height: 961px;
`;

const _Banner = styled.img`
  width: 76rem;
  height: 14rem;
  object-fit: cover;
  border-radius: 4px;
`;

const _Application = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76rem;
  height: 10.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  margin: 1rem 0px;
`;

const _ApplicationDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 9rem;
`;

const _Discription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 76rem;
  height: 16rem;
`;

const _Shortcut = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
`;

const _ShorcutButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 6rem;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;
