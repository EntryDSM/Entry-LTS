import { AuthorityColorType } from '@/hooks/useAuthority';
import styled from '@emotion/styled';
import { theme } from '@team-entry/design_system';

interface ICurrentDate {
  now: boolean;
}

export const _Progress = styled.div`
  display: flex;
  flex-direction: column;
`;

export const _ProgressCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 45rem;
  height: 5rem;
`;

export const _ProgressCard = styled.div<ICurrentDate & { authorityColor: AuthorityColorType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 9.5rem;
  height: 4.5rem;
  border-radius: 5px;
  background-color: ${({ now, authorityColor }) =>
    now ? theme.color[authorityColor + '500'] : theme.color[authorityColor + '100']};
`;

export const _ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

export const _ProgressStep = styled.div<ICurrentDate>`
  width: 10.2rem;
  height: 4px;
  background-color: ${({ now }) => (now ? theme.color.green500 : theme.color.black100)};
`;

export const _ProgressCircle = styled.div<ICurrentDate>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ now }) => (now ? theme.color.green500 : theme.color.black100)};
`;

export const _Overflow = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
