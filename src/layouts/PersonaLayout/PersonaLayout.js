import Header from 'components/common/Header/Header'
import React from 'react'

const PersonaLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default PersonaLayout