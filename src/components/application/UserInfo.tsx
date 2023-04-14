import { UserInfoValue } from '@/pages/Application';
import styled from '@emotion/styled';
import React from 'react';
import ApplicationContent from './ApplicationContent';
import { Dropdown, Input, Radio, Text, theme } from '@team-entry/design_system';

interface UserTypeProps {
  userInfoValues: UserInfoValue;
  setUserInfoValues: React.Dispatch<React.SetStateAction<UserInfoValue>>;
}

const UserInfo = ({ userInfoValues, setUserInfoValues }: UserTypeProps) => {
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserInfoValues({
      ...userInfoValues,
      [name]: value,
    });
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserInfoValues({
      ...userInfoValues,
      [name]: value,
    });
  };
  const onChangeDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setUserInfoValues({
      ...userInfoValues,
      [name]: value,
    });
  };
  return (
    <_ApplicationWrapper>
      <label>
        <_ApplicationImg>
          <Text size="body3" color="black700">
            원서 사진을 등록해주세요
          </Text>
        </_ApplicationImg>
        <_ApplicationImgInput type="file" />
      </label>

      <ApplicationContent grid={1} title="이름" width={40}>
        <Input
          type="text"
          placeholder="이름"
          width={230}
          name="name"
          value={userInfoValues.name}
          onChange={onChangeInput}
        />
      </ApplicationContent>

      <ApplicationContent grid={2} title="성별" width={40}>
        <Radio label="남자" name="sex" value="MEN" onChange={onChangeRadio} isChecked={userInfoValues.sex === 'MEN'} />
        <Radio
          label="여자"
          name="sex"
          value="WOMEN"
          onChange={onChangeRadio}
          isChecked={userInfoValues.sex === 'WOMEN'}
        />
      </ApplicationContent>
      <ApplicationContent grid={3} title="생년월일" width={40}>
        <Dropdown
          name="birthday"
          width={85}
          onChange={onChangeDropdown}
          options={[
            { value: '12', label: '12' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
          ]}
          unit="월"
        />
      </ApplicationContent>
      <ApplicationContent grid={1} title="검정고시 평균" width={40}>
        <Input
          type="number"
          placeholder="검정고시 평균"
          width={230}
          name="blackExam"
          value={userInfoValues.blackExam}
          onChange={onChangeInput}
          unit="점"
        />
      </ApplicationContent>
      <ApplicationContent grid={1} title="보호자명">
        <Input
          type="text"
          placeholder="보호자명"
          width={230}
          name="parent_name"
          value={userInfoValues.parent_name}
          onChange={onChangeInput}
        />
      </ApplicationContent>
      <ApplicationContent grid={1} title="본인 연락처" placeholder="‘-’ 문자를 제외한 숫자만 입력해주세요">
        <Input
          type="number"
          placeholder="본인 연락처"
          width={230}
          name="telephone_number"
          value={userInfoValues.telephone_number}
          onChange={onChangeInput}
        />
      </ApplicationContent>
      <ApplicationContent grid={1} title="보호자 연락처" placeholder="‘-’ 문자를 제외한 숫자만 입력해주세요">
        <Input
          type="number"
          placeholder="보호자 연락처"
          width={230}
          name="parent_tel"
          value={userInfoValues.parent_tel}
          onChange={onChangeInput}
        />
      </ApplicationContent>
    </_ApplicationWrapper>
  );
};

export default UserInfo;

const _ApplicationWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60rem;
  border-top: 1px solid ${theme.color.black600};
  border-bottom: 1px solid ${theme.color.black600};
  margin-top: 49px;
`;

const _ApplicationImg = styled.div`
  position: absolute;
  top: 15px;
  right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: 325px;
  background-color: ${theme.color.black50};
  border: 1px solid ${theme.color.black100};
  border-radius: 5px;
`;

const _ApplicationImgInput = styled.input`
  display: none;
`;
