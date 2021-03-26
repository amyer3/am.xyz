import React from 'react'
import routes from '../../routes/admin.routes'
import {Route} from 'react-router-dom'


import './Admin_sidebar.css'


export default function AdminSidebar(props){

    return (
        <div className="sidebar__admin">
            <div>
                {`Welcome, ` + props.name}
            </div>
            {routes.map((v, i) => {
                return (
                    <Route
                        to={v.layout + v.path}
                        className="sidebar-admin-item"
                        key={1000 + i}
                    />
                )
            })}
            <Route
                to="/admin/settings"
                className="sidebar-admin-item-setting"
            />
        </div>
    )
}