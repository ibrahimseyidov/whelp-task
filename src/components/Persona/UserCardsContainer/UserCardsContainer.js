import React from 'react'
import styles from 'components/Persona/UserCardsContainer/usercardscontainer.module.css';

const UserCardsContainer = ({children}) => {
    return (
        <>
            <div className={styles['user-cards-container']}>
                {children}
            </div>
        </>
    )
}

export default UserCardsContainer