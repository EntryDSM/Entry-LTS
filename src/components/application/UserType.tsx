import React from 'react';
import styled from '@emotion/styled';
import { Radio, theme, Dropdown } from '@team-entry/design_system';
import ApplicationContent from './ApplicationContent';
import { UserTypeValue } from '@/pages/Application';

interface UserTypeProps {
  userTypeValues: UserTypeValue;
  setUserTypeValues: React.Dispatch<React.SetStateAction<UserTypeValue>>;
}

const UserType = ({ userTypeValues, setUserTypeValues }: UserTypeProps) => {
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
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
          onChange={onChangeRadio}
          isChecked={userTypeValues.application_type === 'COMMON'}
        />
        <Radio
          label="마이스터 인재"
          name="application_type"
          value="MEISTER"
          onChange={onChangeRadio}
          isChecked={userTypeValues.application_type === 'MEISTER'}
        />
        <Radio
          label={
            <Dropdown
              className="application_type"
              width={100}
              disabled={userTypeValues.application_type !== 'SOCIAL'}
              onChange={(e) => setUserTypeValues({ ...userTypeValues, application_type: e })}
              options={['사회통합1', '사회통합2']}
              unit="년"
            />
          }
          name="application_type"
          value="SOCIAL"
          onChange={onChangeRadio}
          isChecked={userTypeValues.application_type === 'SOCIAL'}
        />
      </ApplicationContent>

      <ApplicationContent grid={2} title="지역 선택">
        <Radio
          label="대전"
          name="is_daejeon"
          value="true"
          onChange={onChangeRadio}
          isChecked={userTypeValues.is_daejeon === 'true'}
        />
        <Radio
          label="전국"
          name="is_daejeon"
          value="false"
          onChange={onChangeRadio}
          isChecked={userTypeValues.is_daejeon === 'false'}
        />
      </ApplicationContent>

      <ApplicationContent grid={3} title="졸업 구분">
        <Radio
          label="졸업 예정"
          name="educational_status"
          value="PROSPECTIVE_GRADUATE"
          onChange={onChangeRadio}
          isChecked={userTypeValues.educational_status === 'PROSPECTIVE_GRADUATE'}
        />
        <Radio
          label="졸업"
          name="educational_status"
          value="GRADUATE"
          onChange={onChangeRadio}
          isChecked={userTypeValues.educational_status === 'GRADUATE'}
        />
        <Radio
          label="검정고시"
          name="educational_status"
          value="QUALIFICATION_EXAM"
          onChange={onChangeRadio}
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
          onChange={onChangeRadio}
          isChecked={userTypeValues.application_remark === 'PRIVILEGED_ADMISSION'}
        />
        <Radio
          label="특례 입학 대상"
          name="application_remark"
          value="SPECIAL"
          onChange={onChangeRadio}
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
