import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import Main from './components/main';
import MySkillPage from './components/MySkillPage';
import { lightTheme } from './components/Themes';
import WorkPage from './components/WorkPage';
import GlobalStyle from './globalStyles';
import { AnimatePresence } from 'framer-motion';
function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        {/* For framer-motion animation on page change */}
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skill" element={<MySkillPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
