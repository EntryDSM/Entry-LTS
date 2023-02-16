import * as _ from './style';
import Logo from '../../assets/Logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@team-entry/design_system';

type THeader = '고객 문의' | '공지 사항' | '성적 산출' | '신입생 전형 요강' | '';

interface IHeaderList {
  name: THeader;
  url: string;
}
const Header = () => {
  const [list, setList] = useState<THeader>('');
  const location = useLocation();

  const headerList: IHeaderList[] = [
    { name: '고객 문의', url: '/customer' },
    { name: '공지 사항', url: '/notice' },
    { name: '성적 산출', url: '/grade' },
    { name: '신입생 전형 요강', url: '/admission' },
  ];

  const onClick = () => {
    console.log('clicked');
  };

  return (
    <>
      <_._HeaderContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex' }}>
            <img src={Logo} alt="" style={{ marginRight: 12, cursor: 'pointer' }} />
            <_._Text style={{ marginRight: 52 }} fontSize={30} fontWeight={700}>
              EntryDSM
            </_._Text>
          </Link>
          <_._Texts>
            {headerList.map((res, i) => {
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
        </div>
        {localStorage.getItem('access_token') ? (
          <Button color="orange" kind="rounded" onClick={onClick}>
            확인
          </Button>
        ) : (
          <Button color="orange" kind="rounded" onClick={onClick}>
            로그인
          </Button>
        )}
      </_._HeaderContainer>
    </>
  );
};

export default Header;
