import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './router';
import { Global } from '@emotion/react';
import { GlobalStyle } from './style/globalStyle.style';
import { AUTH_URL } from './constant/env';

function App() {
  console.log(AUTH_URL, process.env.REACT_SERVER_BASE_URL);

  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
