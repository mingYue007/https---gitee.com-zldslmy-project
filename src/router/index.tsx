import list from "./router";
import { Suspense } from 'react';
import { Router, RouterProvider } from 'react-router-dom';

export default function Index() {
    return (
        <Suspense>
            <RouterProvider>
                <Router location={''} navigator={<></>}></Router>
            </RouterProvider>
        </Suspense>
    )
}
