
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './page/_404';
import { publicRoutes } from '~/Router';
import { privateRoutes } from '~/Router';
function App() {
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  // window.addEventListener("keydown", (e) => {
  //   if (e.keyCode === 123) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 74) e.preventDefault();
  // });
  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col relative">
          <Routes>
            {publicRoutes.map((route, index) => {

              return <Route key={index} path={route.path} element={< route.component />} />;
            })}

            {privateRoutes.map((route, index) => {
              return <Route key={index} path={route.path} element={< route.component />} />;
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
