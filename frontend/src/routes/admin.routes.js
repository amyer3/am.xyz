import admin_view from '../components/admin-views'
import Dashboard from '../components/admin-views/Dashboard'
import Compose from '../components/admin-views/Compose'

const admin_routes = [
    {
        name: "Dashboard",
        path: "/dashboard",
        layout: "/admin",
        component: Dashboard
    },
    {
        //should return a list of all posts, with status
        name: "Posts",
        path: "/posts",
        layout: "/admin",
        component: {},
        sub_views: [
            
        ]
    },
    {
        name: "Compose",
        path: "/compose",
        layout: "/admin",
        component: Compose
    },
    {
        name: "Photos",
        path: "/photos",
        layout: "/admin",
        component: {}
    },
    {
        name: "Datasets",
        path: "/datasets",
        layout: "/admin",
        component: {}
    },
    {
        name: "Settings",
        path: "/settings",
        layout: "/admin",
        component: {}
    },
]

/**
 template for routes

 {
 name: "",
 path: "",
 layout:"",
 component: ,
 }

 */
export default admin_routes