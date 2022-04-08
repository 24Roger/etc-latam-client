import React from 'react'
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import { Forgot } from '../../../components/Views/Users/Forgot';
import { Home } from '../../../components/Views/Home/Home';
import { Login } from '../../../components/Views/Users/Login';
import { Register } from '../../../components/Views/Users/Register';

const AppRouter= () => {
    return (
        <div>
             <Routes>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={Forgot} />
                 <Route path='/Register' component={Register} />
                 <Route path='/Home' component={Home} />
                 <Route path='/' component={Login} />

            </Switch>
        </Routes>

        </div>
    )
}

export default AppRouter;
