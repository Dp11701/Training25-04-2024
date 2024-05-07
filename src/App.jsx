import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { publicRoutes } from './routes'
import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { DefaultLayout } from './component/Layout'
function App() {
    return (
      <Router>  {/* Sử dụng đúng thành phần BrowserRouter */}
        <div className="App">
          <Routes>  {/* Đúng thành phần Routes */}
            {publicRoutes.map((route, index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    );
  }

export default App
