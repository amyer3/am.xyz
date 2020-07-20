import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import Admin_Sidebar from '../../components/admin-sidebar/Admin_sidebar'
import Admin_Views from '../../routes/admin.routes'


export default function Admin(props) {
    
    const views = Admin_Views.map((v, i) => {
        return (
            <Route path={v.layout+v.path}/>
        )
})


    return (
        <div>
            <div className="container-sidebar">

            </div>
            <div className="container-views">
                
            </div>
        </div>
    )
}