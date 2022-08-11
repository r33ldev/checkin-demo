import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import BattlePeerPage from './pages/Battlepeer';
import HomePage from './pages/Home';
import IntenchoPage from './pages/Intencho';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='battlepeer' element={<BattlePeerPage />} />
        <Route path='intencho' element={<IntenchoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

// cursor: url(imageCursor), auto !important;
