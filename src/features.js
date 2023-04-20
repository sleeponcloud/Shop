import React from 'react';
// import Routing from './page/Routing.jsx';
import UnAuth from './UnAuth.jsx';
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('./page/Home.jsx'));

const routingFeautre = [
    {
        path: '/',
        element: <Navigate to='home' replace />,
    },
    {
        element: <UnAuth />,
        children: [
            { path: 'home', element: <Home /> },
        ],
    },
    // {
    //     element: <Routing />,
    //     children: [
    //         { path: 'dashboard', element: <Dashboard /> },
    //         { path: 'change-pwd', element: <ChangePwd /> },
    //         { path: 'change-user', element: <ChangeUser /> },
    //         { path: 'abnormal-event', element: <AbnormalEvent /> },
    //         { path: 'inspection-report', element: <InspectionReport /> },
    //         { path: 'system-instruction', element: <SystemInstr /> },
    //     ],
    // },
];

export {
    routingFeautre,
};
