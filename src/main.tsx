import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Login from './pages/Login.tsx';
import AuthContextProvider from './contexts/AuthContext';
import Home from './pages/Home.tsx';
import SignUP from './pages/SignUp.tsx';
import Error from './pages/Error.tsx';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUP />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
