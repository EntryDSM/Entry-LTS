import { createBrowserRouter } from 'react-router-dom';
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
import ApplicationPage from './pages/Application';
import NotFound from './pages/NotFound';

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
      {
        path: 'application',
        element: <ApplicationPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
