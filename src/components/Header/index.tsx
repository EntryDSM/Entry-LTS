import * as _ from './style';
import Logo from '../../assets/Logo.svg';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Text } from '@team-entry/design_system';
import { Mobile, Pc } from '../../hooks/useResponsive';
import Menu from '@/assets/Menu.svg';
import { Cookies } from 'react-cookie';

type THeader = '고객 문의' | '공지 사항' | '성적 산출' | '신입생 전형 요강' | '로그인' | '마이페이지' | '로그아웃' | '';

interface IHeaderList {
  name: THeader;
  url: string;
  type?: 'login' | 'logout' | 'total';
}

const headerList: IHeaderList[] = [
  { name: '고객 문의', url: '/customer' },
  { name: '공지 사항', url: '/notice' },
  { name: '성적 산출', url: '/grade' },
  { name: '신입생 전형 요강', url: '/admission' },
];

const menuList: IHeaderList[] = [
  { name: '고객 문의', url: '/customer' },
  { name: '공지 사항', url: '/notice' },
  { name: '신입생 전형 요강', url: '/admission' },
  { name: '로그인', url: '/login', type: 'logout' },
  { name: '마이페이지', url: '/mypage', type: 'login' },
  { name: '로그아웃', url: '/logout', type: 'login' },
];

const Header = () => {
  const [list, setList] = useState<THeader>('');
  const [visibility, setVisibility] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [throttle, setThrottle] = useState(false);
  const location = useLocation();
  const cookie = new Cookies();
  const isLogin = cookie.get('access_token');

  const onClick = () => {
    console.log('clicked');
  };

  useEffect(() => {
    if (visibility) {
      setIsOpen(true);
    } else {
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  }, [visibility]);

  const closeMenu = () => {
    if (throttle) return;
    else {
      setThrottle(true);
      setTimeout(() => {
        setThrottle(false);
      }, 500);
      setVisibility(!visibility);
    }
  };

  return (
    <>
      <_._HeaderContainer>
        <Mobile>
          <_._MenuIcon onClick={closeMenu} src={Menu} alt="" />
          {isOpen && (
            <_._Background onClick={closeMenu}>
              <_._Menu onClick={(e) => e.stopPropagation()} visibility={visibility}>
                {menuList
                  .filter((list) => (isLogin ? list.type !== 'logout' : list.type !== 'login'))
                  .map((list, idx) => {
                    return (
                      <Link key={idx} to={list.url}>
                        <_._MenuElement
                          color={list.name === '로그아웃' ? 'red' : 'black'}
                          onClick={() => {
                            setVisibility(false);
                          }}
                        >
                          {list.name}
                        </_._MenuElement>
                      </Link>
                    );
                  })}
              </_._Menu>
            </_._Background>
          )}
        </Mobile>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link onClick={() => setVisibility(false)} to="/" style={{ display: 'flex' }}>
            <img src={Logo} alt="" style={{ marginRight: 12, cursor: 'pointer' }} />
            <Text color="realBlack" size="header1">
              EntryDSM
            </Text>
          </Link>
          <Pc>
            <_._Texts>
              {headerList.map((res) => {
                const { name, url } = res;
                return (
                  <Link to={url}>
                    <_._Text fontColor={location.pathname.includes(url)} fontSize={18} fontWeight={500}>
                      {name}
                    </_._Text>
                  </Link>
                );
              })}
            </_._Texts>
          </Pc>
        </div>
        <Pc>
          {isLogin ? (
            <Button color="orange" kind="rounded" onClick={onClick}>
              확인
            </Button>
          ) : (
            <Button color="orange" kind="rounded" onClick={onClick}>
              로그인
            </Button>
          )}
        </Pc>
      </_._HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
