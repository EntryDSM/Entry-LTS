import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CustomerPage from './pages/Customer';
import CustomerDetailPage from './pages/CustomerDetail';
import MyPage from './pages/MyPage';
import NoticePage from './pages/Notice';
import WriteCustomerPage from './pages/WriteCustomerPage';
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element="" />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/customer">
            <Route index element={<CustomerPage />} />
            <Route path="write" element={<WriteCustomerPage />} />
            <Route path=":id" element={<CustomerDetailPage />} />
          </Route>
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
