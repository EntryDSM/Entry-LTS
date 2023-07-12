import React from 'react';
import EntryDeveloper from '../components/Main/EntryDeveloper';
import SchoolVideo from '../components/Main/SchoolVideo';
import MainFunction from '../components/Main/MainFuction';
import { Pc } from '../hooks/useResponsive';

const Main = () => {
  return (
    <>
      <MainFunction />
      <Pc>
        <SchoolVideo />
        {/* <EntryDeveloper /> */}
      </Pc>
    </>
  );
};

export default Main;
