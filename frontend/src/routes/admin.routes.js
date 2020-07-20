import admin_view from '../components/admin-views'

export default admin_routes = [
    {
        name: "Dashboard",
        path: "/dash",
        layout: "/admin",
        component: {}
    },
    {
        //should return a list of all posts, with status
        name: "Posts",
        path: "/posts",
        layout: "/admin",
        component: admin_view.WritePost,
        sub_views: [
            {
                name: "Compose",
                path: "/compose",
                layout: "/admin",
                component: {}
            }
        ]
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