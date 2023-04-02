import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';
import ApplicationTitle from '@/components/application/ApplicationTitle';
import ApplicationContent from '@/components/application/ApplicationContent';
import ApplicationFooter from '@/components/application/ApplicationFooter';

interface RadioProps {
  label: string;
  name: string;
  value: string;
}

interface InputProps {
  placeholder: string;
  name: string;
  unit?: string;
  value: string;
}

export interface ElementProps {
  id: number;
  grid: number;
  width?: number;
  title: string;
  radio?: RadioProps[];
  input?: InputProps;
  placeholder?: string;
  valueForRadio?: string;
  required?: boolean;
}

const Application = () => {
  const title = ['지원자 전형 구분', '지원자 인적사항'];
  const [element, setElement] = useState<ElementProps[][]>([
    [
      {
        id: 1,
        grid: 4,
        title: '전형 선택',
        radio: [
          { label: '일반', name: 'application_type', value: 'COMMON' },
          { label: '마이스터 인재', name: 'application_type', value: 'MEISTER' },
          { label: '?', name: 'application_type', value: 'SOCIAL?,?' },
        ],
        valueForRadio: '',
      },
      {
        id: 2,
        grid: 3,
        title: '지역 선택',
        radio: [
          { label: '대전', name: 'is_daejeon', value: 'true' },
          { label: '전국', name: 'is_daejeon', value: 'false' },
        ],
        valueForRadio: '',
      },
      {
        id: 3,
        grid: 4,
        title: '졸업 구분',
        radio: [
          { label: '졸업 예정', name: 'educational_status', value: 'PROSPECTIVE_GRADUATE' },
          { label: '졸업', name: 'educational_status', value: 'GRADUATE' },
        ],
        valueForRadio: '',
      },
      {
        id: 4,
        grid: 3,
        title: '졸업 연월',
        radio: [
          { label: '연도 체크박스', name: 'graduated_at', value: 'year' },
          { label: '달 체크박스', name: 'graduated_at', value: 'month' },
        ],
        placeholder: '졸업 예정자의 경우 졸업 예정월만 선택해주세요',
        valueForRadio: '',
      },
      {
        id: 5,
        grid: 3,
        title: '특기 사항',
        radio: [
          { label: '국가 유공자', name: 'application_remark', value: '국가유공자' },
          { label: '특례 입학 대상', name: 'application_remark', value: '특례입학대상' },
        ],
        placeholder: '특기사항에 해당하시는 항목이 있으면 체크해주세요',
        valueForRadio: '',
        required: false,
      },
    ],
    //
    [
      { id: 1, grid: 2, width: 40, title: '이름', input: { placeholder: '이름', name: 'name', value: '' } },
      {
        id: 2,
        grid: 3,
        width: 40,
        title: '성별',
        radio: [
          { label: '남자', name: 'sex', value: 'MALE' },
          { label: '여자', name: 'sex', value: 'FEMALE' },
        ],
        valueForRadio: '',
      },
      {
        id: 3,
        grid: 4,
        width: 40,
        title: '생년월일',
        radio: [
          { label: '년', name: 'birthday', value: 'year' },
          { label: '월', name: 'birthday', value: 'month' },
          { label: '일', name: 'birthday', value: 'date' },
        ],
        valueForRadio: '',
      },
      {
        id: 4,
        grid: 2,
        width: 40,
        title: '검정고시평균',
        input: { placeholder: '검정고시 평균', unit: '점', name: 'asdf', value: '' },
      },
      { id: 5, grid: 2, title: '보호자명', input: { placeholder: '보호자명', name: 'parent_name', value: '' } },
      {
        id: 6,
        grid: 2,
        title: '본인 연락처',
        input: { placeholder: '보호자명', name: 'telephone_number', value: '' },
        placeholder: '‘-’ 문자를 제외한 숫자만 입력해주세요',
      },
      {
        id: 7,
        grid: 2,
        title: '보호자 연락처',
        input: { placeholder: '보호자 연락처', name: 'parent_number', value: '' },
        placeholder: '‘-’ 문자를 제외한 숫자만 입력해주세요',
      },
    ],
  ]);
  const [current, setCurrent] = useState<number>(0);
  return (
    <_Container>
      <_Wrapper>
        {
          <>
            <ApplicationTitle title={title[current]} />
            <_ApplicationWrapper>
              {current === 1 && (
                <_UserImg>
                  <Text size="body3" color="black700">
                    원서 사진을 등록해주세요
                  </Text>
                </_UserImg>
              )}
              {element[current].map((res) => {
                const { id, grid, width, title, radio, input, placeholder, valueForRadio, required } = res;
                return (
                  <ApplicationContent
                    key={id}
                    id={id}
                    grid={grid}
                    width={width}
                    title={title}
                    radio={radio}
                    input={input}
                    current={current}
                    element={element}
                    setElement={setElement}
                    placeholder={placeholder}
                    valueForRadio={valueForRadio}
                    required={required}
                  />
                );
              })}
            </_ApplicationWrapper>
          </>
        }
        <ApplicationFooter element={element} current={current} setCurrent={setCurrent} />
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60rem;
  border-top: 1px solid ${theme.color.black600};
  border-bottom: 1px solid ${theme.color.black600};
  margin-top: 49px;
`;

const _UserImg = styled.div`
  position: absolute;
  top: 10px;
  right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 330px;
  background-color: ${theme.color.black100};
  border-radius: 5px;
  z-index: 100;
`;
