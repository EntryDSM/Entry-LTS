import React, { useCallback, useState } from 'react';
import Modal from '@/components/Modal';

export type ModalType =
  | ''
  | 'CANCEL_SUBMIT'
  | 'SIGN_OUT'
  | 'SUBMIT_GRADE'
  | 'START_NOTICE'
  | 'PASSED_ROUND'
  | 'NOT_PASSED_ROUND';

// `useBlur` props로 모달 외부를 클릭하면 모달을 닫을지 선택
export const useModal = ({ useBlur = true } = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState<ModalType>('');

  const open = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(() => false);
    setModalState('');
  }, []);

  return {
    Modal: isOpen
      ? ({ children }) => (
          <Modal close={false} onClose={useBlur ? close : undefined}>
            {children}
          </Modal>
        )
      : () => null,
    open,
    close,
    isOpen,
    modalState,
    setModalState,
  };
};
