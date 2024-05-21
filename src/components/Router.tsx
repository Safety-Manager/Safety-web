import Home from '@pages/Home';
import Join from '@pages/Join';
import Main from '@pages/Main';
import Mypage from '@pages/Mypage';
import Search from '@pages/Search';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/main" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<Navigate replace to="/main" />} />
      </Routes>
    </>
  );
}
