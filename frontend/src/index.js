import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import './assets/shim.css'

const Home = React.lazy(() => import('./views/Home/Home'))
const Photo = React.lazy(() => import('./views/Photography/Photography'))
const Viz = React.lazy(() => import('./views/Viz/Viz'))
const About = React.lazy(() => import('./views/About/About'))


ReactDOM.render(
<BrowserRouter>
    <React.Suspense fallback={<div></div>}>
        <Route path='/p' name='Photography' render={props => <Photo {...props}/>} />
        <Route path='/d' name='Data' render={props => <Viz {...props}/>} />
        <Route path='/a' name='About' render={props => <About {...props}/>} />
        <Route exact path='/' name='Home' render={props => <Home {...props}/>} />
    </React.Suspense>
</BrowserRouter>
    , document.getElementById('root'));

