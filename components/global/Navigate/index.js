import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Navigate = ({ condition = true, route, children, serverRender = false }) => {
    const router = useRouter()

    useEffect(() => {
        condition && serverRender ? window.location.pathname = route : router.push(route)
    }, [])

    return (        <>
{!condition && children}</>
    )
}

export default Navigate
