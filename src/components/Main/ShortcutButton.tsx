import React from 'react';
import styled from '@emotion/styled';
import { Icon, IconType, Text } from '@team-entry/design_system';
import { useAthority } from '@/hooks/useAuthority';

interface ShorcutButtonProps {
  icon: string;
  title: string;
}

const ShortCutButton = ({ icon, title }: ShorcutButtonProps) => {
  const { authorityColor } = useAthority();
  return (
    <_ShorcutButton>
      <Icon icon={icon as IconType} color={`${authorityColor}500`} />
      <Text color="black800" size="title2">
        {title}
      </Text>
    </_ShorcutButton>
  );
};

export default ShortCutButton;

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
