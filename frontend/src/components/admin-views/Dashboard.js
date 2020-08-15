import React from 'react'
import d3 from 'd3'
import './Dashboard.css'

export default function Dashboard(props) {
    
    return (
        <div>
            <div className="container-grid-dash">
                {/* top row */}
                <div className="dash-chart-stacked-bar">
                    {/* stacked bar of total hits by type */}
                    <div></div>
                </div>
                <div className="dash-chart-line">

                </div>
                <div className="dash-chart-line">

                </div>
                <div className="dash-chart-pie">

                </div>
                {/* bottom row */}
                <div className="dash-chart-map">

                </div>

            </div>
        </div>
    )
}
