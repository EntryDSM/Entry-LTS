import * as _ from './style';
import LogoOrange from '../../assets/LogoOrange.svg';
import LogoGreen from '../../assets/LogoGreen.svg';
import User from '@/assets/User.svg';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Icon, Text } from '@team-entry/design_system';
import { Mobile, Pc } from '../../hooks/useResponsive';
import Menu from '@/assets/Menu.svg';
import { useAuthority } from '@/hooks/useAuthority';
import { getCookies, removeCookies, removeTokens } from '@/utils/cookies';
import { AUTH_URL, COOKIE_DOMAIN } from '@/constant/env';
import { getUserInfo } from '@/utils/api/application';
import OutsideClickHandler from 'react-outside-click-handler';

type THeader =
  | '문의사항'
  | '공지사항'
  | '성적산출'
  | '신입생 전형 요강'
  | '로그인'
  | '마이페이지'
  | '로그아웃'
  | '원서접수'
  | 'About'
  | '';

interface IHeaderList {
  name: THeader;
  url: string;
  type?: 'login' | 'logout' | 'total';
}

const headerList: IHeaderList[] = [
  { name: '원서접수', url: '/admission' },
  { name: '공지사항', url: '/notice' },
  { name: '문의사항', url: '/customer' },
  { name: '성적산출', url: '/grade' },
];

const menuList: IHeaderList[] = [
  { name: '원서접수', url: '/admission' },
  { name: '공지사항', url: '/notice' },
  { name: '문의사항', url: '/customer' },
  { name: '성적산출', url: '/grade' },
];

const Header = () => {
  const [list, setList] = useState<THeader>('');
  const [visibility, setVisibility] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [throttle, setThrottle] = useState(false);
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(!!getCookies('access_token'));
  // const [isLogin, setIsLogin] = useState(true);
  const { isAdmin, authorityColor } = useAuthority();
  const navigate = useNavigate();
  const authority = getCookies('authority');
  const { data } = getUserInfo(isLogin && authority != 'admin');

  const onClick = () => {
    window.location.href = `${AUTH_URL}/login`;
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

  const Logout = () => {
    removeCookies('authority', {
      path: '/',
      secure: true,
      sameSite: 'none',
      domain: COOKIE_DOMAIN,
    });
    removeTokens();
    setIsLogin(false);
    alert('로그아웃 되었습니다');
    navigate('/');
    setIsOpen(false);
  };

  useEffect(() => {
    setIsLogin(!!getCookies('access_token'));
  }, [getCookies('access_token')]);

  return (
    <>
      <_._HeaderContainer>
        <Mobile>
          <_._MenuIcon onClick={closeMenu} src={Menu} alt="" />
          {isOpen && (
            <_._Background onClick={closeMenu}>
              <_._Menu onClick={(e) => e.stopPropagation()} visibility={visibility}>
                {menuList.map((list, idx) => {
                  return (
                    <Link key={idx} to={list.url}>
                      <_._MenuElement
                        color={'black'}
                        onClick={() => {
                          setVisibility(false);
                        }}
                      >
                        {list.name}
                      </_._MenuElement>
                    </Link>
                  );
                })}
                {isLogin ? (
                  <>
                    <Link to="/mypage">
                      <_._MenuElement color="black">마이페이지</_._MenuElement>
                    </Link>
                    <_._MenuElement color="red" onClick={Logout}>
                      로그아웃
                    </_._MenuElement>
                  </>
                ) : (
                  <>
                    <_._MenuElement color="black" onClick={onClick}>
                      로그인
                    </_._MenuElement>
                  </>
                )}
              </_._Menu>
            </_._Background>
          )}
        </Mobile>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <_._LogoButton onClick={() => setVisibility(false)} to="/">
            <img
              src={isAdmin ? LogoGreen : LogoOrange}
              alt=""
              style={{ width: '35px', height: '48px', marginRight: 12, cursor: 'pointer' }}
            />
            <Text color="realBlack" size="header1">
              EntryDSM
            </Text>
          </_._LogoButton>
          <Pc>
            <_._Texts>
              {headerList.map((res) => {
                const { name, url } = res;
                return (
                  <Link to={url}>
                    <Text size="body1" color={location.pathname.includes(url) ? `${authorityColor}500` : '#494949'}>
                      {name}
                    </Text>
                  </Link>
                );
              })}
            </_._Texts>
          </Pc>
        </div>
        <Pc>
          {isLogin ? (
            <>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '284px',
                  alignItems: 'center',
                  gap: '40px',
                }}
              >
                <_._DropdownWrapper onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <Text size="body1" color={location.pathname.includes('/about') ? `${authorityColor}500` : '#494949'}>
                    About
                  </Text>
                  <Icon cursor="pointer" icon="DownArrow" color="black500" />
                </_._DropdownWrapper>
                {isDropdownOpen && (
                  <_._DropdownMenus>
                    <_._DropdownMenu>
                      <Text size="body1" color="#494949">
                        팀 소개
                      </Text>
                    </_._DropdownMenu>
                    <_._DropdownMenu>
                      <Text size="body1" color="#494949">
                        학교 소개
                      </Text>
                    </_._DropdownMenu>
                  </_._DropdownMenus>
                )}
                <Link to="/mypage">
                  <Text size="body1" color={location.pathname.includes('/mypage') ? `${authorityColor}500` : '#494949'}>
                    마이페이지
                  </Text>
                </Link>
                <Text size="body1" color="#494949">
                  김이름
                </Text>
              </div>
            </>
          ) : (
            <Button color={authorityColor} kind="contained" onClick={onClick}>
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
