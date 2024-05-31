import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Icon, IconType, Text, Toast } from '@team-entry/design_system';
import Banner from '../../assets/Banner.svg';
import AdminBanner from '../../assets/AdminBanner.svg';
import Progress from './Progress';
import BoardsAtMain from './BoardAtMain';
import { shortcut } from '../../constant/main';
import { Link } from 'react-router-dom';
import { Mobile, Pc } from '../../hooks/useResponsive';
import { useMediaQuery } from 'react-responsive';
import { useAuthority } from '@/hooks/useAuthority';
import _ShortcutButton from './ShortcutButton';
import { useNavigate } from 'react-router-dom';
import { getCookies } from '@/utils/cookies';
import { GetReserveLink } from '@/utils/api/reserve';
import { useModal } from '@/hooks/useModal';
import Modal from '../Modal';
import { APPLY_URL } from '@/constant/env';

const MainFunction = () => {
  const { isAdmin, authorityColor } = useAuthority();
  const isTablet = useMediaQuery({ query: '(max-width: 1136px) and (min-width: 769px)' });
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(!!getCookies('access_token'));
  // const { data } = ApplyInfoStatus(isLogin);
  const { mutate: reserve_addmission } = GetReserveLink();
  const { isOpen, modalState, Modal, setModalState, open, close } = useModal();

  useEffect(() => {
    if (!Boolean(sessionStorage.getItem('modal'))) {
      setModalState('START_NOTICE');
      open();
    }
  }, []);

  return (
    <_Wrapper>
      <Pc>
        <_Banner src={isAdmin ? AdminBanner : Banner} alt="banner" width={'100%'} height={221} />
      </Pc>
      <_Application>
        <_ApplicationDetail>
          <Pc>
            <Text align={isTablet ? 'center' : 'start'} color="black900" size="header1" whiteSpace="nowrap">
              원서접수가 마감되었습니다.
            </Text>
            <PhoneNumber align={isTablet ? 'center' : 'start'} color="black600" size="title2">
              입학 문의: 042-866-8811, 042-866-8814
            </PhoneNumber>
            <Button
              color={authorityColor}
              onClick={() => (window.location.href = `${APPLY_URL}`)}
              margin={[10, 0, 20, 0]}
              isBig
              disabled
            >
              원서 접수 →
            </Button>
          </Pc>
          <Mobile>
            <Text color="black900" size="title1">
              원서접수가 마감되었습니다.
            </Text>
            <Text color="black900" size="body3" margin={[10, 0, 0, 0]}>
              작성한 원서를 제출하세요
            </Text>
            <div>
              <Button
                color={authorityColor}
                onClick={() => (window.location.href = `${APPLY_URL}`)}
                margin={[20, 0, 20, 0]}
                disabled
              >
                원서 접수 →
              </Button>
            </div>
            <Button
              icon="NavigationArrow"
              color={authorityColor}
              kind="outlined"
              onClick={reserve_addmission}
              margin={[0, 0, 30, 0]}
            >
              입학 설명회 참석 예약
            </Button>
          </Mobile>
        </_ApplicationDetail>
        <_Overflow>
          <Progress />
        </_Overflow>
      </_Application>
      <_Discription>
        {/* <Pc>
          <_Shortcut>
            {shortcut.map((item) =>
              item.link.includes('/') ? (
                <_ShortcutButton
                  icon={item.icon}
                  title={item.title}
                  onClick={() => {
                    switch (item.title) {
                      case '입학설명회 참석 예약':
                        window.open(
                          'https://docs.google.com/forms/d/e/1FAIpQLSeomGdo53Qimaa2CKeP-xynBAucfUDXUR--R6hIWnh6oRD01A/viewform',
                        );
                        break;
                      case '성적 산출':
                        navigate(item.link);
                        break;
                      default:
                        Toast('추후 추가 예정입니다.', { type: 'error' });
                        break;
                    }
                  }}
                />
              ) : (
                <a href={item.link}>
                  <_ShortcutButton icon={item.icon} title={item.title} />
                </a>
              ),
            )}
          </_Shortcut>
        </Pc> */}
        <BoardsAtMain />
      </_Discription>
      {/* 원서접수 기간 중 사용할 모달 */}
      {modalState === 'START_NOTICE' && (
        <Modal>
          <Text size="title2" color="gray50" whiteSpace="pre-line" margin={[0, 0, 20, 0]}>
            합격자 확인은 로그인 후 마이페이지를 확인해주세요!
          </Text>
          <Button
            kind="outlined"
            margin={['top', 30]}
            onClick={() => {
              close();
              setModalState('');
              sessionStorage.setItem('modal', 'true');
            }}
          >
            확인
          </Button>
        </Modal>
      )}
    </_Wrapper>
  );
};

export default MainFunction;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;
  width: 100%;
  margin: 0 auto;
  max-width: 76rem;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    padding-top: 4rem;
  }
`;

const _Banner = styled.img`
  width: 100%;
  border-radius: 4px;
  padding: 0 1.5%;
`;

const _Application = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  margin: 1% 1.5%;
  max-height: 100vh;
  @media screen and (max-width: 1136px) and (min-width: 769px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    align-items: center;
    border: 0;
  }
`;

const _ApplicationDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 9rem;
  width: 36%;
  @media screen and (max-width: 1136px) and (min-width: 769px) {
    justify-content: flex-start;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const _Discription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 1.5%;
  @media screen and (max-width: 1136px) and (min-width: 769px) {
    flex-direction: column;
  }
  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;

const _Shortcut = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  width: 50%;
  @media screen and (max-width: 1136px) and (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const _Overflow = styled.div`
  overflow: scroll;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: flex-end;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
`;

const PhoneNumber = styled(Text)`
  font-size: 20px;
`;
