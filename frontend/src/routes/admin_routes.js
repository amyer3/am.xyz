import admin_view from '../components/admin-views'

export default admin_routes = [
    {
        name: "Dashboard",
        path: "/dash",
        layout: "/admin",
        component: {}
    },
    {
        name: "Posts",
        path: "/posts",
        layout: "/admin",
        component: {}
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