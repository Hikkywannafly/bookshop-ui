
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/Router';

function App() {
  return (
    <>
      <Router>
        <div className=" min-h-screen flex flex-col relative">
          <Routes>
            {publicRoutes.map((route, index) => {
              console.log(index);
              return <Route key={index} path={route.path} element={< route.component />} />;
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
