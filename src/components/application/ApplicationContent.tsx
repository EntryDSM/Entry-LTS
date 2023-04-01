import React from 'react';
import styled from '@emotion/styled';
import { Input, Text, theme, Radio } from '@team-entry/design_system';
import { ElementProps } from '@/pages/Application';

interface ApplicationContentProps extends ElementProps {
  current: number;
  element: ElementProps[][];
  setElement: React.Dispatch<React.SetStateAction<ElementProps[][]>>;
}

const ApplicationContent = ({
  id,
  grid,
  title,
  radio,
  input,
  current,
  element,
  setElement,
  placeholder,
  valueForRadio,
  required = true,
}: ApplicationContentProps) => {
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const findIndex = element[current].findIndex((item) => item.id === id);
    let copiedElement = [...element];
    copiedElement[current][findIndex].input.value = value;
    setElement(copiedElement);
  };
  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const findIndex = element[current].findIndex((item) => item.id === id);
    let copiedElement = [...element];
    copiedElement[current][findIndex].valueForRadio = value;
    setElement(copiedElement);
  };
  return (
    <_ApplicationContent>
      <_ApplicationGridbox grid={grid}>
        <_ApplicationTitle color={required ? 'black900' : 'black600'} size="body2">
          {title}
        </_ApplicationTitle>
        {radio &&
          radio.map((radio) => (
            <Radio
              key={radio.value}
              isChecked={valueForRadio === radio.value}
              label={radio.label}
              name={radio.name}
              value={radio.value}
              onChange={onChangeRadio}
            />
          ))}
        {input && (
          <Input
            width={250}
            type="text"
            placeholder={input.placeholder}
            unit={input.unit}
            name={input.name}
            value={input.value}
            onChange={onChangeInput}
          />
        )}
      </_ApplicationGridbox>
      {placeholder && (
        <Text color="black600" size="body6">
          {placeholder}
        </Text>
      )}
    </_ApplicationContent>
  );
};

export default ApplicationContent;

const _ApplicationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 85px;
  padding: 0px 32px 0px 16px;
  border-bottom: 1px solid ${theme.color.black100};
  &:last-child {
    border-bottom: none;
  }
`;

const _ApplicationGridbox = styled.div<{ grid: number }>`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(${({ grid }) => grid}, minmax(170px, auto));
`;

const _ApplicationTitle = styled(Text)`
  justify-self: center;
  margin-right: 20px;
`;
