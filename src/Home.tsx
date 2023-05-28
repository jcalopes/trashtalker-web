import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContainerPage from './components/container/ContainerPage'
import HomePage from './components/Homepage'
import LoginPage from './components/auth/LoginPage'

function Home() {
    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/login"
                element={<LoginPage />}
            />
            <Route
                path="/container"
                element={<ContainerPage />}
            />
        </Routes>
    )
}

export default Home
