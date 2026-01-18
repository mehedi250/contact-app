import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

function RootLayout() {
    return (
        <>
            <Navbar />
            <main className="py-5">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default RootLayout