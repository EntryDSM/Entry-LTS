import React from 'react';
import styled from '@emotion/styled';
import Download from '@/assets/Download.svg';
import { Icon, Text, theme } from '@team-entry/design_system';
import { useAuthority } from '@/hooks/useAuthority';
import { color, realBlack } from '@team-entry/design_system/build/style/color';

const NewAdmissionPage = () => {
  const note = [
    '① 등기우편 접수는 제출 마감일 우체국 소인까지 인정',

    '② 합격자 등록은 입학동의서 제출로 대신함',

    '③ 원서는 전형의 구분과 상관없이 단일 지원이 원칙임',

    '④ 전형 일정은 추후 변경될 수 있음',
  ];
  const newStudentSchedule = [
    {
      title: '원서 접수',
      schedule: '	2024.10.14.(월)~10.17.(목) 17:00',
      location: '인터넷 접수(본교 홈페이지에 별도 안내)',
    },
    {
      title: '원서 및 증빙서류 제출',
      schedule: '2024.10.14.(월)~10.17.(목) 17:00',
      location: '본교 접수처 또는 등기우편',
    },
    { title: '1차 전형 합격자 발표', schedule: '2024.10.21.(월) 15:00', location: '원서접수 사이트' },
    {
      title: '2차 전형(심층면접 등)',
      schedule: '2024.10.25.(금) 09:00',
      location: '본교 내 지정장소',
    },
    {
      title: '최종 합격자 발표',
      schedule: '2024.10. 31.(목) 10:00',
      location: '원서접수 사이트',
    },
    {
      title: '합격자 등록(입학동의서 제출)',
      schedule: '2024.11. 1.(금)~11.8.(금) 17:00',
      location: '본교 등록 접수처 또는 등기우편',
    },
    {
      title: '건강검진 결과 제출',
      schedule: '2024.11. 1.(금)~11.16.(토)',
      location: '병원에서 검사 후 본교에 제출',
    },
  ];
  const { isAdmin } = useAuthority();

  const DownLoad = () => {
    const pdfUrl = 'https://dsmhs.djsch.kr/boardCnts/fileDown.do?fileSeq=7cc282c62941f5b4e314530b378dc812';
    window.open(pdfUrl);
  };

  return (
    <_Container>
      <_Wrapper>
        <Text color="black900" size="header1">
          신입생 전형 요강
        </Text>
        <_Download onClick={DownLoad}>
          <_Icon isAdmin={isAdmin}>
            <Icon icon="Download" size={18} />
          </_Icon>
          <Text color="black900" size="body1" cursor="default">
            2025전형요강.pdf
          </Text>
        </_Download>
        <Text color="orange500" size="title1" margin={[20, 0, 0, 0]}>
          2025학년도 신입생 전형 일정
        </Text>
        <_TableBox>
          <_Table>
            <_Tr>
              <_Title>
                <Text color="realBlack" size="body3">
                  구분
                </Text>
              </_Title>
              <_Title>
                <Text color="realBlack" size="body3">
                  일정
                </Text>
              </_Title>
              <_Title>
                <Text color="realBlack" size="body3">
                  장소
                </Text>
              </_Title>
            </_Tr>
            {newStudentSchedule.map(({ title, schedule, location }, index) => (
              <_Tr key={index}>
                <_Th>
                  <Text color="realBlack" size="body3">
                    {title}
                  </Text>
                </_Th>
                <_Td>
                  <Text color="realBlack" size="body4">
                    {schedule}
                  </Text>
                </_Td>
                <_Td>
                  <Text color="realBlack" size="body4">
                    {location}
                  </Text>
                </_Td>
              </_Tr>
            ))}
            <_Tr>
              <_Th>비고</_Th>
              <_DetailsTd colSpan={2}>
                {note.map((text, index) => (
                  <Text key={index} color="realBlack" size="body4">
                    {text}
                  </Text>
                ))}
              </_DetailsTd>
            </_Tr>
          </_Table>
        </_TableBox>
      </_Wrapper>
    </_Container>
  );
};

export default NewAdmissionPage;

const _TableBox = styled.div`
  width: 100%;
  border-top: 2px solid ${color.orange500};
`;

const _Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const _Tr = styled.tr``;

const _Title = styled.th`
  white-space: nowrap;
  text-align: center;
  padding: 8px 4px;
  background-color: ${color.black50};
  letter-spacing: 4px;
  border: 1px solid ${color.black100};
`;

const _Th = styled.th`
  white-space: nowrap;
  text-align: center;
  padding: 8px 4px;
  background-color: ${color.black50};
  border: 1px solid ${color.black100};
  vertical-align: middle;
`;

const _Td = styled.td`
  white-space: nowrap;
  text-align: center;
  padding: 8px 4px;
  border: 1px solid ${color.black100};
`;

const _DetailsTd = styled.td`
  white-space: nowrap;
  padding: 8px;
  border: 1px solid ${color.black100};
`;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 8rem 40px 0 40px;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  gap: 1rem;
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

const _Image = styled.div`
  width: 60rem;
  height: 80vh;
  background-color: ${theme.color.black200};
`;
