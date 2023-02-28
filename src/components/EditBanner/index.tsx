import React from 'react';
import { Button, Text } from '@team-entry/design_system';
import * as _ from './style';
import Up from '../../assets/ArrowUp.svg';
import Down from '../../assets/ArrowDown.svg';

interface EditBannerProps {
  index: number;
  banner: string;
}

const EditBanner = ({ index, banner }: EditBannerProps) => {
  const onClick = () => {
    console.log('clicked!');
  };
  return (
    <_._Container>
      <Text color="black900" size="title1">
        {index}번째 배너
      </Text>
      <_._Wrapper>
        <_._Img src={banner} alt="banner" />
        <Button color="green" onClick={onClick} width={130}>
          이미지 업로드
        </Button>
        <Button color="green" kind="outlined" onClick={onClick} icon={true}>
          <img src={Up} alt="arrowUp" />
        </Button>
        <Button color="green" kind="outlined" onClick={onClick} icon={true}>
          <img src={Down} alt="arrowDown" />
        </Button>
      </_._Wrapper>
    </_._Container>
  );
};

export default EditBanner;
