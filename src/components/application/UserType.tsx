import React from 'react';
import styled from '@emotion/styled';
import { Radio, theme } from '@team-entry/design_system';
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
  const userTypeRadios = [
    [
      {
        label: '일반',
        name: 'application_type',
        value: 'COMMON',
        onChange: onChangeRadio,
        isCheck: userTypeValues.application_type === 'COMMON',
      },
      {
        label: '마이스터 인재',
        name: 'application_type',
        value: 'MEISTER',
        onChange: onChangeRadio,
        isCheck: userTypeValues.application_type === 'MEISTER',
      },
      {
        label: '사회통합',
        name: 'application_type',
        value: 'SOCIAL',
        onChange: onChangeRadio,
        isCheck: userTypeValues.application_type === 'SOCIAL',
      },
    ],
    [
      {
        label: '대전',
        name: 'is_daejeon',
        value: 'true',
        onChange: onChangeRadio,
        isCheck: userTypeValues.is_daejeon === 'true',
      },
      {
        label: '전국',
        name: 'is_daejeon',
        value: 'false',
        onChange: onChangeRadio,
        isCheck: userTypeValues.is_daejeon === 'false',
      },
    ],
    [
      {
        label: '졸업예정자',
        name: 'educational_status',
        value: 'PROSPECTIVE_GRADUATE',
        onChange: onChangeRadio,
        isCheck: userTypeValues.educational_status === 'PROSPECTIVE_GRADUATE',
      },
      {
        label: '졸업자',
        name: 'educational_status',
        value: 'GRADUATE',
        onChange: onChangeRadio,
        isCheck: userTypeValues.educational_status === 'GRADUATE',
      },
      {
        label: '검정고시',
        name: 'educational_status',
        value: 'QUALIFICATION_EXAM',
        onChange: onChangeRadio,
        isCheck: userTypeValues.educational_status === 'QUALIFICATION_EXAM',
      },
    ],
    [
      {
        label: '년',
        name: 'graduated_at',
        value: 'year',
        onChange: onChangeRadio,
        isCheck: userTypeValues.graduated_at === 'year',
      },
      {
        label: '월',
        name: 'graduated_at',
        value: 'month',
        onChange: onChangeRadio,
        isCheck: userTypeValues.graduated_at === 'month',
      },
    ],
    [
      {
        label: '국가 유공자',
        name: 'application_remark',
        value: 'PRIVILEGED_ADMISSION',
        onChange: onChangeRadio,
        isCheck: userTypeValues.application_remark === 'PRIVILEGED_ADMISSION',
      },
      {
        label: '특례 입학 대상',
        name: 'application_remark',
        value: 'SPECIAL',
        onChange: onChangeRadio,
        isCheck: userTypeValues.application_remark === 'SPECIAL',
      },
    ],
  ];
  return (
    <_ApplicationWrapper>
      <ApplicationContent grid={3} title="전형 선택">
        {userTypeRadios[0].map((radio) => (
          <Radio
            key={radio.value}
            label={radio.label}
            name={radio.name}
            value={radio.value}
            onChange={radio.onChange}
            isChecked={radio.isCheck}
          />
        ))}
      </ApplicationContent>

      <ApplicationContent grid={2} title="지역 선택">
        {userTypeRadios[1].map((radio) => (
          <Radio
            key={radio.value}
            label={radio.label}
            name={radio.name}
            value={radio.value}
            onChange={radio.onChange}
            isChecked={radio.isCheck}
          />
        ))}
      </ApplicationContent>

      <ApplicationContent grid={3} title="졸업 구분">
        {userTypeRadios[2].map((radio) => (
          <Radio
            key={radio.value}
            label={radio.label}
            name={radio.name}
            value={radio.value}
            onChange={radio.onChange}
            isChecked={radio.isCheck}
          />
        ))}
      </ApplicationContent>

      <ApplicationContent grid={2} title="졸업 연월">
        {userTypeRadios[3].map((radio) => (
          <Radio
            key={radio.value}
            label={radio.label}
            name={radio.name}
            value={radio.value}
            onChange={radio.onChange}
            isChecked={radio.isCheck}
          />
        ))}
      </ApplicationContent>

      <ApplicationContent
        grid={2}
        title="특기 사항"
        required={false}
        placeholder="특기사항에 해당하시는 항목이 있으면 체크해주세요"
      >
        {userTypeRadios[4].map((radio) => (
          <Radio
            key={radio.value}
            label={radio.label}
            name={radio.name}
            value={radio.value}
            onChange={radio.onChange}
            isChecked={radio.isCheck}
          />
        ))}
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
