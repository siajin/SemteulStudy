import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './Main';
import Login from './Login';
import Join from './Join';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/join" element={<Join />}></Route>
				</Routes>
			</BrowserRouter>
  </React.StrictMode>
);