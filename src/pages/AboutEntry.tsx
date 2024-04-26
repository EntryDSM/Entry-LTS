import WhatIsEntry from '@/components/AboutEntry/WhatIsEntry';
import DeveloperIntroduce from '@/components/AboutEntry/DeveloperIntroduce';
import styled from '@emotion/styled';

const AboutEntry = () => {
  return (
    <Main>
      <WhatIsEntry></WhatIsEntry>
      <div>
        <DeveloperIntroduce></DeveloperIntroduce>
      </div>
    </Main>
  );
};

const Main = styled.main`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 330px;
  & > div {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default AboutEntry;
