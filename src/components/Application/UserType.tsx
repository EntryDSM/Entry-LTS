import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Radio, theme, Dropdown } from '@team-entry/design_system';
import ApplicationContent from '@/components/Application/ApplicationContent';
import { UserTypeValue } from '@/pages/Application';

interface UserTypeProps {
  userTypeValues: UserTypeValue;
  setUserTypeValues: React.Dispatch<React.SetStateAction<UserTypeValue>>;
}

const UserType = ({ userTypeValues, setUserTypeValues }: UserTypeProps) => {
  const onClickRadio = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { value, name } = e.currentTarget;
    setUserTypeValues({
      ...userTypeValues,
      [name]: value,
    });
  };
  return (
    <_ApplicationWrapper>
      <ApplicationContent grid={3} title="전형 선택">
        <Radio
          label="일반"
          name="application_type"
          value="COMMON"
          onClick={onClickRadio}
          isChecked={userTypeValues.application_type === 'COMMON'}
        />
        <Radio
          label="마이스터 인재"
          name="application_type"
          value="MEISTER"
          onClick={onClickRadio}
          isChecked={userTypeValues.application_type === 'MEISTER'}
        />
        <_RadioWrapper>
          <Radio
            label=""
            name="application_type"
            value="SOCIAL"
            onClick={onClickRadio}
            isChecked={
              userTypeValues.application_type !== 'COMMON' &&
              userTypeValues.application_type !== 'MEISTER' &&
              userTypeValues.application_type !== ''
            }
          />
          <Dropdown
            className="application_type"
            width={110}
            disabled={
              userTypeValues.application_type === 'COMMON' ||
              userTypeValues.application_type === 'MEISTER' ||
              userTypeValues.application_type === ''
            }
            onChange={(e) => {
              setUserTypeValues({ ...userTypeValues, application_type: e });
            }}
            options={['사회통합', '사회통합1', '사회통합2', '사회통합3']}
            unit="년"
          />
        </_RadioWrapper>
      </ApplicationContent>

      <ApplicationContent grid={2} title="지역 선택">
        <Radio
          label="대전"
          name="is_daejeon"
          value="true"
          onClick={onClickRadio}
          isChecked={userTypeValues.is_daejeon === 'true'}
        />
        <Radio
          label="전국"
          name="is_daejeon"
          value="false"
          onClick={onClickRadio}
          isChecked={userTypeValues.is_daejeon === 'false'}
        />
      </ApplicationContent>

      <ApplicationContent grid={3} title="졸업 구분">
        <Radio
          label="졸업 예정"
          name="educational_status"
          value="PROSPECTIVE_GRADUATE"
          onClick={onClickRadio}
          isChecked={userTypeValues.educational_status === 'PROSPECTIVE_GRADUATE'}
        />
        <Radio
          label="졸업"
          name="educational_status"
          value="GRADUATE"
          onClick={onClickRadio}
          isChecked={userTypeValues.educational_status === 'GRADUATE'}
        />
        <Radio
          label="검정고시"
          name="educational_status"
          value="QUALIFICATION_EXAM"
          onClick={onClickRadio}
          isChecked={userTypeValues.educational_status === 'QUALIFICATION_EXAM'}
        />
      </ApplicationContent>

      <ApplicationContent grid={2} title="졸업 연월">
        <Dropdown
          className="graduated_at"
          width={85}
          onChange={(e) => setUserTypeValues({ ...userTypeValues, graduated_at: e })}
          options={['2023', '2024', '2025']}
          unit="년"
        />
        <Dropdown
          className="graduated_at"
          width={85}
          onChange={(e) => setUserTypeValues({ ...userTypeValues, graduated_at: e })}
          options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
          unit="월"
        />
      </ApplicationContent>

      <ApplicationContent
        grid={2}
        title="특기 사항"
        required={false}
        placeholder="특기사항에 해당하시는 항목이 있으면 체크해주세요"
      >
        <Radio
          label="국가 유공자"
          name="application_remark"
          value="PRIVILEGED_ADMISSION"
          onClick={onClickRadio}
          isChecked={userTypeValues.application_remark === 'PRIVILEGED_ADMISSION'}
        />
        <Radio
          label="특례 입학 대상"
          name="application_remark"
          value="SPECIAL"
          onClick={onClickRadio}
          isChecked={userTypeValues.application_remark === 'SPECIAL'}
        />
      </ApplicationContent>
    </_ApplicationWrapper>
  );
};

export default UserType;

const _ApplicationWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60rem;
  border-top: 1px solid ${theme.color.black600};
  border-bottom: 1px solid ${theme.color.black600};
  margin-top: 49px;
`;

const _RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
