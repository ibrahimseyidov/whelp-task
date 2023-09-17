import React from 'react'
import styles from 'components/UserEdit/UserEditContainer/usereditcontainer.module.css'

const UserEditContainer = ({ children }) => {
    return (
        <>
            <div className={styles['user-edit-container']}>
                {children}
            </div>
        </>
    )
}

export default UserEditContainer