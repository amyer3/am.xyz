import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import Admin_Sidebar from '../../components/admin-sidebar/Admin_sidebar'
import Admin_View_Routes from '../../routes/admin.routes'


export default function Admin(props) {
    document.title= 'Admin | am.xyz'
    
    const admin_views = Admin_View_Routes.map((v, i) => {
        return (
            <Route path={v.layout + v.path} component={v.component}/>
        )
})


    return (
        <div>
            <div className="container-sidebar">
                <Admin_Sidebar
                    name = "Alex"
                />

            </div>
            <div className="container-views">
                <Switch>
                    {admin_views}
                    <Redirect from="*" to="/admin/dashboard/"/>
                </Switch>
                
            </div>
        </div>
    )
}