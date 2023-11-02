import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../hooks/useResponsive';
import BoardElement from '../components/Board/BoardElement';
import { useModal } from '../hooks/useModal';
import CancelModal from '@/components/Modal/CancelModal';
import { ApplyInfoStatus, DeleteUserInfo, DeleteUserPdf } from '@/utils/api/user';
import { AUTH_URL } from '@/constant/env';
import { DownloadPdf } from '@/utils/api/pdf';
import { GetFirstRoundPass, GetSecondRoundPass } from '@/utils/api/pass';
import BoardHeader from '@/components/Board/BoardHeader';
import { GetMyQna } from '@/utils/api/qna';
import { Link } from 'react-router-dom';
import DefaultModal from '@/components/Modal/DefaultModal';
import { getSchedule } from '@/utils/api/schedule';

const MyPage = () => {
  const { Modal, open, close, setModalState, modalState } = useModal();
  const { mutate: deleteUserInfo } = DeleteUserInfo();
  const { data } = ApplyInfoStatus();
  const { mutate: deleteUserPdf } = DeleteUserPdf(data?.receipt_code);
  const onDownloadPdf = DownloadPdf();

  const { mutate: getFirstRound } = GetFirstRoundPass({ setModalState, open });
  const { mutate: getSecondRound } = GetSecondRoundPass({ setModalState, open });
  const { data: myQnaList } = GetMyQna();

  // const openSignOutModal = () => {
  //   setModalState('SIGN_OUT');
  //   open();
  // };

  // 발표일
  const { data: schedule, isLoading } = getSchedule();
  const secondAnnouncementDate = new Date(schedule?.schedules[4]?.date ?? '');
  const currentDate = new Date();

  return (
    <_Container>
      <_Wrapper>
        <_User>
          <_UserInfo>
            <Pc>
              <Text color="realBlack" size="header1">
                {data?.name} 지원자님
              </Text>
              <Text color="black500" size="body1">
                {data?.phone_number.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}
              </Text>
            </Pc>
            <Mobile>
              <Text color="realBlack" size="body3">
                {data?.name} 지원자님
              </Text>
              <Text color="black500" size="body3">
                {data?.phone_number.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}
              </Text>
            </Mobile>
          </_UserInfo>
          <_UserButtons>
            <Button
              onClick={() => {
                window.location.href = `${AUTH_URL}/change-pwd`;
              }}
            >
              비밀번호 변경
            </Button>
            {/* <Button color="delete" kind="delete" onClick={openSignOutModal}>
              회원 탈퇴
            </Button> */}
          </_UserButtons>
        </_User>

        <_Apply>
          <Text color="black900" size="body1">
            지원 상태
          </Text>
          <_Line />
          <Text color="black900" size="body3">
            {data?.application_type === 'COMMON' && '일반 전형'}
            {data?.application_type === 'MEISTER' && '마이스터 전형'}
            {data?.application_type === 'SOCIAL' && '사회통합 전형'}
          </Text>
          <Text color="black900" size="title2" margin={['top', 4]}>
            지원서 제출 {data?.submitted ? '완료' : '미완료'}
          </Text>
          <Text color="black900" size="body3" margin={['top', 25]}>
            서류 도착 여부
          </Text>
          <Text color="black900" size="title2" margin={['top', 4]}>
            서류가 학교에 {data?.printed_arrived ? '도착하였습니다' : '도착하지 않았습니다'}
          </Text>
          <_ApplyButtons>
            <Pc>
              <Button onClick={onDownloadPdf}>원서 다운로드</Button>
              <Button disabled={currentDate < secondAnnouncementDate} onClick={getSecondRound}>
                발표 결과 확인
              </Button>
              {/* <Button color="delete" kind="delete" onClick={openCancelSubmitModal}>
                원서 최종제출 취소
              </Button> */}
            </Pc>
            <Mobile>
              <Button onClick={getSecondRound}>발표 결과 확인</Button>
            </Mobile>
          </_ApplyButtons>
        </_Apply>

        <_BoarderTitle>
          <Pc>
            <Text margin={['left', 16]} color="black700" size="body1">
              내가 작성한 질문
            </Text>
          </Pc>
          <Mobile>
            <Text margin={['left', 16]} color="black700" size="body3">
              내가 작성한 질문
            </Text>
          </Mobile>
        </_BoarderTitle>
        <div style={{ width: '100%' }}>
          <BoardHeader isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
          {myQnaList?.questions?.map((qna, idx) => {
            return (
              <Link to={`/customer/${qna.id}`}>
                <BoardElement
                  title={qna.title}
                  boardNumber={myQnaList.questions.length - idx}
                  createdAt={qna.created_at}
                  userName={qna.username}
                  isPublic={qna.is_public}
                  isReplied={qna.is_replied}
                  isNumber={true}
                  isTopBorder={false}
                  isComment={true}
                  isWriteDay={true}
                  isWriter={true}
                />
              </Link>
            );
          })}
        </div>
      </_Wrapper>

      {modalState === 'CANCEL_SUBMIT' && (
        <Modal>
          <CancelModal
            title="최종제출 취소"
            subTitle="정말 최종제출을 취소하시겠습니까?"
            button={<div style={{ width: 200 }}>최종제출 취소</div>}
            onClick={() => {
              close();
              deleteUserPdf();
            }}
          />
        </Modal>
      )}
      {modalState === 'SIGN_OUT' && (
        <Modal>
          <CancelModal
            title="회원 탈퇴"
            subTitle="정말 탈퇴하시겠습니까?"
            button={<div style={{ width: 200 }}>회원 탈퇴</div>}
            onClick={() => {
              close();
              deleteUserInfo();
            }}
          />
        </Modal>
      )}
      {modalState === 'PASSED_ROUND' && (
        // <Modal>
        //   <DefaultModal
        //     color="black900"
        //     title="1차 발표 결과 확인"
        //     subTitle={
        //       <div style={{ lineHeight: '26px' }}>
        //         축하드립니다!
        //         <br />
        //         <div style={{ textAlign: 'left' }}>
        //           대덕소프트웨어마이스터고 <strong>1차 전형 합격</strong>입니다!
        //           <br />
        //           2차 전형 관련 안내 사항은 <strong>본교 홈페이지</strong>와
        //           <br /> <strong>원서접수 사이트의 입학 공지사항</strong>을 확인하시기 바랍니다.
        //         </div>
        //       </div>
        //     }
        //     button="확인"
        //     onClick={close}
        //   />
        // </Modal>
        <Modal>
          <DefaultModal
            color="black900"
            title="2차 발표 결과 확인"
            subTitle={
              <div style={{ lineHeight: '26px' }}>
                축하드립니다! <strong>최종합격</strong>하셨습니다!
                <br />
                꼭, <strong>공지사항</strong>을 확인하고
                <strong> 입학동의서</strong>를 제출해주세요!
              </div>
            }
            button="확인"
            onClick={close}
          />
        </Modal>
      )}
      {modalState === 'NOT_PASSED_ROUND' && (
        // <Modal>
        //   <DefaultModal
        //     color="black900"
        //     title="1차 발표 결과 확인"
        //     subTitle={
        //       <div style={{ lineHeight: '26px' }}>
        //         지원해주셔서 감사합니다.
        //         <br />
        //         대덕소프트웨어마이스터고 1차 전형 결과 불합격입니다.
        //       </div>

        //     }
        //     button="확인"
        //     onClick={close}
        //   />
        // </Modal>
        <Modal>
          <DefaultModal
            color="black900"
            title="2차 발표 결과 확인"
            subTitle={
              <div style={{ lineHeight: '26px' }}>
                2차 전형 결과 불합격입니다.
                <br />
                본교에 지원에주셔서 감사합니다.
              </div>
            }
            button="확인"
            onClick={close}
          />
        </Modal>
      )}
    </_Container>
  );
};

export default MyPage;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 10rem;
  @media screen and (max-width: 769px) {
    margin-top: 4rem;
  }
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  padding: 0 10px;
  @media screen and (max-width: 769px) {
    width: 100%;
    padding: 20px;
  }
`;

const _User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const _UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 769px) {
    flex-direction: row;
    align-items: center;
  }
`;

const _UserButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const _Apply = styled.div`
  width: 100%;
  background-color: ${theme.color.black50};
  padding: 16px;
  border-radius: 4px;
`;

const _Line = styled.div`
  border-bottom: 1px solid ${theme.color.black100};
  margin: 12px 0px;
`;

const _ApplyButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 64px;
`;

const _BoarderTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${theme.color.black900};
  @media screen and (max-width: 769px) {
    height: 40px;
    margin-top: 60px;
  }
`;
