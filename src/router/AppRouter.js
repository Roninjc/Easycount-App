import React from 'react';
import { 
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const uid = null;

    // const dispatch = useDispatch();
    // const { checking, uid } = useSelector(state => state.auth);

    // useEffect(() => {
        
    //     dispatch( startChecking() );

    // }, [dispatch])

    // if ( checking ) {
    //     // return (<h5> Loading...</h5>);
    //     return (
    //         <div className="lontainer">
    //             <div className="loader">
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //             </div>
    //         </div>
    //     );
    //     // TODO: cambiar por un componente de loading
    // }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/login"
                        component={ LoginScreen }
                        isAuthenticated={ !!uid }
                    />
                    <PrivateRoute
                        path="/"
                        component={ DashboardRoutes }
                        isAuthenticated={ !!uid }
                    />

                </Switch>
            </div>
        </Router>
    )
}
