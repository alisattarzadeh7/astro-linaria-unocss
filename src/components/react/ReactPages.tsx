/** @jsxImportSource react */
import React from 'react';
import { useRoutes, Link, BrowserRouter } from "react-router-dom";
const routeBase = '/client'


export const routes = [
    {
        path: routeBase,
        element: <Root />,
    },
    { path: routeBase + "/page1", element: <Page1 /> },
];

function GoToHome() {
    return <a href={routeBase + '/'}>Go To Home</a>
}

export default function ReactPages(props:{url:string}) {
    return (
       <div>

       </div>
    );
}

function Routes() {
    let element = useRoutes(routes);
    return element;
}

function Root() {
    return (
        <div>
            <h1>Root Page</h1>
            <ul>
                <li style={{color:'blue'}}>
                    <Link to={routes[1].path} >Go to Page 1</Link>
                </li>
            </ul>
        </div>
    );
}

function Page1() {
    return (
        <div>
            <h1>Page 1</h1>
            <ul>
                <li style={{color:'blue'}}>
                    <Link to={routes[0].path}>Got to Root</Link>
                </li>
            </ul>
        </div>
    );
}
