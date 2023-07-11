import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import { ReactNode } from 'react';

interface ICancelModal {
  title: string;
  subTitle: string;
  button: ReactNode;
  onClick?: () => void;
}

const CancelModal = ({ title, subTitle, button, onClick }: ICancelModal) => {
  return (
    <>
      <Text size="title1" color="error" margin={[0, 0, 20, 0]}>
        {title}
      </Text>
      <_ModalLine />
      <Text size="body2" color="black700" margin={[20, 0, 50, 0]}>
        {subTitle}
      </Text>
      <Button kind="outlined" color="delete" onClick={onClick}>
        {button}
      </Button>
    </>
  );
};

export default CancelModal;

const _ModalLine = styled.div`
  width: 100px;
  height: 1px;
  background-color: ${theme.color.black100};
`;
