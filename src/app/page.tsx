import React from 'react'
import { cookies } from 'next/headers'
import Main from "./index"
function Home() {
    const token = cookies().get('token')

    return (
        <Main loggedIn={!!token} />
    )
}

export default Home
