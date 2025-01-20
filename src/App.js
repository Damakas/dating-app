import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/MainPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { Provider } from "react-redux";
import { store } from "./store";

import RegisterForm from "./components/registerForm/RegisterForm";
import UserProfileMenu from "./components/userProfileMenu/UserProfileMenu";
import DatingProfiles from "./components/datingProfiles/DatingProfiles";
import ProfilesUsersInfo from "./components/profilesUsersInfo/ProfilesUsersInfo";


const theme = createTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif'
  },
  palette: {
    primary: {
      main: '#6E447B',
    },
    secondary: {
      main: '#42204E',
    },
    background: {
      default: '#230E2B',
    },
    text: {
      primary: '#8B5D9A',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxs: 320,
    },
  },
});

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
            }}>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/profileMenu" element={<UserProfileMenu />} />
              <Route path="/datingProfiles" element={<DatingProfiles />} />
              <Route path="/user/:id" element={<ProfilesUsersInfo />} />
            </Routes>
            <Footer />
          </Box>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;