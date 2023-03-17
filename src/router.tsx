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

export default Router;
