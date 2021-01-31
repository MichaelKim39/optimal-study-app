import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Navigate = ({ condition, route, children }) => {
    const router = useRouter()

    useEffect(() => {
        condition && router.push(route)
    }, [])

    return (
        <>
        { !condition && children }
        </>
    )
}

export default Navigate

