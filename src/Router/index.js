import Home from '../page/Home/';
import Login from '../page/Auth/Login';
import Register from '../page/Auth/Register';
import Test from '../page/Auth/Test';
import FogotPassword from '../page/Auth/FogotPassword';
const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/login', component: Login
    },
    {
        path: '/register', component: Register
    },
    {
        path: '/test', component: Test
    },
    {
        path: '/forgot-password', component: FogotPassword
    }


]
const privateRoutes = [


]

export { publicRoutes, privateRoutes }