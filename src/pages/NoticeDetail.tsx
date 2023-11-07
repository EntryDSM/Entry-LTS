import styled from '@emotion/styled';
import { Button, Icon, Text, VStack, theme } from '@team-entry/design_system';
import Noticeimg from '../assets/ReplaceNotice.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Mobile, Pc } from '..//hooks/useResponsive';
import { useAuthority } from '@/hooks/useAuthority';
import { DeleteNotice, GetNoticeDetail } from '@/utils/api/notice';
import File from '@/components/File';

const NoticeDetail = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuthority();
  const { id: noticeId } = useParams();

  const { data } = GetNoticeDetail(noticeId);
  const { mutate: deleteNotice } = DeleteNotice();

  const handleDownload = () => {
    window.open('https://dsmhs.djsch.kr/boardCnts/fileDown.do?m=0602&s=dsmhs&fileSeq=5ac43f3743ed132c144b697e6d0485ad');
  };

  const handleDownLoadSecond = () => {
    window.open('https://dsmhs.djsch.kr/boardCnts/fileDown.do?m=0602&s=dsmhs&fileSeq=b6306b3342266d6f1217f6e1ab6d0737');
  };

  const handleDownLoadCoronaSecond = () => {
    window.open(
      'https://dsmhs.djsch.kr//boardCnts/fileDown.do?m=0602&s=dsmhs&fileSeq=a0f33f698324301c21c725e186f076c4',
    );
  };

  const handleDownLoadFreshmanOrientation = () => {
    window.open(
      'https://s3.ap-northeast-2.amazonaws.com/rolls-image.entry.com/notice_file/2024%E1%84%92%E1%85%A1%E1%86%A8%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A9+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%A2%E1%86%BC+%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A7%E1%86%AB+%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A2.hwp',
    );
  };

  const handleDownLoadFreshmanRegister = () => {
    window.open(
      'https://s3.ap-northeast-2.amazonaws.com/rolls-image.entry.com/notice_file/2024%E1%84%92%E1%85%A1%E1%86%A8%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A9+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%A2%E1%86%BC+%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%A8%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A8+%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A2(%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%A8%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%89%E1%85%A5+%E1%84%91%E1%85%A9%E1%84%92%E1%85%A1%E1%86%B7).hwp',
    );
  };

  const handleDownLoadOrientationDocument = () => {
    window.open(
      'https://s3.ap-northeast-2.amazonaws.com/rolls-image.entry.com/notice_file/%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A7%E1%86%AB+%E1%84%83%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B5%E1%86%AF+%E1%84%8C%E1%85%A6%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%89%E1%85%A5%E1%84%85%E1%85%B2+%E1%84%86%E1%85%A9%E1%84%8B%E1%85%B3%E1%86%B7.pdf',
    );
  };

  const handleDownLoadMedical = () => {
    window.open(
      'https://s3.ap-northeast-2.amazonaws.com/rolls-image.entry.com/notice_file/2024%E1%84%92%E1%85%A1%E1%86%A8%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A9+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%A2%E1%86%BC+%E1%84%80%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%AB+%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A2.hwp',
    );
  };

  return (
    <_Container>
      <_Wrapper>
        <Pc>
          <Text color="black500" size="body1">
            {data?.type === 'ADMISSION' && '입학 공지사항'}
            {data?.type === 'FRESHMAN' && '예비 신입생 안내'}
          </Text>
          <Text color="black900" size="title1" margin={['bottom', 8]}>
            {data?.title}
          </Text>
          <Text color="black500" size="body1">
            {data?.created_at.slice(0, 10)}
          </Text>
          <_Line />
          {data?.image && <img src={data?.image} alt="notice" style={{ marginBottom: '20px' }} />}
          <Text color="black600" size="body2">
            {data?.content}
          </Text>
          {!(+noticeId % 2) && (
            <_FileTitle onClick={() => {}}>
              <Text color="black900" size="title3" margin={['bottom', 10]}>
                첨부파일
              </Text>
              {noticeId == '2' && (
                <_Download onClick={handleDownload}>
                  <_Icon isAdmin={isAdmin}>
                    <Icon icon="Download" size={18} />
                  </_Icon>
                  <Text color="black900" size="body1" cursor="pointer">
                    2024학년도 신입생 원서접수 시 유의사항
                  </Text>
                </_Download>
              )}
              {noticeId == '4' && (
                <VStack gap={5}>
                  <_Download onClick={handleDownLoadSecond}>
                    <_Icon isAdmin={isAdmin}>
                      <Icon icon="Download" size={18} />
                    </_Icon>
                    <Text color="black900" size="body1" cursor="pointer">
                      2024학년도 신입생 2차 전형 안내
                    </Text>
                  </_Download>
                  <_Download onClick={handleDownLoadCoronaSecond}>
                    <_Icon isAdmin={isAdmin}>
                      <Icon icon="Download" size={18} />
                    </_Icon>
                    <Text color="black900" size="body1" cursor="pointer">
                      2024 코로나19 예방을 위한 2차전형 응시자 유의사항 안내문
                    </Text>
                  </_Download>
                </VStack>
              )}
              {noticeId === '6' && (
                <VStack gap={5}>
                  <_Download onClick={handleDownLoadFreshmanOrientation}>
                    <_Icon isAdmin={isAdmin}>
                      <Icon icon="Download" size={18} />
                    </_Icon>
                    <Text color="black900" size="body1" cursor="pointer">
                      2024학년도 신입생 오리엔테이션 안내
                    </Text>
                  </_Download>
                  <_Download onClick={handleDownLoadFreshmanRegister}>
                    <_Icon isAdmin={isAdmin}>
                      <Icon icon="Download" size={18} />
                    </_Icon>
                    <Text color="black900" size="body1" cursor="pointer">
                      2024학년도 신입생 입학 등록 안내(입학동의서 포함)
                    </Text>
                  </_Download>
                  <_Download onClick={handleDownLoadOrientationDocument}>
                    <_Icon isAdmin={isAdmin}>
                      <Icon icon="Download" size={18} />
                    </_Icon>
                    <Text color="black900" size="body1" cursor="pointer">
                      오리엔테이션 당일 제출서류 모음
                    </Text>
                  </_Download>
                  <_Download onClick={handleDownLoadMedical}>
                    <_Icon isAdmin={isAdmin}>
                      <Icon icon="Download" size={18} />
                    </_Icon>
                    <Text color="black900" size="body1" cursor="pointer">
                      2024학년도 신입생 건강검진 안내
                    </Text>
                  </_Download>
                </VStack>
              )}
            </_FileTitle>
          )}
        </Pc>
        <Mobile>
          <Text color="black500" size="body5">
            입학 공지사항
          </Text>
          <Text color="black900" size="title1" margin={['bottom', 8]}>
            {data?.title}
          </Text>
          <Text color="black500" size="body5">
            {data?.created_at.slice(0, 10)}
          </Text>
          <_Line />
          <_Img src={Noticeimg} alt="notice" style={{ marginBottom: '20px' }} />
          <Text color="black600" size="body5" margin={['top', 4]}>
            {data?.content}
          </Text>
          {/* <_FileTitle>
            <Text color="black900" size="body1">
              첨부파일
            </Text>
          </_FileTitle> */}
        </Mobile>
        {/* <_Files>
          <File />
          <File />
          <File />
        </_Files> */}
        <_ButtonFooter>
          <Button onClick={() => navigate(-1)}>목록으로</Button>
          {isAdmin && (
            <_AdminButtons>
              <Button
                onClick={() => {
                  deleteNotice(noticeId);
                }}
                color="delete"
                kind="delete"
              >
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

const _Download = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const _Icon = styled.div<{ isAdmin: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${({ isAdmin }) => (isAdmin ? theme.color.green500 : theme.color.orange500)};
  border-radius: 50%;
`;
