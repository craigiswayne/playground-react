import React, {ReactNode} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/home/home";
import NotFound from "./pages/not-found";
import ClickEvents from "./pages/click-events/click-events";

function App() {
    const routes = [
        {
            pathName: 'click-events',
            component: ClickEvents
        },
        {
            pathName: 'api-requester',
            component: NotFound
        },
        {
            pathName: 'only-numbers-form-validation-demo',
            component: NotFound
        },
        {
            pathName: 'custom-form-control-demo',
            component: NotFound
        },
        {
            pathName: 'material-tabs-demo',
            component: NotFound
        }
    ];
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home routes={routes}/>}></Route>
                    <Route path="/click-events" element={<ClickEvents/>}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
