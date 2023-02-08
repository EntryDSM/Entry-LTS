import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CustomerPage from './pages/Customer';
import CustomerDetailPage from './pages/CustomerDetail';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import NewAdmissionPage from './pages/NewAdmissionPage';
import NoticePage from './pages/Notice';
import WriteCustomerPage from './pages/WriteCustomerPage';
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/customer">
            <Route index element={<CustomerPage />} />
            <Route path="write" element={<WriteCustomerPage />} />
            <Route path=":id" element={<CustomerDetailPage />} />
          </Route>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/admission" element={<NewAdmissionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
