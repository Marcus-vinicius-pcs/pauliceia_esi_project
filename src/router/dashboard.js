//layouts
import Dashboard from '@/views/layouts/dashboard'

//pages
import DashHome from '@/views/pages/dashboard/home'
import DashNewLayer from '@/views/pages/dashboard/newLayer'

const dashRoutes = [
    {
        path: '/dashboard',
        redirect: '/dashboard/home',
        component: Dashboard,
        meta: { auth: false }
    },
    {
        path: '/dashboard/home',
        name: 'Home',
        component: DashHome,
        meta: { auth: false }
    },
    {
      path: '/dashboard/newLayer',
      name: 'NewLayer',
      component: DashNewLayer,
      meta: { auth: false }
    }
]

export default dashRoutes;


