import React from 'react'

function Layout({ children }) {
    return (
        <div>
            <h1>Nav bar</h1>
            {children}
        </div>
    )
}

export default Layout