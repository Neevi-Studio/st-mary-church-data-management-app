'use client'
import React, { ReactNode } from 'react'
import SideBar from './SideBar'
import Header from './Header'
import { NovuProvider } from "@novu/notification-center";
function layout({ children }: { children: ReactNode }) {
    return (
        <NovuProvider subscriberId={'65dec2278b742c7312e4490c'} applicationIdentifier={'D7QxJHaHU3sS'}>
            {/* <NovuProvider subscriberId={user.username} applicationIdentifier={process.env.NEXT_PUBLIC_NOVU_APP_ID!}> */}
            <div className="flex h-screen overflow-hidden">
                <SideBar />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header />
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-white">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </NovuProvider>
    )
}

export default layout