import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from '../src/components/Home/pages';
import BattlePeerPage from '../src/components/Battlepeer/pages'
import IntenchoPage from '../src/components/Intencho/pages'

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
