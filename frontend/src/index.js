import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import './assets/global_styles.css'

const Home = React.lazy(() => import('./views/Home/Home'))
const Photo = React.lazy(() => import('./views/Photography/Photography'))
const Viz = React.lazy(() => import('./views/Viz/Viz'))
const About = React.lazy(() => import('./views/About/About'))
const Admin = React.lazy(() => import('./views/Admin/Admin'))
const Blog = React.lazy(() => <div></div>)
const BlogPage = React.lazy(() => import('./views/Blog/Blog'))


ReactDOM.render(
    <BrowserRouter>
        <React.Suspense fallback={<div></div>}>
            <Route path='/photo' name='Photography' render={props => <Photo {...props} />} />
            <Route path='/data' name='Data' render={props => <Viz {...props} />} />
            <Route path='/blog/:id' name="Blog Page" render={props => <BlogPage {...props} />} />
            <Route path='/blog' name='Blog' render={props => <Blog {...props} />} />
            <Route path='/me' name='About' render={props => <About {...props} />} />
            <Route path='/admin' name='Admin' render={props => <Admin {...props} />} />
            <Route exact path='/' name='Home' render={props => <Home {...props} />} />
        </React.Suspense>
    </BrowserRouter>
    , document.getElementById('root'));

