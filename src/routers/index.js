import Home from '../page/Home';
import Login from '../page/Auth/Login';
import Register from '../page/Auth/Register';
import Test from '../page/Auth/Test';
import FogotPassword from '../page/Auth/FogotPassword';
import VerifycationEmail from '~/page/Auth/VerifycationEmail';
import VerifyUrl from '~/page/Auth/VerifyUrl';
import Dashboard from '~/page/Dashboard/';
import Ecommerce from '~/page/Dashboard/Ecommerce';
import Orders from '~/page/Dashboard/Orders';
import Category from '~/page/Category/';
import Product from '~/page/Product/';
import ProductAuth from '~/page/Dashboard/Product/Product';
import AddProduct from '~/page/Dashboard/Product/AddProduct';
import Cart from '~/page/Cart'
const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/test', component: Test
    },
    {
        path: `/:slug.html`, component: Category
    },
    {
        path: `/:slug/:subSlug.html`, component: Category
    },
    {
        path: '/product/:slug.html', component: Product
    },
    {
        path: '/cart', component: Cart
    },

]
const authRoutes = [
    {
        path: '/login', component: Login
    },
    {
        path: '/register', component: Register
    },
    {
        path: '/forgot-password', component: FogotPassword
    },

]

const sessionRoutes = [
    {
        path: '/verify-email', component: VerifycationEmail
    },
    {
        path: '/verify-email-url', component: VerifyUrl
    },
]

const dashboardRoutes = [
    {
        path: '/auth/dashboard', component: Dashboard
    },
    {
        path: '/auth/ecommerce', component: Ecommerce
    },
    {
        path: '/auth/orders', component: Orders
    },
    // {
    //     path: '/auth/product/:slug.html', component: Product
    // },
    {
        path: '/auth/product/', component: ProductAuth
    },
    {
        path: '/auth/product/add-product', component: AddProduct
    },

]

export { publicRoutes, authRoutes, sessionRoutes, dashboardRoutes }