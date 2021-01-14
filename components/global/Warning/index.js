import React from 'react'

import { Alert } from 'reactstrap'

const Warning = ({ className, text, }) => {
    return (
        <Alert color='danger' className={className}>
            Oops! {text}
        </Alert>
    )
}

export default Warning