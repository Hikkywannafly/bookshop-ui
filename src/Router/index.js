import Home from '../page/Home/';
import Login from '../page/Auth/Login';
import Register from '../page/Auth/Register';
import Test from '../page/Auth/Test';
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
    }


]
const privateRoutes = [


]

export { publicRoutes, privateRoutes }