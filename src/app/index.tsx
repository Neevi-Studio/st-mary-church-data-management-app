"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Main({ loggedIn }: any) {
    const router = useRouter()
console.log(loggedIn ,'LOGGED IN')

    useEffect(() => {
        if (loggedIn) router.push("/dashboard")
        else router.push("login")
    }, [loggedIn, router])


    return (
        <div id="SpinnerLoadingContainer" className="fixed left-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-90 transition-all">
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    )
}

export default Main
