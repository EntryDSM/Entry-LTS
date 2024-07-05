import React from 'react';
import { Icon, Text } from '@team-entry/design_system';
import * as _ from './style';
import { useAuthority } from '@/hooks/useAuthority';

interface IFileProps {
  deleteFunction?: () => void;
  name?: string;
  url?: string;
  isBornup?: boolean;
}

const File = ({ deleteFunction, name, url, isBornup }: IFileProps) => {
  const { authorityColor } = useAuthority();

  return (
    <_._File>
      <_._Download
        color={authorityColor}
        onClick={
          deleteFunction
            ? deleteFunction
            : () => {
                var tempLink = document.createElement('a');
                tempLink.href = url;
                tempLink.setAttribute('download', name);
                tempLink.style.display = 'none';
                document.body.appendChild(tempLink);
                tempLink.click();
                document.body.removeChild(tempLink);
              }
        }
      >
        <Icon icon={deleteFunction ? 'Close' : 'Download'} />
      </_._Download>
      <Text
        color="black900"
        size="body4"
        onClick={() => {
          if (url) window.open(url);
        }}
      >
        {isBornup && '[ 본업 이미지 ] '}
        {name}
      </Text>
    </_._File>
  );
};

export default File;
