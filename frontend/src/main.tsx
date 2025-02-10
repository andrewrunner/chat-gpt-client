import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router";

import App from './pages/App.tsx'
import SignInPage from "./pages/sign-in.page.tsx";
import SignUpPage from "./pages/sign-up.page.tsx";
import ChatPage from "./pages/chat.page.tsx";
import NotFoundPage from "./pages/not-found.page.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="sign-in" element={<SignInPage />} />
              <Route path="sign-up" element={<SignUpPage />} />
              <Route path="chat" element={<ChatPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Router>
  </StrictMode>,
)
