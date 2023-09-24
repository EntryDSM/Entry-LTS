import { css } from '@emotion/react';

export const GlobalStyle = css`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-style: bold;
    src: local('Pretendard'), url('/Pretendard-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-style: medium;
    src: local('Pretendard'), url('/Pretendard-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: regular;
    src: local('Pretendard'), url('/Pretendard-Regular.woff2') format('woff2');
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    scroll-behavior: smooth;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    margin: 0;
  }
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }

  body {
    font-weight: 300;
    color: black;
    line-height: 1.2;
    font-family: 'Pretendard', sans-serif;
  }
  .normal {
    font-weight: 400;
  }
  .bold {
    font-weight: 700;
  }
  .bolder {
    font-weight: 800;
  }
  .light {
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
