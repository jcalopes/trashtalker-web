import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContainerPage from './components/pages/container/ContainerPage';
import LoginPage from './components/pages/auth/LoginPage';
import HomePage from './components/pages/home/Homepage';

function Home() {
    return (
        <Routes>
            <Route
                path="/contain"
                element={<HomePage />}
            />
            <Route
                path="/login"
                element={<LoginPage />}
            />

            <Route
                path="/"
                element={<ContainerPage />}
            />
        </Routes>
    );
}

export default Home;
