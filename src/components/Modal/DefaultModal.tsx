import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import { colorKeyOfType } from '@team-entry/design_system/build/style/color';
import { ReactNode } from 'react';

interface IDefaultModal {
  color: colorKeyOfType;
  title: string;
  subTitle: ReactNode;
  button?: ReactNode;
  onClick?: () => void;
}

const DefaultModal = ({ color, title, subTitle, button, onClick }: IDefaultModal) => {
  return (
    <>
      <Text size="title1" color={color} margin={[0, 0, 20, 0]}>
        {title}
      </Text>
      <_ModalLine />
      <Text size="body2" color="black700" margin={[20, 0, 50, 0]}>
        {subTitle}
      </Text>
      {button && onClick && (
        <Button kind="outlined" color="black" onClick={onClick}>
          {button}
        </Button>
      )}
    </>
  );
};

export default DefaultModal;

const _ModalLine = styled.div`
  width: 150px;
  height: 1px;
  background-color: ${theme.color.black100};
`;
