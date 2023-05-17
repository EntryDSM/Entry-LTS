import React from 'react';
import styled from '@emotion/styled';
import { Dropdown, Input, Radio, Text, theme } from '@team-entry/design_system';
import { UserInfoValue } from '@/pages/Application';
import ApplicationContent from '@/components/Application/ApplicationContent';
import { ArrayForDropdown } from '@/utils/ArrayForDropdown';
import { useInput } from '@/hooks/useInput';

interface UserTypeProps {
  userInfoValues: UserInfoValue;
  setUserInfoValues: React.Dispatch<React.SetStateAction<UserInfoValue>>;
  isBlackExam: boolean;
}

const UserInfo = ({ userInfoValues, setUserInfoValues, isBlackExam }: UserTypeProps) => {
  const { form: inputValues, setForm: setInputValues, onChange: changeInputValues } = useInput(userInfoValues);
  setUserInfoValues(inputValues);

  const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files, name } = e.target;
    if (files.length === 0) {
      return;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        setInputValues({
          ...userInfoValues,
          [name]: reader.result,
        });
      };
    }
  };

  return (
    <_ApplicationWrapper>
      <label>
        <_ApplicationImg>
          {userInfoValues.img ? (
            <Img src={userInfoValues.img} alt="userImg" />
          ) : (
            <Text color="black700" size="body3">
              원서 사진을 등록해주세요
            </Text>
          )}
        </_ApplicationImg>
        <_ApplicationImgInput type="file" accept=".png, .jpeg" name="img" onChange={saveImgFile} />
      </label>

      <ApplicationContent grid={1} title="이름" width={40}>
        <Input
          type="text"
          placeholder="이름"
          width={230}
          name="name"
          onChange={changeInputValues}
          value={inputValues.name}
        />
      </ApplicationContent>

      <ApplicationContent grid={2} title="성별" width={40}>
        <Radio label="남자" name="sex" value="MEN" onClick={changeInputValues} isChecked={inputValues.sex === 'MEN'} />
        <Radio
          label="여자"
          name="sex"
          value="WOMEN"
          onClick={changeInputValues}
          isChecked={inputValues.sex === 'WOMEN'}
        />
      </ApplicationContent>
      <ApplicationContent grid={3} title="생년월일" width={40}>
        <Dropdown
          className="birthday"
          width={85}
          onChange={(e) =>
            setInputValues({
              ...userInfoValues,
              birthday: e,
            })
          }
          options={ArrayForDropdown(2000, 2024)}
          unit="년"
        />
        <Dropdown
          className="birthday"
          width={85}
          onChange={(e) =>
            setInputValues({
              ...userInfoValues,
              birthday: e,
            })
          }
          options={ArrayForDropdown(1, 12)}
          unit="월"
        />
        <Dropdown
          className="birthday"
          width={85}
          onChange={(e) =>
            setInputValues({
              ...userInfoValues,
              birthday: e,
            })
          }
          options={ArrayForDropdown(1, 31)}
          unit="일"
        />
      </ApplicationContent>
      {isBlackExam && (
        <ApplicationContent grid={1} title="검정고시 평균" width={40}>
          <Input
            type="number"
            placeholder="검정고시 평균"
            width={230}
            name="blackExam"
            value={inputValues.blackExam}
            onChange={changeInputValues}
            unit="점"
          />
        </ApplicationContent>
      )}
      {!isBlackExam && (
        <>
          <ApplicationContent grid={1} title="보호자명" width={40}>
            <Input
              type="text"
              placeholder="보호자명"
              width={230}
              name="parent_name"
              value={inputValues.parent_name}
              onChange={changeInputValues}
            />
          </ApplicationContent>

          <ApplicationContent grid={1} title="본인 연락처" placeholder="‘-’ 문자를 제외한 숫자만 입력해주세요">
            <Input
              type="number"
              placeholder="본인 연락처"
              width={230}
              name="telephone_number"
              value={inputValues.telephone_number}
              onChange={changeInputValues}
            />
          </ApplicationContent>

          <ApplicationContent grid={1} title="보호자 연락처" placeholder="‘-’ 문자를 제외한 숫자만 입력해주세요">
            <Input
              type="number"
              placeholder="보호자 연락처"
              width={230}
              name="parent_tel"
              value={inputValues.parent_tel}
              onChange={changeInputValues}
            />
          </ApplicationContent>
        </>
      )}
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
  height: 310px;
  background-color: ${theme.color.black50};
  border: 1px solid ${theme.color.black100};
  border-radius: 5px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

const _ApplicationImgInput = styled.input`
  display: none;
`;
