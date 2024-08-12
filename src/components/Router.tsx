import Home from '@pages/Home';
import Login from '@pages/Login';
import Main from '@pages/Main';
import Teams from '@pages/Teams';
import Information from '@pages/Information';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}
