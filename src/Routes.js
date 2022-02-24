import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Loader from './component/Loader/Loader';
import NavMotion from './layout/NavMotion';
import MainLayout from './layout/MainLayout';
import MinimalLayout from './layout/MinimalLayout';

const Login = lazy(() => import('./views/Login'));
const DashboardDefault = lazy(() => import('./views/Dashboard/Default'));
const DashboardDefault1 = lazy(() => import('./views/Dashboard/Default1'));
const DashboardDefault2 = lazy(() => import('./views/Dashboard/Default2'));

const Routes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <Redirect exact from="/" to="/user" />
                    <Redirect exact from="/" to="/post" />
                    <Redirect exact from="/" to="/profile" />
                    <Route path={[]}>
                        <MinimalLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion></NavMotion>
                            </Switch>
                        </MinimalLayout>
                    </Route>
                    <Route
                        path={[
                            '/login',
                            '/user',
                            '/post',
                            '/profile',
                        ]}
                    >
                        <MainLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion>
                                    <Route path="/login" component={Login}/>
                                    <Route path="/user" component={DashboardDefault} />
                                    <Route path="/post" component={DashboardDefault1} />
                                    <Route path="/profile" component={DashboardDefault2} />
                                </NavMotion>
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
            </Suspense>
        </AnimatePresence>
    );
};

export default Routes;
