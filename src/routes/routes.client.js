import { BasicLayout, ClientLayout } from '../layouts'
import { Home, Hobies, Education, Work, Projects, Contact } from '../pages/client'


const routesClient = [
    {
        path: "/",
        layout: ClientLayout,
        component: Home,
        exact: true,
    },
    {
        path: "/hobies",
        layout: ClientLayout,
        component: Hobies,
        exact: true,
    },
    {
        path: "/education",
        layout: ClientLayout,
        component: Education,
        exact: true,
    },
    {
        path: "/work_experience",
        layout: ClientLayout,
        component: Work,
        exact: true,
    },
    {
        path: "/projects",
        layout: ClientLayout,
        component: Projects,
        exact: true,
    },
    {
        path: "/contact",
        layout: ClientLayout,
        component: Contact,
        exact: true,
    },

];

export default routesClient;