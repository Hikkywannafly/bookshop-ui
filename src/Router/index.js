import Home from '../page/Home/';
import Login from '../page/Auth/Login';
import Register from '../page/Auth/Register';

const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/login', component: Login
    },
    {
        path: '/register', component: Register
    }


]
const privateRoutes = [


]

export { publicRoutes, privateRoutes }