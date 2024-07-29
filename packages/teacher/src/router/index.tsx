import { Home } from '@/page/Home';
import { Library } from '@/page/Library';
import { ResumeDetail } from '@/page/ResumeDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.tsx';

export const Router = () => {
  const RedirectDiff = () => {
    window.location.replace(`${import.meta.env.VITE_APP_URL_MAIN}/error/404`);
    return null;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<ResumeDetail />} />
          <Route path="/library" element={<Library />} />
        </Route>
        <Route path="/*" element={<RedirectDiff />} />
      </Routes>
    </BrowserRouter>
  );
};
