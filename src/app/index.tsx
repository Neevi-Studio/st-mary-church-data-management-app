"use client"
import React from 'react'

function FullScreenLoader() {


    return (
        <div id="SpinnerLoadingContainer" className="fixed left-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-50 transition-all">
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    )
}

export default FullScreenLoader
