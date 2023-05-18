import React from 'react';
import { Icon, Text } from '@team-entry/design_system';
import * as _ from './style';
import { useAthority } from '@/hooks/useAuthority';

interface FileProps {
  canEdit?: boolean;
}

const File = ({ canEdit }: FileProps) => {
  const { authorityColor } = useAthority();
  return (
    <_._File>
      <_._Download color={authorityColor}>
        <Icon icon={canEdit ? 'Close' : 'Download'} />
      </_._Download>
      <Text color="black900" size="body4">
        자기소개_학번_이름.pptx
      </Text>
    </_._File>
  );
};

export default File;
