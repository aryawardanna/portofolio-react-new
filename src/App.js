import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import Main from './components/main';
import MySkillPage from './components/MySkillPage';
import { lightTheme } from './components/Themes';
import WorkPage from './components/WorkPage';
import GlobalStyle from './globalStyles';
function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/work" element={<WorkPage />} />
          <Route exact path="/skill" element={<MySkillPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
