import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Radio, Text, theme } from '@team-entry/design_system';

const Application = () => {
  const [applicationValues, setApplicationValues] = useState({
    application_type: '',
    is_daejeon: '',
    educational_status: '',
    graduated_at: '',
    application_remark: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setApplicationValues({
      ...applicationValues,
      [name]: value,
    });
    console.log(applicationValues);
  };

  const onClick = () => console.log('clicked!');
  const progress = [1, 2, 3, 4, 5];
  return (
    <_Container>
      <_Wrapper>
        <div style={{ width: '60rem' }}>
          <Text size="title2" color="black600">
            대덕소프트웨어마이스터고등학교
          </Text>
          <Text size="header1" color="black900">
            지원자 전형 구분
          </Text>
        </div>

        <_ApplicationWrapper>
          <_ApplicationContent>
            <_ApplicationGridbox grid={4}>
              <Text color="black900" size="body1">
                전형선택
              </Text>
              <Radio onChange={onChange} label="일반" name="application_type" value="COMMON" />
              <Radio onChange={onChange} label="마이스터인제" name="application_type" value="MEISTER" />
              <Radio onChange={onChange} label="?" name="application_type" value="SOCIAL??" />
            </_ApplicationGridbox>
          </_ApplicationContent>

          <_ApplicationContent>
            <_ApplicationGridbox grid={3}>
              <Text color="black900" size="body1">
                지역선택
              </Text>
              <Radio onChange={onChange} label="대전" name="is_daejeon" value="true" />
              <Radio onChange={onChange} label="전국" name="is_daejeon" value="false" />
            </_ApplicationGridbox>
          </_ApplicationContent>

          <_ApplicationContent>
            <div style={{ display: 'flex' }}>
              <_ApplicationGridbox grid={3}>
                <Text color="black900" size="body1">
                  졸업구분
                </Text>
                <Radio onChange={onChange} label="졸업예정" name="educational_status" value="PROSPECTIVE_GRADUATE" />
                <Radio onChange={onChange} label="졸업" name="educational_status" value="GRADUATE" />
              </_ApplicationGridbox>
              <Radio
                onChange={onChange}
                label="검정고시(중학교 졸업학력)"
                name="educational_status"
                value="QUALIFICATION_EXAM"
              />
            </div>
          </_ApplicationContent>

          <_ApplicationContent>
            <_ApplicationGridbox grid={3}>
              <Text color="black900" size="body1">
                졸업연월
              </Text>
              <Radio onChange={onChange} label="연도 체크박스" name="graduated_at" value="year" />
              <Radio onChange={onChange} label="달 체크박스" name="graduated_at" value="month" />
            </_ApplicationGridbox>
            <Text color="black600" size="body6">
              졸업 예정자의 경우 졸업 예정월만 선택해주세요
            </Text>
          </_ApplicationContent>

          <_ApplicationContent>
            <_ApplicationGridbox grid={3}>
              <Text color="black600" size="body2">
                특기 사항
              </Text>
              <Radio onChange={onChange} label="국가 유공자" name="application_remark" value="국가유공자" />
              <Radio onChange={onChange} label="특례 입학 대상" name="application_remark" value="특례입학대상" />
            </_ApplicationGridbox>
            <Text color="black600" size="body6">
              특기사항에 해당하시는 항목이 있으면 체크해주세요
            </Text>
          </_ApplicationContent>
        </_ApplicationWrapper>
        <_Footer>
          <Button color="black" kind="outlined" onClick={onClick}>
            이전
          </Button>
          <_Progress>
            {progress.map((step) => (
              <_ProgreeStep key={step} isStep={step === 1} />
            ))}
          </_Progress>
          <Button color="black" kind="outlined" onClick={onClick}>
            다음
          </Button>
        </_Footer>
      </_Wrapper>
    </_Container>
  );
};

export default Application;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  margin-top: 7rem;
`;

const _ApplicationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  border-top: 1px solid ${theme.color.black600};
  border-bottom: 1px solid ${theme.color.black600};
  margin-top: 49px;
`;

const _ApplicationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 85px;
  padding: 0px 32px 0px 64px;
  border-bottom: 1px solid ${theme.color.black100};
  &:last-child {
    border-bottom: none;
  }
`;

const _ApplicationGridbox = styled.div<{ grid: number }>`
  display: grid;
  grid-template-columns: repeat(${({ grid }) => grid}, 170px);
`;

const _Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60rem;
  margin-top: 45px;
  margin-bottom: 100px;
`;

const _Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 38px;
`;

const _ProgreeStep = styled.div<{ isStep: boolean }>`
  width: ${({ isStep }) => (isStep ? 22 : 14)}px;
  height: ${({ isStep }) => (isStep ? 22 : 14)}px;
  border-radius: ${({ isStep }) => (isStep ? 11 : 7)}px;
  background-color: ${({ isStep }) => (isStep ? theme.color.orange400 : theme.color.black200)};
`;
