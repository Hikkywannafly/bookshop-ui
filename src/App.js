import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './page/_404';
import { publicRoutes, privateRoutes, dashboardRoutes } from '~/router';
import Header from '~/components/Header';
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Dashboard/Sidebar';
import { useStateContext } from '~/hook/useStateContext';
import Nav from '~/components/Dashboard/Nav';
function App() {
  const { setCurrentColor, setCurrentMode, activeMenu } = useStateContext();
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  // window.addEventListener("keydown", (e) => {
  //   if (e.keyCode === 123) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 74) e.preventDefault();
  // });
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  return (
    <>
      <Router>
        <div className="min-h-screen flex  relative ">
          <Routes>

            {publicRoutes.map((route, index) => {

              return (
                <Route key={index} path={route.path} element={
                  <>
                    <div className="flex flex-col w-full bg-gray-100 overflow-hidden ">
                      <Header />
                      <Navbar />
                      <route.component />
                    </div>
                  </>
                } />
              );

            })}

            {privateRoutes.map((route, index) => {
              return <Route key={index} path={route.path} element={
                <div className="flex flex-col w-full">
                  < route.component />
                </div>
              } />;
            })}

            {dashboardRoutes.map((route, index) => {
              return <Route key={index} path={route.path} element={
                <>
                  {activeMenu ? (
                    <div className=" w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                      <Sidebar />
                    </div>
                  ) : (
                    <div className=" w-0 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                      <Sidebar />
                    </div>
                  )}

                  <div
                    className={
                      activeMenu
                        ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full   '
                        : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                    }
                  >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full   ">
                      <Nav />
                    </div>
                    <div>
                      < route.component />
                    </div>
                  </div>
                </>

              } />;
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
