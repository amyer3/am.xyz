import { Route, Redirect } from 'react-router-dom'

const isAuth = localStorage.getItem("user")

export default PrivateRoute = ({Component: component, ...rest}) => (
    <Route {...rest}
    render = {(props) => (
        isAuth === true ?
        <Component {...props} />
        : <Redirect to="/login" />
    )}
    
    
    />
)