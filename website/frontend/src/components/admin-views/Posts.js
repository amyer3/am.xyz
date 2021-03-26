import React from 'react'
import api_call from '../../util/api_manager'


export default function Posts(props) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="table-header" scope="col">Created</th>
                        <th className="table-header" scope="col">Title</th>
                        <th className="table-header" scope="col">Author</th>
                        <th className="table-header" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
    
}