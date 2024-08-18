import { TeacherLogin } from '@/modal/TeacherLogin.tsx';
import { Home } from '@/page/Home';
import { Library } from '@/page/Library';
import { MajorAdd } from '@/page/MajorAdd';
import { ResumeDetail } from '@/page/ResumeDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.tsx';
import { Layout2 } from './Layout2.tsx';
// import { FeedBackList } from '@/page/FeedBackList';

export const Router = () => {
  const RedirectDiff = () => {
    return null; // or any redirection logic if needed
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route */}
        <Route path='' element={<TeacherLogin />} />
        
        {/* Routes using Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="majoradd" element={<MajorAdd />} />
          {/* <Route path="feedbacklist" element={<FeedBackList />} /> */}
        </Route>
        
        {/* Routes using Layout2 with dynamic documentId */}
        <Route path="/document/student/:documentId" element={<Layout2 />}>
          <Route path="" element={<ResumeDetail />} />
        </Route>
        
        {/* Catch-All Route */}
        <Route path="/*" element={<RedirectDiff />} />
      </Routes>
    </BrowserRouter>
  );
};
