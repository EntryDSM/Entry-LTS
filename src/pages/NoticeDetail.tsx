import React from 'react';
import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import Noticeimg from '../assets/ReplaceNotice.svg';
import Download from '../assets/Download.svg';
import { useNavigate } from 'react-router-dom';

const data = {
  title: '2077 신입생 입학전 과제 제출 안내',
  name: '장**',
  image: Noticeimg,
  content: `신입생 오리엔테이션 책자에 있는 입학전 과제입니다.
  신학기 적응을 위한 준비이니 성실히 수행해서 제출하시기 바랍니다.
  ■ 과제 제출 마감: 2023년 2월 22일
  ■ 학교 홈페이지 학생 회원가입 -> 학교 담당자가 승인
  ■ 학교 홈페이지 로그인 후 [과제제출 - 신입생 - 각 교과] 게시판에 제출
  과제 중 자기소개 PPT는 첨부한 기본틀을 참고하거나 자신만의 방식으로 만들어도 됩니다.`,
  file: ['2023학년도 신입생 입학전 과제.hwp', '자기소개_학번_이름.pptx'],
};

const NoticeDetail = () => {
  const navigate = useNavigate();
  return (
    <_Container>
      <_Wrapper>
        <Text color="black500" size="body1">
          입학 공지사항
        </Text>
        <Text color="black900" size="title1" margin={['bottom', 8]}>
          {data.title}
        </Text>
        <Text color="black500" size="body1">
          {data.name}|2022-11-18
        </Text>
        <_Line />
        <img src={data.image} alt="notice" style={{ marginBottom: '20px' }} />
        <Text color="black600" size="body2">
          {data.content}
        </Text>
        <_FileTitle>
          <Text color="black900" size="title3">
            첨부파일
          </Text>
        </_FileTitle>
        <_Files>
          {data.file.map((file, i) => (
            <_File key={i}>
              <_Download>
                <img src={Download} alt="download" />
              </_Download>
              <Text color="black900" size="body1">
                {file}
              </Text>
            </_File>
          ))}
        </_Files>
        <Button onClick={() => navigate(-1)} margin={['top', 28]}>
          목록으로
        </Button>
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
  width: 60rem;
  margin-top: 7rem;
`;

const _Line = styled.div`
  width: 60rem;
  border-bottom: 1px solid ${theme.color.black100};
  margin: 20px 0px;
`;

const _FileTitle = styled.div`
  width: 60rem;
  border-bottom: 1px solid ${theme.color.black100};
  padding: 10px 0px;
  margin-top: 20px;
`;

const _File = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const _Download = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${theme.color.orange500};
  border-radius: 18px;
`;

const _Files = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
