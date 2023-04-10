import { UserInfoValue } from '@/pages/Application';
import styled from '@emotion/styled';
import React from 'react';
import ApplicationContent from './ApplicationContent';
import { Input, Radio, Text, theme } from '@team-entry/design_system';

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
    let onlyNumber = value.replace(/[^0-9]/g, '');
    setUserInfoValues({
      ...userInfoValues,
      [name]: onlyNumber,
    });
  };
  const userInfoItems = [
    [
      {
        type: 'text',
        placeholder: '이름',
        width: 230,
        name: 'name',
        value: userInfoValues.name,
        onChange: onChangeInput,
      },
    ],
    [
      { label: '남자', name: 'sex', value: 'MEN', onChange: onChangeRadio, isChecked: userInfoValues.sex === 'MEN' },
      {
        label: '여자',
        name: 'sex',
        value: 'WOMEN',
        onChange: onChangeRadio,
        isChecked: userInfoValues.sex === 'WOMEN',
      },
    ],
    [
      {
        label: '년',
        name: 'birthday',
        value: 'year',
        onChange: onChangeRadio,
        isChecked: userInfoValues.birthday === 'year',
      },
      {
        label: '월',
        name: 'birthday',
        value: 'month',
        onChange: onChangeRadio,
        isChecked: userInfoValues.birthday === 'month',
      },
      {
        label: '일',
        name: 'birthday',
        value: 'day',
        onChange: onChangeRadio,
        isChecked: userInfoValues.birthday === 'day',
      },
    ],
    [
      {
        type: 'text',
        placeholder: '검정고시 평균',
        width: 230,
        name: 'name',
        value: userInfoValues.blackExam,
        onChange: onChangeInput,
        unit: '점',
      },
    ],
    [
      {
        type: 'text',
        placeholder: '보호자명',
        width: 230,
        name: 'name',
        value: userInfoValues.parent_name,
        onChange: onChangeInput,
      },
    ],
    [
      {
        type: 'text',
        placeholder: '본인 연락처',
        width: 230,
        name: 'name',
        value: userInfoValues.telephone_number,
        onChange: onChangeInput,
      },
    ],
    [
      {
        type: 'text',
        placeholder: '보호자 연락처',
        width: 230,
        name: 'name',
        value: userInfoValues.parent_tel,
        onChange: onChangeInput,
      },
    ],
  ];

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
        {userInfoItems[0].map((item) => (
          <Input
            type={item.type}
            placeholder={item.placeholder}
            width={item.width}
            name={item.name}
            value={item.value}
            onChange={item.onChange}
          />
        ))}
      </ApplicationContent>
      <ApplicationContent grid={2} title="성별" width={40}>
        {userInfoItems[1].map((item) => (
          <Radio
            key={item.value}
            label={item.label}
            name={item.name}
            value={item.value}
            onChange={item.onChange}
            isChecked={item.isCheck}
          />
        ))}
      </ApplicationContent>
      <ApplicationContent grid={3} title="생년월일" width={40}>
        {userInfoItems[2].map((item) => (
          <Radio
            key={item.value}
            label={item.label}
            name={item.name}
            value={item.value}
            onChange={item.onChange}
            isChecked={item.isCheck}
          />
        ))}
      </ApplicationContent>
      <ApplicationContent grid={1} title="검정고시 평균" width={40}>
        {userInfoItems[3].map((item) => (
          <Input
            type={item.type}
            placeholder={item.placeholder}
            width={item.width}
            name={item.name}
            value={item.value}
            onChange={item.onChange}
            unit={item.unit}
          />
        ))}
      </ApplicationContent>
      <ApplicationContent grid={1} title="보호자명">
        {userInfoItems[4].map((item) => (
          <Input
            type={item.type}
            placeholder={item.placeholder}
            width={item.width}
            name={item.name}
            value={item.value}
            onChange={item.onChange}
          />
        ))}
      </ApplicationContent>
      <ApplicationContent grid={1} title="본인 연락처" placeholder="‘-’ 문자를 제외한 숫자만 입력해주세요">
        {userInfoItems[5].map((item) => (
          <Input
            type={item.type}
            placeholder={item.placeholder}
            width={item.width}
            name={item.name}
            value={item.value}
            onChange={item.onChange}
          />
        ))}
      </ApplicationContent>
      <ApplicationContent grid={1} title="보호자 연락처" placeholder="‘-’ 문자를 제외한 숫자만 입력해주세요">
        {userInfoItems[6].map((item) => (
          <Input
            type={item.type}
            placeholder={item.placeholder}
            width={item.width}
            name={item.name}
            value={item.value}
            onChange={item.onChange}
          />
        ))}
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
