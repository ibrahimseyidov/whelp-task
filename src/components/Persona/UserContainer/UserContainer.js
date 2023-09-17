import React from 'react'
import styles from 'components/Persona/UserContainer/usercontainer.module.css'

const UserContainer = ({ children }) => {
    return (
        <>
            <section>
                <div className={styles['user-container']}>
                    {children}
                </div>
            </section>
        </>
    )
}

export default UserContainer