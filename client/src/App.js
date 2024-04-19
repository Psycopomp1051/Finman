import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from '@mui/material'
import LandingPage from "./components/LandingPage";
// import LoginSignupPage from "./components/LoginSignupPage";
import { Routes, Route } from 'react-router-dom'
import Stock from "./components/Stock/Stock";
import News from "./components/News/News";
import Chat from './components/Chat/Chat'
import Crypto from "./components/Crypto";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register"
import AuthRoutes from "./components/Auth/AuthRoute";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      {/* <BrowserRouter> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/news" element={<News />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/crypto" element={<Crypto />} />
        </Routes>
      </ThemeProvider>
      {/* </BrowserRouter> */}
    </ColorModeContext.Provider>
  );
}

export default App;
