import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Store from '@/components/Store'

export const routes = [
    {
        path: '/',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/store',
        name: 'store',
        component: Store
    }
];