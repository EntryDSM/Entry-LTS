import WhatIsEntry from '@/components/AboutEntry/WhatIsEntry';
import DeveloperIntroduce from '@/components/AboutEntry/DeveloperIntroduce';
import styled from '@emotion/styled';
import MediumBlog from '@/components/AboutEntry/MediumBlog';

const AboutEntry = () => {
  return (
    <Main>
      <WhatIsEntry />
      <div>
        <DeveloperIntroduce />
      </div>
      {/* <div>
        <MediumBlog />
      </div> */}
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 60px 100px 60px;
  }
`;

export default AboutEntry;
