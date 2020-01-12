import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import './assets/shim.css'

const Home = React.lazy(() => import('./views/Home'))
const Photo = React.lazy(() => import('./views/Photography'))


ReactDOM.render(
<BrowserRouter>
    <React.Suspense fallback={<div></div>}>
        <Route path='/p' name='Photography' render={props => <Photo {...props}/>} />
        <Route path='/m' name='Map' render={props => <div/>} />
        <Route exact path='/' name='Home' render={props => <Home {...props}/>} />
    </React.Suspense>
</BrowserRouter>
    , document.getElementById('root'));

