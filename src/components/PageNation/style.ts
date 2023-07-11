import styled from '@emotion/styled';

export const _Pages = styled.div``;

export const _Arrow = styled.img<{ rotate?: number }>`
  transform: rotate(${(props) => props.rotate}deg);
  width: 20px;
  height: 20px;
`;
