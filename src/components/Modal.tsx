import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Icon, theme } from '@team-entry/design_system';

const Modal = ({ children, onClose }: { children: ReactNode; onClose: () => void }) => {
  return (
    <Background onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <_CloseIcon cursor="pointer" onClick={onClose} size={24} icon="Close" color="black900" />
        {children}
      </ModalContainer>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 100;
`;

const _CloseIcon = styled(Icon)`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 101;
`;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  min-height: 300px;
  background-color: ${theme.color.realWhite};
  border-radius: 10px;
  @media screen and (max-width: 769px) {
    width: 320px;
  }
`;
