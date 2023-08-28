import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from "./pages/not-found";
import Home from "./components/home/home";

function App() {
    const routes = [
        'api-requester',
        'only-numbers-form-validation-demo',
        'custom-form-control-demo',
        'material-tabs-demo',
    ];
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home links={routes}/>}></Route>
                    {
                        routes.map(route => (
                            <Route path={route} element={<NotFound/>} key={route}></Route>
                        ))
                    }
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
