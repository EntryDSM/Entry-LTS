import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import CustomerPage from './pages/Customer';
import CustomerDetailPage from './pages/CustomerDetail';
import GradePage from './pages/GradePage';
import GradeProgramPage from './pages/GradeProgramPage';
import Main from './pages/Main';
import Main2 from './pages/Main2';
import MyPage from './pages/MyPage';
import NoticePage from './pages/Notice';
import NoticeDetailPage from './pages/NoticeDetail';
import WriteCustomerPage from './pages/WriteCustomerPage';
import EditBannerPage from './pages/admin/EditBanner';
import NotFound from './pages/NotFound';
import WriteFAQPage from './pages/admin/WriteFAQ';
import WriteNoticePage from './pages/admin/WriteNotice';
import NewAdmissionPage from './pages/NewAdmission';
import AboutEntry from './pages/AboutEntry';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/main',
        element: <Main2 />,
      },
      {
        path: 'notice',
        children: [
          { index: true, element: <NoticePage /> },
          { path: ':id', element: <NoticeDetailPage /> },
          { path: 'write', element: <WriteNoticePage /> },
        ],
      },
      {
        path: 'customer',
        children: [
          { index: true, element: <CustomerPage /> },
          { path: ':id', element: <CustomerDetailPage /> },
          { path: 'write', element: <WriteCustomerPage /> },
          { path: 'writeFAQ', element: <WriteFAQPage /> },
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
      {
        path: 'about',
        element: <AboutEntry />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
