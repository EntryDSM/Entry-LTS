import React from 'react';
import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import Noticeimg from '../assets/ReplaceNotice.svg';
import { useNavigate } from 'react-router-dom';
import File from '../components/File';
import { Mobile, Pc } from '..//hooks/useResponsive';
import { useAuthority } from '@/hooks/useAuthority';

const NoticeDetail = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuthority();
  return (
    <_Container>
      <_Wrapper>
        <Pc>
          <Text color="black500" size="body1">
            입학 공지사항
          </Text>
          <Text color="black900" size="title1" margin={['bottom', 8]}>
            2077 신입생 입학전 과제 제출 안내
          </Text>
          <Text color="black500" size="body1">
            장**|2022-11-18
          </Text>
          <_Line />
          <img src={Noticeimg} alt="notice" style={{ marginBottom: '20px' }} />
          <Text color="black600" size="body2">
            신입생 오리엔테이션 책자에 있는 입학전 과제입니다. 신학기 적응을 위한 준비이니 성실히 수행해서 제출하시기
            바랍니다.
            <br />
            ■ 과제 제출 마감: 2023년 2월 22일
            <br />
            ■ 학교 홈페이지 학생 회원가입 -&gt; 학교 담당자가 승인
            <br />
            ■ 학교 홈페이지 로그인 후 [과제제출 - 신입생 - 각 교과]
            <br />
            게시판에 제출
            <br />
            과제 중 자기소개 PPT는 첨부한 기본틀을 참고하거나 자신만의 방식으로 만들어도 됩니다.
          </Text>
          <_FileTitle>
            <Text color="black900" size="title3">
              첨부파일
            </Text>
          </_FileTitle>
        </Pc>
        <Mobile>
          <Text color="black500" size="body5">
            입학 공지사항
          </Text>
          <Text color="black900" size="title1" margin={['bottom', 8]}>
            2077 신입생 입학전 과제 제출 안내
          </Text>
          <Text color="black500" size="body5">
            장**|2022-11-18
          </Text>
          <_Line />
          <_Img src={Noticeimg} alt="notice" style={{ marginBottom: '20px' }} />
          <Text color="black600" size="body5" margin={['top', 4]}>
            신입생 오리엔테이션 책자에 있는 입학전 과제입니다. 신학기 적응을 위한 준비이니 성실히 수행해서 제출하시기
            바랍니다.
            <br />
            ■ 과제 제출 마감: 2023년 2월 22일
            <br />
            ■ 학교 홈페이지 학생 회원가입 -&gt; 학교 담당자가 승인
            <br />
            ■ 학교 홈페이지 로그인 후 [과제제출 - 신입생 - 각 교과]
            <br />
            게시판에 제출
            <br />
            과제 중 자기소개 PPT는 첨부한 기본틀을 참고하거나 자신만의 방식으로 만들어도 됩니다.
          </Text>
          <_FileTitle>
            <Text color="black900" size="body1">
              첨부파일
            </Text>
          </_FileTitle>
        </Mobile>
        <_Files>
          <File />
          <File />
          <File />
        </_Files>
        <_ButtonFooter>
          <Button onClick={() => navigate(-1)}>목록으로</Button>
          {isAdmin && (
            <_AdminButtons>
              <Button onClick={() => console.log('clicked')} color="delete" kind="delete">
                삭제
              </Button>
              <Button onClick={() => navigate('/notice/write')}>수정</Button>
            </_AdminButtons>
          )}
        </_ButtonFooter>
      </_Wrapper>
    </_Container>
  );
};

export default NoticeDetail;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const _Wrapper = styled.div`
  max-width: 60rem;
  width: 100%;
  margin-top: 7rem;
  padding: 0 20px;
  @media screen and (max-width: 769px) {
    margin-top: 4rem;
  }
`;

const _Line = styled.div`
  width: 60rem;
  border-bottom: 1px solid ${theme.color.black100};
  margin: 20px 0px;
  @media screen and (max-width: 769px) {
    width: 100%;
    margin: 8px 0px;
  }
`;

const _Img = styled.img`
  width: 318px;
  height: 234px;
  object-fit: cover;
  @media screen and (max-width: 769px) {
    width: 196px;
    height: 150px;
  }
`;

const _FileTitle = styled.div`
  width: 60rem;
  border-bottom: 1px solid ${theme.color.black100};
  padding: 10px 0px;
  margin-top: 20px;
  @media screen and (max-width: 769px) {
    width: 100%;
    padding: 0px 0px 8px 0px;
  }
`;

const _Files = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const _ButtonFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 28px 0px 50px 0px;
`;

const _AdminButtons = styled.div`
  display: flex;
  gap: 10px;
`;
