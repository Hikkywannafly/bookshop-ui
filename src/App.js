import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './page/_404';
import { publicRoutes, dashboardRoutes, sessionRoutes, authRoutes } from '~/routers';
import Sidebar from '~/components/Dashboard/Sidebar';
import { useStateContext } from '~/hooks/useStateContext';
import Nav from '~/components/Dashboard/Nav';
import RequireAuth from './page/Auth/RequireAuth';
import HeaderHome from './components/HeaderHome';
import 'react-image-lightbox/style.css';
import { Toaster } from 'react-hot-toast';
import FooterPage from '~/components/FooterPage';
function App() {
  const { activeMenu } = useStateContext();
  // useEffect(() => {
  //   const currentThemeColor = localStorage.getItem('colorMode');
  //   const currentThemeMode = localStorage.getItem('themeMode');
  //   if (currentThemeColor && currentThemeMode) {
  //     setCurrentColor(currentThemeColor);
  //     setCurrentMode(currentThemeMode);
  //   }
  // }, [setCurrentColor, setCurrentMode]);

  const ALLOWED_ROLES = {
    'Admin': 'admin',
    'User': 'user',
  }
    ;
  return (
    <>
      <Router>
        <div className="min-h-screen flex relative ">
          <Routes>
            {/* public router */}

            {publicRoutes.map((route, index) => {
              return (

                <Route key={index} path={route.path} element={
                  <div className="flex flex-col w-full bg-gray-100 overflow-hidden ">
                    <HeaderHome />
                    <div className="text-sm"> <Toaster /></div>
                    <route.component />
                    <FooterPage />
                  </div>
                } />
              );
            })}

            {/* session router */}
            {sessionRoutes.map((route, index) => {
              return <Route key={index} path={route.path} element={
                <div className="flex flex-col w-full">
                  < route.component />
                </div>
              } />;
            })}

            {/* auth router */}
            {authRoutes.map((route, index) => {
              return <Route key={index} path={route.path} element={
                <div className="flex flex-col w-full">
                  < route.component />
                </div>
              } />;
            })}
            {/* admin router */}

            {dashboardRoutes.map((route, index) => {
              return <Route key={index} element={<RequireAuth allowedRoles={[ALLOWED_ROLES.Admin]} />}>
                <Route path={route.path} element={
                  <>
                    <div className={`${activeMenu ? `w-60 animate-fade-left2` : `w-0 -ml-6  duration-300 `} z-[100] fixed sidebar bg-white `}>
                      <Sidebar />
                    </div>
                    <div
                      className={activeMenu ? ' bg-main-bg min-h-screen md:ml-60 w-full  duration-300  ' : 'bg-main-bg w-full min-h-screen flex-2 duration-500 '}>
                      <div className=" static bg-main-bg w-full   ">
                        <Nav />
                      </div>
                      <div className=''>
                        < route.component />
                      </div>
                    </div>
                  </>
                } />
              </Route>
            })}
            {/* not found router */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
