  import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CustomerPage from './pages/Customer';
import CustomerDetailPage from './pages/CustomerDetail';
import GradePage from './pages/GradePage';
import GradeProgramPage from './pages/GradeProgramPage';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import NewAdmissionPage from './pages/NewAdmissionPage';
import NoticePage from './pages/Notice';
import NoticeDetailPage from './pages/NoticeDetail';
import WriteCustomerPage from './pages/WriteCustomerPage';
import EditBannerPage from './pages/admin/EditBanner';
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/notice">
            <Route index element={<NoticePage />} />
            <Route path=":id" element={<NoticeDetailPage />} />
          </Route>
          <Route path="/customer">
            <Route index element={<CustomerPage />} />
            <Route path="write" element={<WriteCustomerPage />} />
            <Route path=":id" element={<CustomerDetailPage />} />
          </Route>
          <Route path="/grade" element={<GradePage />} />
          <Route path="/gradeProgram" element={<GradeProgramPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/admission" element={<NewAdmissionPage />} />
          <Route path="/edit" element={<EditBannerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'notice',
        children: [
          { index: true, element: <NoticePage /> },
          { path: ':id', element: <NoticeDetailPage /> },
        ],
      },
      {
        path: 'customer',
        children: [
          { index: true, element: <CustomerPage /> },
          { path: ':id', element: <CustomerDetailPage /> },
          { path: 'write', element: <WriteCustomerPage /> },
        ],
      },
      {
        path: 'grade',
        element: <GradePage />,
      },
      {
        path: 'gradeProgram',
        element: <GradeProgramPage />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'admission',
        element: <NewAdmissionPage />,
      },
      {
        path: 'edit',
        element: <EditBannerPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
