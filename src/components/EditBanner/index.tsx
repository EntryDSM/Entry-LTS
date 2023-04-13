import React from 'react';
import { Button, Text } from '@team-entry/design_system';
import * as _ from './style';

interface IEditBanner {
  index: number;
  banner: string;
}

const EditBanner = ({ index, banner }: IEditBanner) => {
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
        <Button color="green" onClick={onClick}>
          이미지 업로드
        </Button>
        <Button color="green" kind={['icon', 'outlined']} onClick={onClick} icon="Check" />
        <Button color="green" kind={['icon', 'outlined']} onClick={onClick} icon="Check" />
      </_._Wrapper>
    </_._Container>
  );
};

export default EditBanner;
