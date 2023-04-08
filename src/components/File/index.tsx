import React from 'react';
import { Text } from '@team-entry/design_system';
import * as _ from './style';
import Download from '../../assets/Download.svg';

const File = () => {
  return (
    <_._File>
      <_._Download>
        <_._Img src={Download} alt="download" />
      </_._Download>
      <Text color="black900" size="body4">
        자기소개_학번_이름.pptx
      </Text>
    </_._File>
  );
};

export default File;