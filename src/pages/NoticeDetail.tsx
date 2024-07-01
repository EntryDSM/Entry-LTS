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

  return (
    <_Container>
      <_Wrapper>
        <Pc>
          <Text color="black500" size="body1">
            {data?.type === 'NOTICE' && '입학 공지사항'}
            {data?.type === 'GUIDE' && '예비 신입생 안내'}
          </Text>
          <Text color="black900" size="title1" margin={['bottom', 8]}>
            {data?.title}
          </Text>
          <Text color="black500" size="body1">
            {data?.createdAt.slice(0, 10)}
          </Text>
          <_Line />
          {data?.imageURL && <img src={data?.imageURL} alt="notice" style={{ marginBottom: '20px' }} />}
          <Text color="black600" size="body2">
            {data?.content}
          </Text>
          {data?.attachFiles && data.attachFiles.length > 0 && (
            <_FileTitle onClick={() => {}}>
              <Text color="black900" size="title3" margin={['bottom', 10]}>
                첨부파일
              </Text>
              <VStack gap={5}>
                {data.attachFiles.map((file, index) => {
                  return <File key={index} name={file.attachFileName} url={file.attachFileUrl} />;
                })}
              </VStack>
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
            {data?.createdAt.slice(0, 10)}
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
